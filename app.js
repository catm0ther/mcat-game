// ── Custom Cursor (desktop only) ───────────────────────────────────────────
(function () {
  if (!window.matchMedia('(hover: hover)').matches) return;

  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  cursor.textContent = '⭐';
  document.body.appendChild(cursor);

  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
  });

  document.addEventListener('mouseover', e => {
    const hover = e.target.closest('button, a, [role="button"]');
    cursor.classList.toggle('cursor-hover', !!hover);
  });

  document.addEventListener('mousedown', () => cursor.classList.add('cursor-click'));
  document.addEventListener('mouseup',   () => cursor.classList.remove('cursor-click'));
})();

// ── State ──────────────────────────────────────────────────────────────────
const state = {
  cluster: null,
  gameType: null,   // 'scenario-drop' | 'showdown' | 'all'
  session: [],
  index: 0,
  score: 0,
  answered: false,
  currentQ: null,
  currentAnswers: [],
};

const isMobile = window.innerWidth < 768 ||
  /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// ── Progress ───────────────────────────────────────────────────────────────
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
function buildSession(cluster, gameType) {
  const qs = [];

  if (gameType === 'scenario-drop' || gameType === 'all') {
    cluster.scenarioDrop.forEach(q =>
      qs.push({ type: 'scenario-drop', ...q })
    );
  }

  if (gameType === 'showdown' || gameType === 'all') {
    cluster.showdown.forEach(q =>
      qs.push({ type: 'showdown', ...q })
    );
  }

  return shuffle(qs);
}

// ── World Map (Home) ───────────────────────────────────────────────────────
function renderMap() {
  state.cluster = null;
  state.gameType = null;

  const zones = CLUSTERS.map(c => {
    const mastery = getMastery(c.id);
    const p = getProgress()[c.id];
    const isNew = !p || p.total === 0;
    const isHot = mastery > 0 && mastery < 60;
    const isGreat = mastery >= 85;

    const badge = isNew    ? `<span class="zone-badge badge-new">New</span>`
                : isGreat  ? `<span class="zone-badge badge-great">Mastered 🔥</span>`
                : isHot    ? `<span class="zone-badge badge-hot">Needs work</span>`
                : '';

    const masteryLabel = mastery === 0 ? 'Not started'
      : mastery < 60 ? `${mastery}% correct`
      : mastery < 85 ? `${mastery}% — almost there`
      : `${mastery}% — crushing it`;

    return `
      <button class="zone-territory"
        onclick="renderZoneHub('${c.id}')"
        style="--zone-color:${c.color}; --zone-light:${c.lightColor}">
        ${badge}
        <div class="zone-top">
          <span class="zone-icon">${c.emoji}</span>
          <div class="zone-names">
            <div class="zone-place">${c.place}</div>
            <div class="zone-tagline">${c.tagline}</div>
          </div>
        </div>
        <div class="zone-topics">${c.description}</div>
        <div class="zone-footer">
          <div class="mastery-bar">
            <div class="mastery-fill" style="width:${mastery}%"></div>
          </div>
          <span class="status-label">${masteryLabel}</span>
        </div>
      </button>`;
  }).join('');

  render(`
    <div class="screen-map">
      <span class="compass">🧭</span>
      <header class="map-header">
        <div class="map-title">MCAT <span>World</span></div>
        <p class="map-subtitle">
          ${isMobile ? '📱 Phone mode — quick sessions · ' : ''}Pick a zone to train
        </p>
      </header>
      <div class="zone-grid">${zones}</div>
    </div>
  `);
}

