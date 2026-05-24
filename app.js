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
    cursor.classList.toggle('cursor-hover', !!e.target.closest('button, a'));
  });
  document.addEventListener('mousedown', () => cursor.classList.add('cursor-click'));
  document.addEventListener('mouseup',   () => cursor.classList.remove('cursor-click'));
})();

// ── State ──────────────────────────────────────────────────────────────────
const state = {
  section: null,
  cluster: null,
  gameType: null,
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
  const p = getProgress()[clusterId];
  if (!p || p.total === 0) return 0;
  return Math.round((p.correct / p.total) * 100);
}

function getSectionMastery(section) {
  const clusters = section.clusterIds.map(id => CLUSTERS.find(c => c.id === id));
  const p = getProgress();
  let correct = 0, total = 0;
  clusters.forEach(c => {
    const rec = p[c.id];
    if (rec) { correct += rec.correct; total += rec.total; }
  });
  return total === 0 ? 0 : Math.round((correct / total) * 100);
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

function render(html) { document.getElementById('app').innerHTML = html; }

function buildSession(cluster, gameType) {
  const qs = [];
  if (gameType === 'scenario-drop' || gameType === 'all')
    cluster.scenarioDrop.forEach(q => qs.push({ type: 'scenario-drop', ...q }));
  if (gameType === 'showdown' || gameType === 'all')
    cluster.showdown.forEach(q => qs.push({ type: 'showdown', ...q }));
  if (gameType === 'all' && isMobile)
    return shuffle(qs.filter(q => q.type === 'scenario-drop').concat(
      cluster.showdown.length ? [{ type: 'showdown', ...cluster.showdown[0] }] : []
    ));
  return shuffle(qs);
}

// ══════════════════════════════════════════════════════════════════════════
// SCREEN 1 — Section Map (Home)
// ══════════════════════════════════════════════════════════════════════════
function renderSectionMap() {
  state.section = null; state.cluster = null;

  const cards = SECTIONS.map(s => {
    const mastery = s.available ? getSectionMastery(s) : 0;
    const masteryBar = s.available ? `
      <div class="section-footer">
        <div class="mastery-bar">
          <div class="mastery-fill" style="width:${mastery}%; background:${s.color}"></div>
        </div>
        <span class="status-label">${mastery === 0 ? 'Not started' : mastery + '% correct'}</span>
      </div>` : '';

    return `
      <button class="section-card ${s.available ? '' : 'section-wip'}"
        ${s.available ? `onclick="renderSectionHub('${s.id}')"` : 'disabled'}
        style="--sec-color:${s.color}; --sec-light:${s.lightColor}">
        <div class="section-card-top">
          <span class="section-icon">${s.emoji}</span>
          <div class="section-names">
            <div class="section-name">${s.name}</div>
            <div class="section-full">${s.fullName}</div>
          </div>
          ${!s.available ? '<span class="wip-badge">Coming soon</span>' : ''}
        </div>
        ${masteryBar}
      </button>`;
  }).join('');

  render(`
    <div class="screen-section-map">
      <header class="map-header">
        <div class="map-title">MCAT <span>Training</span></div>
        <p class="map-subtitle">Pick a section to train${isMobile ? ' · 📱 phone mode' : ''}</p>
      </header>
      <div class="section-grid">${cards}</div>
      <p class="map-footnote">CARS not shown — you don't need it 💅</p>
    </div>
  `);
}

// ══════════════════════════════════════════════════════════════════════════
// SCREEN 2 — Section Hub (e.g. Psych/Soc)
// Shows all topic clusters within the section + overall stats
// ══════════════════════════════════════════════════════════════════════════
function renderSectionHub(sectionId) {
  const section = SECTIONS.find(s => s.id === sectionId);
  state.section = section;
  const clusters = section.clusterIds.map(id => CLUSTERS.find(c => c.id === id));
  const mastery = getSectionMastery(section);
  const totalQs = clusters.reduce((n, c) => n + c.scenarioDrop.length + c.showdown.length, 0);

  const clusterCards = clusters.map(c => {
    const cm = getMastery(c.id);
    const p = getProgress()[c.id];
    const badge = !p || p.total === 0 ? '<span class="topic-badge badge-new">New</span>'
      : cm >= 85 ? '<span class="topic-badge badge-great">🔥 Mastered</span>'
      : cm < 60  ? '<span class="topic-badge badge-hot">Needs work</span>'
      : '';

    return `
      <button class="topic-card" onclick="renderZoneHub('${c.id}')"
        style="--zone-color:${c.color}; --zone-light:${c.lightColor}">
        <div class="topic-card-top">
          <span class="topic-icon">${c.emoji}</span>
          <div class="topic-names">
            <div class="topic-place">${c.place}</div>
            <div class="topic-tagline">${c.tagline}</div>
          </div>
          ${badge}
        </div>
        <div class="topic-concepts">${c.description}</div>
        <div class="topic-footer">
          <div class="mastery-bar">
            <div class="mastery-fill" style="width:${cm}%; background:${c.color}"></div>
          </div>
          <span class="status-label">${cm === 0 ? 'Not started' : cm + '%'}</span>
        </div>
      </button>`;
  }).join('');

  render(`
    <div class="screen-section-hub" style="--sec-color:${section.color}; --sec-light:${section.lightColor}">

      <div class="section-hub-hero">
        <div class="section-hub-hero-bg"></div>
        <button class="hub-back" onclick="renderSectionMap()">← Home</button>
        <div class="section-hub-icon">${section.emoji}</div>
        <div class="section-hub-name">${section.name}</div>
        <div class="section-hub-full">${section.fullName}</div>
        <div class="section-hub-stats">
          <div class="hub-stat">
            <span class="hub-stat-val">${totalQs}</span>
            <span class="hub-stat-label">questions</span>
          </div>
          <div class="hub-stat-divider"></div>
          <div class="hub-stat">
            <span class="hub-stat-val">${mastery}%</span>
            <span class="hub-stat-label">overall correct</span>
          </div>
          <div class="hub-stat-divider"></div>
          <div class="hub-stat">
            <span class="hub-stat-val">${clusters.length}</span>
            <span class="hub-stat-label">topics</span>
          </div>
        </div>
      </div>

      <div class="section-hub-body">
        <p class="hub-section-label">Topics</p>
        <div class="topic-grid">${clusterCards}</div>
      </div>

    </div>
  `);
}

// ══════════════════════════════════════════════════════════════════════════
// SCREEN 3 — Zone Hub (game selection for one topic cluster)
// ══════════════════════════════════════════════════════════════════════════
function renderZoneHub(clusterId) {
  const cluster = CLUSTERS.find(c => c.id === clusterId);
  const section = SECTIONS.find(s => s.clusterIds.includes(clusterId));
  state.cluster = cluster;

  const sdCount  = cluster.scenarioDrop.length;
  const swCount  = cluster.showdown.length;
  const allCount = sdCount + swCount;

  const showdownOption = isMobile ? '' : `
    <button class="game-option" onclick="startGame('${clusterId}','showdown')"
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
        <div class="hub-nav">
          <button class="btn-home-light" onclick="renderSectionMap()">🏠</button>
          <button class="hub-back" onclick="renderSectionHub('${section.id}')">← ${section.name}</button>
        </div>
        <div class="hub-icon">${cluster.emoji}</div>
        <div class="hub-place">${cluster.place}</div>
        <div class="hub-tagline">${cluster.tagline}</div>
      </div>
      <div class="hub-body">
        <p class="hub-prompt">Choose your game</p>
        <div class="game-menu">
          <button class="game-option" onclick="startGame('${clusterId}','scenario-drop')"
            style="--zone-color:${cluster.color}; --zone-light:${cluster.lightColor}">
            <div class="game-option-icon">🎯</div>
            <div class="game-option-info">
              <div class="game-option-name">Scenario Drop</div>
              <div class="game-option-desc">Read a scenario — pick the concept that fits from 4 choices</div>
            </div>
            <span class="game-option-count">${sdCount} questions</span>
          </button>
          ${showdownOption}
          <button class="game-option play-all" onclick="startGame('${clusterId}','all')"
            style="--zone-color:${cluster.color}; --zone-light:${cluster.lightColor}">
            <div class="game-option-icon" style="background:rgba(255,255,255,0.2)">🌀</div>
            <div class="game-option-info">
              <div class="game-option-name">Play All</div>
              <div class="game-option-desc">Everything shuffled — the full topic experience</div>
            </div>
            <span class="game-option-count">${isMobile ? sdCount + Math.min(1, swCount) : allCount} questions</span>
          </button>
        </div>
      </div>
    </div>
  `);
}

