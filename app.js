// ── State ──────────────────────────────────────────────────────────────────
const state = {
  cluster: null,
  session: [],
  index: 0,
  score: 0,
  answered: false,
  currentQ: null,
  currentAnswers: [],
};

const isMobile = window.innerWidth < 768 ||
  /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// ── Progress (localStorage) ────────────────────────────────────────────────
function getProgress() {
  try { return JSON.parse(localStorage.getItem('mcatProgress') || '{}'); }
  catch { return {}; }
}

function recordAnswer(clusterId, correct) {
  const p = getProgress();
  if (!p[clusterId]) p[clusterId] = { correct: 0, total: 0 };
  p[clusterId].total++;
  if (correct) p[clusterId].correct++;
  localStorage.setItem('mcatProgress', JSON.stringify(p));
}

function getMastery(clusterId) {
  const p = getProgress();
  const c = p[clusterId];
  if (!c || c.total === 0) return 0;
  return Math.round((c.correct / c.total) * 100);
}

// ── Utilities ──────────────────────────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function render(html) {
  document.getElementById('app').innerHTML = html;
}

// ── Build session ──────────────────────────────────────────────────────────
function buildSession(cluster) {
  const questions = [];

  cluster.scenarioDrop.forEach(q =>
    questions.push({ type: 'scenario-drop', ...q })
  );

  // On mobile, skip showdown to keep sessions snappy
  if (!isMobile) {
    cluster.showdown.forEach(q =>
      questions.push({ type: 'showdown', ...q })
    );
  } else {
    // On mobile include one showdown for variety if available
    if (cluster.showdown.length > 0) {
      questions.push({ type: 'showdown', ...cluster.showdown[0] });
    }
  }

  return shuffle(questions);
}

// ── Home Screen ────────────────────────────────────────────────────────────
function renderHome() {
  state.cluster = null;

  const cards = CLUSTERS.map(cluster => {
    const mastery = getMastery(cluster.id);
    const masteryLabel = mastery === 0 ? 'Not started yet'
      : mastery < 60 ? `${mastery}% — keep going`
      : mastery < 85 ? `${mastery}% — getting there`
      : `${mastery}% — crushing it 🔥`;

    return `
      <button class="cluster-card" onclick="startCluster('${cluster.id}')"
        style="--cluster-color:${cluster.color}; --cluster-light:${cluster.lightColor}">
        <div class="cluster-card-top">
          <span class="cluster-emoji">${cluster.emoji}</span>
          <div class="cluster-info">
            <h2>${cluster.name}</h2>
            <p>${cluster.description}</p>
          </div>
        </div>
        <div class="cluster-footer">
          <div class="mastery-bar">
            <div class="mastery-fill" style="width:${mastery}%"></div>
          </div>
          <span class="status-label">${masteryLabel}</span>
        </div>
      </button>`;
  }).join('');

  render(`
    <div class="screen-home">
      <header class="home-header">
        <h1>MCAT Training</h1>
        <p class="subtitle">Close those gaps. One cluster at a time. 💪</p>
        ${isMobile ? '<span class="device-badge">📱 Phone Mode — quick sessions</span>' : ''}
      </header>
      <div class="cluster-grid">${cards}</div>
    </div>
  `);
}

// ── Start cluster session ──────────────────────────────────────────────────
function startCluster(clusterId) {
  const cluster = CLUSTERS.find(c => c.id === clusterId);
  state.cluster = cluster;
  state.session = buildSession(cluster);
  state.index = 0;
  state.score = 0;
  state.answered = false;
  renderQuestion();
}

// ── Render current question ────────────────────────────────────────────────
function renderQuestion() {
  const q = state.session[state.index];
  state.currentQ = q;
  state.answered = false;

  const progressPct = (state.index / state.session.length) * 100;
  const countLabel = `${state.index + 1} / ${state.session.length}`;
  const cluster = state.cluster;

  const header = `
    <div class="game-header" style="--cluster-color:${cluster.color}">
      <button class="btn-back" onclick="renderHome()">← Home</button>
      <div class="header-center">
        <span class="cluster-name">${cluster.emoji} ${cluster.name}</span>
        <span class="game-type-badge">${q.type === 'scenario-drop' ? 'Scenario Drop' : 'Showdown'}</span>
      </div>
      <span class="question-count">${countLabel}</span>
    </div>
    <div class="progress-track">
      <div class="progress-fill" style="width:${progressPct}%; background:${cluster.color}"></div>
    </div>`;

  if (q.type === 'scenario-drop') {
    renderScenarioDrop(q, header);
  } else {
    renderShowdown(q, header);
  }
}

// ── Scenario Drop ──────────────────────────────────────────────────────────
function renderScenarioDrop(q, header) {
  const answers = shuffle([q.correct, ...q.wrong]);
  state.currentAnswers = answers;

  const answerBtns = answers.map((a, i) =>
    `<button class="answer-btn" data-idx="${i}">${a}</button>`
  ).join('');

  render(`
    <div class="screen-game">
      ${header}
      <div class="game-body">
        <div class="scenario-card">
          <p class="scenario-text">${q.scenario}</p>
        </div>
        <div class="answers-grid" id="answers">${answerBtns}</div>
        <div id="feedback" class="feedback-panel hidden"></div>
      </div>
    </div>
  `);

  document.querySelectorAll('.answer-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (state.answered) return;
      state.answered = true;
      const selected = state.currentAnswers[parseInt(btn.dataset.idx)];
      const correct = selected === state.currentQ.correct;
      if (correct) state.score++;
      recordAnswer(state.cluster.id, correct);

      document.querySelectorAll('.answer-btn').forEach(b => {
        const val = state.currentAnswers[parseInt(b.dataset.idx)];
        if (val === state.currentQ.correct) b.classList.add('correct');
        else if (b === btn) b.classList.add('incorrect');
        else b.classList.add('dimmed');
        b.disabled = true;
      });

      showFeedback(correct, state.currentQ.explanation);
    });
  });
}