// ── Zone Hub ───────────────────────────────────────────────────────────────
function renderZoneHub(clusterId) {
  const cluster = CLUSTERS.find(c => c.id === clusterId);
  state.cluster = cluster;

  const sdCount = cluster.scenarioDrop.length;
  const swCount = cluster.showdown.length;
  const allCount = sdCount + swCount;

  // On mobile, showdown gets folded into "all" — keep it simple
  const showdownOption = isMobile ? '' : `
    <button class="game-option"
      onclick="startGame('${clusterId}', 'showdown')"
      style="--zone-color:${cluster.color}; --zone-light:${cluster.lightColor}">
      <div class="game-option-icon">⚔️</div>
      <div class="game-option-info">
        <div class="game-option-name">Showdown</div>
        <div class="game-option-desc">Two concepts face off — one scenario, pick the right match</div>
      </div>
      <span class="game-option-count">${swCount} rounds</span>
    </button>`;

  render(`
    <div class="screen-hub" style="--zone-color:${cluster.color}; --zone-light:${cluster.lightColor}">
      <div class="hub-hero">
        <div class="hub-hero-bg"></div>
        <button class="hub-back" onclick="renderMap()">← Map</button>
        <div class="hub-icon">${cluster.emoji}</div>
        <div class="hub-place">${cluster.place}</div>
        <div class="hub-tagline">${cluster.tagline}</div>
      </div>

      <div class="hub-body">
        <p class="hub-prompt">Choose your game</p>
        <div class="game-menu">

          <button class="game-option"
            onclick="startGame('${clusterId}', 'scenario-drop')"
            style="--zone-color:${cluster.color}; --zone-light:${cluster.lightColor}">
            <div class="game-option-icon">🎯</div>
            <div class="game-option-info">
              <div class="game-option-name">Scenario Drop</div>
              <div class="game-option-desc">A scenario appears — pick the concept that fits from 4 choices</div>
            </div>
            <span class="game-option-count">${sdCount} questions</span>
          </button>

          ${showdownOption}

          <button class="game-option play-all"
            onclick="startGame('${clusterId}', 'all')"
            style="--zone-color:${cluster.color}; --zone-light:${cluster.lightColor}">
            <div class="game-option-icon" style="background:rgba(255,255,255,0.2)">🌀</div>
            <div class="game-option-info">
              <div class="game-option-name">Play All</div>
              <div class="game-option-desc">Everything shuffled together — the full zone experience</div>
            </div>
            <span class="game-option-count">${isMobile ? sdCount + 1 : allCount} questions</span>
          </button>

        </div>
      </div>
    </div>
  `);
}

// ── Start game ─────────────────────────────────────────────────────────────
function startGame(clusterId, gameType) {
  const cluster = CLUSTERS.find(c => c.id === clusterId);
  state.cluster  = cluster;
  state.gameType = gameType;
  state.session  = buildSession(cluster, gameType);
  state.index    = 0;
  state.score    = 0;
  state.answered = false;
  renderQuestion();
}

// ── Render current question ────────────────────────────────────────────────
function renderQuestion() {
  const q = state.session[state.index];
  state.currentQ   = q;
  state.answered   = false;

  const pct   = (state.index / state.session.length) * 100;
  const count = `${state.index + 1} / ${state.session.length}`;
  const c     = state.cluster;

  const gameLabel = q.type === 'scenario-drop' ? 'Scenario Drop' : 'Showdown';

  const header = `
    <div class="game-header" style="--zone-color:${c.color}">
      <button class="btn-back" onclick="renderZoneHub('${c.id}')">← Zone</button>
      <div class="header-center">
        <span class="cluster-name">${c.emoji} ${c.place}</span>
        <span class="game-type-pill">${gameLabel}</span>
      </div>
      <span class="question-count">${count}</span>
    </div>
    <div class="progress-track">
      <div class="progress-fill" style="width:${pct}%; background:${c.color}"></div>
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
  const c = state.cluster;

  render(`
    <div class="screen-game" style="--zone-color:${c.color}; --zone-light:${c.lightColor}">
      ${header}
      <div class="game-body">
        <div class="scenario-card">
          <p class="scenario-text">${q.scenario}</p>
        </div>
        <div class="answers-grid" id="answers">
          ${answers.map((a, i) =>
            `<button class="answer-btn" data-idx="${i}">${a}</button>`
          ).join('')}
        </div>
        <div id="feedback" class="feedback-panel hidden"></div>
      </div>
    </div>
  `);

  document.querySelectorAll('.answer-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (state.answered) return;
      state.answered = true;
      const selected = state.currentAnswers[parseInt(btn.dataset.idx)];
      const correct  = selected === state.currentQ.correct;
      if (correct) state.score++;
      recordAnswer(state.cluster.id, correct);

      document.querySelectorAll('.answer-btn').forEach(b => {
        const val = state.currentAnswers[parseInt(b.dataset.idx)];
        if (val === state.currentQ.correct) b.classList.add('correct');
        else if (b === btn)                  b.classList.add('incorrect');
        else                                 b.classList.add('dimmed');
        b.disabled = true;
      });

      showFeedback(correct, state.currentQ.explanation);
    });
  });
}

// ── Showdown ───────────────────────────────────────────────────────────────
function renderShowdown(q, header) {
  const c = state.cluster;

  render(`
    <div class="screen-game" style="--zone-color:${c.color}; --zone-light:${c.lightColor}">
      ${header}
      <div class="game-body">
        <p class="showdown-prompt">Which concept fits?</p>
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
    { id: 'btnA', val: q.conceptA },
    { id: 'btnB', val: q.conceptB },
  ].forEach(({ id, val }) => {
    document.getElementById(id).addEventListener('click', function () {
      if (state.answered) return;
      state.answered = true;
      const correct = val === state.currentQ.correct;
      if (correct) state.score++;
      recordAnswer(state.cluster.id, correct);

      document.querySelectorAll('.showdown-btn').forEach(b => {
        const isWinner = b.textContent.trim() === state.currentQ.correct;
        if (isWinner)          b.classList.add('correct');
        else if (b === this)   b.classList.add('incorrect');
        else                   b.classList.add('dimmed');
        b.disabled = true;
      });

      showFeedback(correct, state.currentQ.explanation);
    });
  });
}