// ══════════════════════════════════════════════════════════════════════════
// SCREEN 4 — Game
// ══════════════════════════════════════════════════════════════════════════
function startGame(clusterId, gameType) {
  const cluster = CLUSTERS.find(c => c.id === clusterId);
  state.cluster  = cluster;
  state.gameType = gameType;
  state.section  = SECTIONS.find(s => s.clusterIds.includes(clusterId));
  state.session  = buildSession(cluster, gameType);
  state.index    = 0;
  state.score    = 0;
  state.answered = false;
  renderQuestion();
}

function renderQuestion() {
  const q  = state.session[state.index];
  state.currentQ   = q;
  state.answered   = false;
  const pct   = (state.index / state.session.length) * 100;
  const count = `${state.index + 1} / ${state.session.length}`;
  const c     = state.cluster;
  const label = q.type === 'scenario-drop' ? 'Scenario Drop' : 'Showdown';

  const header = `
    <div class="game-header" style="--zone-color:${c.color}">
      <div class="header-left">
        <button class="btn-home" onclick="renderSectionMap()" title="Home">🏠</button>
        <button class="btn-back" onclick="renderZoneHub('${c.id}')">← Zone</button>
      </div>
      <div class="header-center">
        <span class="cluster-name">${c.emoji} ${c.place}</span>
        <span class="game-type-pill">${label}</span>
      </div>
      <span class="question-count">${count}</span>
    </div>
    <div class="progress-track">
      <div class="progress-fill" style="width:${pct}%; background:${c.color}"></div>
    </div>`;

  q.type === 'scenario-drop'
    ? renderScenarioDrop(q, header)
    : renderShowdown(q, header);
}