// ── Showdown ───────────────────────────────────────────────────────────────
function renderShowdown(q, header) {
  render(`
    <div class="screen-game">
      ${header}
      <div class="game-body">
        <p class="showdown-prompt">Which concept fits this scenario?</p>
        <div class="scenario-card">
          <p class="scenario-text">${q.scenario}</p>
        </div>
        <div class="showdown-choices">
          <button class="showdown-btn" id="btnA">${q.conceptA}</button>
          <div class="vs-badge">VS</div>
          <button class="showdown-btn" id="btnB">${q.conceptB}</button>
        </div>
        <div id="feedback" class="feedback-panel hidden"></div>
      </div>
    </div>
  `);

  [
    { el: document.getElementById('btnA'), val: q.conceptA },
    { el: document.getElementById('btnB'), val: q.conceptB },
  ].forEach(({ el, val }) => {
    el.addEventListener('click', () => {
      if (state.answered) return;
      state.answered = true;
      const correct = val === state.currentQ.correct;
      if (correct) state.score++;
      recordAnswer(state.cluster.id, correct);

      document.querySelectorAll('.showdown-btn').forEach(b => {
        const isCorrectBtn = b.textContent.trim() === state.currentQ.correct;
        if (isCorrectBtn) b.classList.add('correct');
        else if (b === el) b.classList.add('incorrect');
        else b.classList.add('dimmed');
        b.disabled = true;
      });

      showFeedback(correct, state.currentQ.explanation);
    });
  });
}

// ── Feedback ───────────────────────────────────────────────────────────────
function showFeedback(correct, explanation) {
  const panel = document.getElementById('feedback');
  const isLast = state.index + 1 >= state.session.length;

  panel.className = `feedback-panel ${correct ? 'feedback-correct' : 'feedback-incorrect'}`;
  panel.innerHTML = `
    <div class="feedback-top">
      <span class="feedback-icon">${correct ? '✓' : '✗'}</span>
      <div class="feedback-text">
        <strong>${correct ? 'Correct!' : 'Not quite.'}</strong>
        <p>${explanation}</p>
      </div>
    </div>
    <div style="display:flex; justify-content:space-between; align-items:center; margin-top:4px">
      <button class="btn-flag" onclick="flagQuestion()">🚩 Flag this question</button>
      <button class="btn-next" onclick="nextQuestion()">${isLast ? 'See Results →' : 'Next →'}</button>
    </div>
  `;
}

// ── Flag question ──────────────────────────────────────────────────────────
function flagQuestion() {
  const q = state.currentQ;
  const flags = JSON.parse(localStorage.getItem('mcatFlags') || '[]');
  const alreadyFlagged = flags.some(f => f.scenario === q.scenario);
  if (!alreadyFlagged) {
    flags.push({ cluster: state.cluster.id, scenario: q.scenario, type: q.type });
    localStorage.setItem('mcatFlags', JSON.stringify(flags));
  }
  const btn = document.querySelector('.btn-flag');
  if (btn) { btn.textContent = '🚩 Flagged'; btn.disabled = true; }
}

// ── Next question / results ────────────────────────────────────────────────
function nextQuestion() {
  state.index++;
  if (state.index >= state.session.length) {
    renderResults();
  } else {
    renderQuestion();
  }
}

// ── Results ────────────────────────────────────────────────────────────────
function renderResults() {
  const total = state.session.length;
  const pct = Math.round((state.score / total) * 100);
  const cluster = state.cluster;

  let emoji, title, subtitle;
  if (pct >= 90) {
    emoji = '🔥'; title = 'On Fire!';
    subtitle = 'This cluster is yours. Keep it hot.';
  } else if (pct >= 70) {
    emoji = '💪'; title = 'Solid Work';
    subtitle = "You're getting there. One more round will seal it.";
  } else if (pct >= 50) {
    emoji = '📈'; title = 'Building Up';
    subtitle = 'These gaps are closing. Keep going.';
  } else {
    emoji = '🧠'; title = 'Brain Training';
    subtitle = "This is exactly why we practice. Run it again.";
  }

  render(`
    <div class="screen-results" style="--cluster-color:${cluster.color}">
      <div class="results-content">
        <div class="results-emoji">${emoji}</div>
        <h2>${title}</h2>
        <p class="results-subtitle">${subtitle}</p>
        <div class="score-display">
          <span class="score-number">${state.score} / ${total}</span>
          <span class="score-pct">${pct}% correct</span>
        </div>
        <div class="results-actions">
          <button class="btn-primary" onclick="renderHome()">← Home</button>
          <button class="btn-secondary" onclick="startCluster('${cluster.id}')">Play Again</button>
        </div>
      </div>
    </div>
  `);
}

// ── Boot ───────────────────────────────────────────────────────────────────
renderHome();