// ── Feedback ───────────────────────────────────────────────────────────────
function showFeedback(correct, explanation) {
  const panel  = document.getElementById('feedback');
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
    <div class="feedback-actions">
      <button class="btn-flag" onclick="flagQuestion()">🚩 Flag question</button>
      <button class="btn-next" onclick="nextQuestion()">
        ${isLast ? 'See Results →' : 'Next →'}
      </button>
    </div>
  `;
}

// ── Flag ───────────────────────────────────────────────────────────────────
function flagQuestion() {
  const q = state.currentQ;
  const flags = JSON.parse(localStorage.getItem('mcatFlags') || '[]');
  if (!flags.some(f => f.scenario === q.scenario)) {
    flags.push({ cluster: state.cluster.id, scenario: q.scenario, type: q.type });
    localStorage.setItem('mcatFlags', JSON.stringify(flags));
  }
  const btn = document.querySelector('.btn-flag');
  if (btn) { btn.textContent = '🚩 Flagged'; btn.disabled = true; }
}

// ── Advance ────────────────────────────────────────────────────────────────
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
  const pct   = Math.round((state.score / total) * 100);
  const c     = state.cluster;
  const gt    = state.gameType;

  let emoji, title, subtitle;
  if (pct >= 90) {
    emoji = '🔥'; title = 'On Fire!';
    subtitle = 'This zone is yours. Keep it hot.';
  } else if (pct >= 70) {
    emoji = '💪'; title = 'Solid Work';
    subtitle = "You're getting there. One more round will lock it in.";
  } else if (pct >= 50) {
    emoji = '📈'; title = 'Building Up';
    subtitle = 'These gaps are closing. Keep going.';
  } else {
    emoji = '🧠'; title = 'Brain Training';
    subtitle = "This is exactly why we practice. Run it again.";
  }

  render(`
    <div class="screen-results" style="--zone-color:${c.color}">
      <div class="results-content">
        <div class="results-emoji">${emoji}</div>
        <h2>${title}</h2>
        <p class="results-subtitle">${subtitle}</p>
        <div class="score-display">
          <span class="score-number">${state.score} / ${total}</span>
          <span class="score-pct">${pct}% correct</span>
        </div>
        <div class="results-actions">
          <button class="btn-primary" onclick="renderZoneHub('${c.id}')">← Zone</button>
          <button class="btn-secondary" onclick="startGame('${c.id}', '${gt}')">Play Again</button>
        </div>
      </div>
    </div>
  `);
}

// ── Boot ───────────────────────────────────────────────────────────────────
renderMap();