function renderScenarioDrop(q, header) {
  const answers = shuffle([q.correct, ...q.wrong]);
  state.currentAnswers = answers;
  const c = state.cluster;

  render(`
    <div class="screen-game" style="--zone-color:${c.color}; --zone-light:${c.lightColor}">
      ${header}
      <div class="game-body">
        <div class="scenario-card"><p class="scenario-text">${q.scenario}</p></div>
        <div class="answers-grid" id="answers">
          ${answers.map((a, i) => `<button class="answer-btn" data-idx="${i}">${a}</button>`).join('')}
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

function renderShowdown(q, header) {
  const c = state.cluster;

  render(`
    <div class="screen-game" style="--zone-color:${c.color}; --zone-light:${c.lightColor}">
      ${header}
      <div class="game-body">
        <p class="showdown-prompt">Which concept fits?</p>
        <div class="scenario-card"><p class="scenario-text">${q.scenario}</p></div>
        <div class="showdown-choices">
          <button class="showdown-btn" id="btnA">${q.conceptA}</button>
          <div class="vs-badge">VS</div>
          <button class="showdown-btn" id="btnB">${q.conceptB}</button>
        </div>
        <div id="feedback" class="feedback-panel hidden"></div>
      </div>
    </div>
  `);

  [{ id: 'btnA', val: q.conceptA }, { id: 'btnB', val: q.conceptB }].forEach(({ id, val }) => {
    document.getElementById(id).addEventListener('click', function () {
      if (state.answered) return;
      state.answered = true;
      const correct = val === state.currentQ.correct;
      if (correct) state.score++;
      recordAnswer(state.cluster.id, correct);
      document.querySelectorAll('.showdown-btn').forEach(b => {
        const winner = b.textContent.trim() === state.currentQ.correct;
        if (winner)          b.classList.add('correct');
        else if (b === this) b.classList.add('incorrect');
        else                 b.classList.add('dimmed');
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
      <button class="btn-next" onclick="nextQuestion()">${isLast ? 'See Results →' : 'Next →'}</button>
    </div>`;
}

function flagQuestion() {
  const q = state.currentQ;
  const flags = JSON.parse(localStorage.getItem('mcatFlags') || '[]');
  if (!flags.some(f => f.scenario === q.scenario))
    flags.push({ cluster: state.cluster.id, scenario: q.scenario, type: q.type });
  localStorage.setItem('mcatFlags', JSON.stringify(flags));
  const btn = document.querySelector('.btn-flag');
  if (btn) { btn.textContent = '🚩 Flagged'; btn.disabled = true; }
}

function nextQuestion() {
  state.index++;
  state.index >= state.session.length ? renderResults() : renderQuestion();
}

// ══════════════════════════════════════════════════════════════════════════
// SCREEN 5 — Results
// ══════════════════════════════════════════════════════════════════════════
function renderResults() {
  const total = state.session.length;
  const pct   = Math.round((state.score / total) * 100);
  const c     = state.cluster;

  const [emoji, title, subtitle] =
    pct >= 90 ? ['🔥', 'On Fire!',      'This topic is yours. Keep it hot.']
  : pct >= 70 ? ['💪', 'Solid Work',    "You're getting there. One more round will lock it in."]
  : pct >= 50 ? ['📈', 'Building Up',   'These gaps are closing. Keep going.']
  :             ['🧠', 'Brain Training', "This is exactly why we practice. Run it again."];

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
          <button class="btn-secondary" onclick="startGame('${c.id}','${state.gameType}')">Play Again</button>
        </div>
      </div>
    </div>
  `);
}

// ── Boot ───────────────────────────────────────────────────────────────────
renderSectionMap();
