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

// ── Mastery System (per-concept) ───────────────────────────────────────────
// States: 'unexplored' | 'practicing' | 'mastered'
// Mastered concepts resurface once per session as a check-in.
// Getting something wrong resets the streak but keeps 'practicing' state.

function getMasteryData() {
  try { return JSON.parse(localStorage.getItem('mcatMastery') || '{}'); }
  catch { return {}; }
}

function saveMasteryData(data) {
  localStorage.setItem('mcatMastery', JSON.stringify(data));
}

function getConceptRecord(conceptId) {
  const data = getMasteryData();
  return data[conceptId] || { streak: 0, totalSeen: 0, totalCorrect: 0, state: 'unexplored' };
}

function recordAnswer(conceptId, correct) {
  const data = getMasteryData();
  if (!data[conceptId]) {
    data[conceptId] = { streak: 0, totalSeen: 0, totalCorrect: 0, state: 'unexplored' };
  }
  const rec = data[conceptId];
  rec.totalSeen++;
  if (correct) {
    rec.totalCorrect++;
    rec.streak++;
  } else {
    rec.streak = 0;
    // Wrong answer: drop from mastered back to practicing
    if (rec.state === 'mastered') rec.state = 'practicing';
  }
  // State transitions
  if (rec.state === 'unexplored') rec.state = 'practicing';
  if (rec.streak >= 3)           rec.state = 'mastered';
  saveMasteryData(data);
}

function getConceptState(conceptId) {
  return getConceptRecord(conceptId).state;
}

// Cluster-level mastery summary for hub display
function getClusterMastery(cluster) {
  const allConcepts = getClusterConceptIds(cluster);
  const total    = allConcepts.length;
  const mastered = allConcepts.filter(id => getConceptState(id) === 'mastered').length;
  const practicing = allConcepts.filter(id => getConceptState(id) === 'practicing').length;
  return { total, mastered, practicing, unexplored: total - mastered - practicing };
}

function getClusterConceptIds(cluster) {
  // Unique concept IDs across all question types in this cluster
  const ids = new Set();
  cluster.scenarioDrop.forEach(q => ids.add(q.conceptId));
  cluster.showdown.forEach(q => ids.add(q.conceptId));
  return [...ids];
}

// Section-level: % of concepts mastered
function getSectionMastery(section) {
  const clusters = section.clusterIds.map(id => CLUSTERS.find(c => c.id === id));
  let total = 0, mastered = 0;
  clusters.forEach(c => {
    const m = getClusterMastery(c);
    total    += m.total;
    mastered += m.mastered;
  });
  return total === 0 ? 0 : Math.round((mastered / total) * 100);
}

// ── Session Builder ────────────────────────────────────────────────────────
// Priority: practicing (streak 1-2) > unexplored (max 3 new) > mastered (1 resurfacing)
// Each question gets a randomly chosen scenario variant so repeat plays feel fresh.

function pickScenario(q) {
  const variants = q.scenarios;
  return variants[Math.floor(Math.random() * variants.length)];
}

function buildSmartSession(cluster, gameType) {
  let pool = [];

  if (gameType === 'scenario-drop' || gameType === 'all') {
    cluster.scenarioDrop.forEach(q => pool.push({ ...q, type: 'scenario-drop' }));
  }
  if (gameType === 'showdown' || gameType === 'all') {
    cluster.showdown.forEach(q => pool.push({ ...q, type: 'showdown' }));
  }
  // Mobile: only 1 showdown max
  if (isMobile && gameType === 'all') {
    const sds = pool.filter(q => q.type === 'scenario-drop');
    const sw  = pool.filter(q => q.type === 'showdown').slice(0, 1);
    pool = [...sds, ...sw];
  }

  const unexplored  = pool.filter(q => getConceptState(q.conceptId) === 'unexplored');
  const practicing  = pool.filter(q => getConceptState(q.conceptId) === 'practicing');
  const mastered    = pool.filter(q => getConceptState(q.conceptId) === 'mastered');

  // Build: all practicing + up to 3 new unexplored + 1 mastered check-in
  const session = [
    ...shuffle(practicing),
    ...shuffle(unexplored).slice(0, 3),
    ...shuffle(mastered).slice(0, 1),
  ];

  // Fallback: if everything is mastered or nothing practicing, show full pool
  const finalPool = session.length > 0 ? session : shuffle(pool);

  // Attach a randomly chosen scenario variant to each question
  return finalPool.map(q => ({ ...q, scenario: pickScenario(q) }));
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
        <span class="status-label">${mastery === 0 ? 'Not started' : mastery + '% mastered'}</span>
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
// ══════════════════════════════════════════════════════════════════════════
function renderSectionHub(sectionId) {
  const section  = SECTIONS.find(s => s.id === sectionId);
  state.section  = section;
  const clusters = section.clusterIds.map(id => CLUSTERS.find(c => c.id === id));
  const sectionMastery = getSectionMastery(section);
  const totalConcepts  = clusters.reduce((n, c) => n + getClusterConceptIds(c).length, 0);

  const clusterCards = clusters.map(c => {
    const m = getClusterMastery(c);
    const pct = m.total === 0 ? 0 : Math.round((m.mastered / m.total) * 100);

    const badge = m.mastered === m.total && m.total > 0
      ? '<span class="topic-badge badge-great">🔥 All mastered</span>'
      : m.unexplored === m.total
      ? '<span class="topic-badge badge-new">Unexplored</span>'
      : m.mastered > 0
      ? `<span class="topic-badge badge-progress">${m.mastered}/${m.total} mastered</span>`
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
            <div class="mastery-fill" style="width:${pct}%; background:${c.color}"></div>
          </div>
          <span class="status-label">${m.unexplored === m.total ? 'Not started' : pct + '% mastered'}</span>
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
            <span class="hub-stat-val">${totalConcepts}</span>
            <span class="hub-stat-label">concepts</span>
          </div>
          <div class="hub-stat-divider"></div>
          <div class="hub-stat">
            <span class="hub-stat-val">${sectionMastery}%</span>
            <span class="hub-stat-label">mastered</span>
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
// SCREEN 3 — Zone Hub (game selection + concept status for one topic)
// ══════════════════════════════════════════════════════════════════════════
function renderZoneHub(clusterId) {
  const cluster = CLUSTERS.find(c => c.id === clusterId);
  const section = SECTIONS.find(s => s.clusterIds.includes(clusterId));
  state.cluster = cluster;

  const sdCount  = cluster.scenarioDrop.length;
  const swCount  = cluster.showdown.length;
  const allCount = isMobile ? sdCount + Math.min(1, swCount) : sdCount + swCount;
  const m        = getClusterMastery(cluster);

  // Concept status breakdown
  const conceptIds = getClusterConceptIds(cluster);
  const conceptChips = conceptIds.map(id => {
    const s = getConceptState(id);
    // Display name: find matching question to get the correct answer text
    const q = cluster.scenarioDrop.find(q => q.conceptId === id)
           || cluster.showdown.find(q => q.conceptId === id);
    const label = q ? q.correct : id;
    return `<span class="concept-chip state-${s}" title="${s}">${label}</span>`;
  }).join('');

  const masteredChips = conceptIds
    .filter(id => getConceptState(id) === 'mastered')
    .map(id => {
      const q = cluster.scenarioDrop.find(q => q.conceptId === id)
             || cluster.showdown.find(q => q.conceptId === id);
      return `<span class="concept-chip state-mastered">${q ? q.correct : id}</span>`;
    }).join('');

  const hasMastered = conceptIds.some(id => getConceptState(id) === 'mastered');

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

        <div class="concept-status-row">
          <span class="concept-status-stat"><span class="dot dot-unexplored"></span>${m.unexplored} unexplored</span>
          <span class="concept-status-stat"><span class="dot dot-practicing"></span>${m.practicing} practicing</span>
          <span class="concept-status-stat"><span class="dot dot-mastered"></span>${m.mastered} mastered</span>
        </div>

        <div class="concept-chips-wrap">${conceptChips}</div>

        ${hasMastered ? `
          <details class="mastered-drawer">
            <summary>🔥 Mastered concepts (${m.mastered})</summary>
            <div class="concept-chips-wrap" style="margin-top:8px">${masteredChips}</div>
          </details>` : ''}

        <p class="hub-prompt" style="margin-top:20px">Choose your game</p>
        <div class="game-menu">
          <button class="game-option" onclick="startGame('${clusterId}','scenario-drop')"
            style="--zone-color:${cluster.color}; --zone-light:${cluster.lightColor}">
            <div class="game-option-icon">🎯</div>
            <div class="game-option-info">
              <div class="game-option-name">Scenario Drop</div>
              <div class="game-option-desc">Read a scenario — pick the concept that fits from 4 choices</div>
            </div>
            <span class="game-option-count">${sdCount} concepts</span>
          </button>
          ${showdownOption}
          <button class="game-option play-all" onclick="startGame('${clusterId}','all')"
            style="--zone-color:${cluster.color}; --zone-light:${cluster.lightColor}">
            <div class="game-option-icon" style="background:rgba(255,255,255,0.2)">🌀</div>
            <div class="game-option-info">
              <div class="game-option-name">Smart Session</div>
              <div class="game-option-desc">Prioritizes what you're practicing + resurfaces mastered concepts</div>
            </div>
            <span class="game-option-count">${allCount} questions</span>
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
  const cluster   = CLUSTERS.find(c => c.id === clusterId);
  state.cluster   = cluster;
  state.gameType  = gameType;
  state.section   = SECTIONS.find(s => s.clusterIds.includes(clusterId));
  state.session   = buildSmartSession(cluster, gameType);
  state.index     = 0;
  state.score     = 0;
  state.answered  = false;
  renderQuestion();
}

function renderQuestion() {
  const q = state.session[state.index];
  state.currentQ  = q;
  state.answered  = false;
  const pct   = (state.index / state.session.length) * 100;
  const count = `${state.index + 1} / ${state.session.length}`;
  const c     = state.cluster;
  const label = q.type === 'scenario-drop' ? 'Scenario Drop' : 'Showdown';

  // Show mastery state of this concept in header
  const cState = getConceptState(q.conceptId);
  const statePill = cState === 'mastered'
    ? '<span class="state-pill pill-mastered">🔥 Resurfacing</span>'
    : cState === 'practicing'
    ? '<span class="state-pill pill-practicing">📈 Practicing</span>'
    : '<span class="state-pill pill-unexplored">✨ New</span>';

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
      <div class="header-right">
        ${statePill}
        <span class="question-count">${count}</span>
      </div>
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
      recordAnswer(state.currentQ.conceptId, correct);
      document.querySelectorAll('.answer-btn').forEach(b => {
        const val = state.currentAnswers[parseInt(b.dataset.idx)];
        if (val === state.currentQ.correct) b.classList.add('correct');
        else if (b === btn)                  b.classList.add('incorrect');
        else                                 b.classList.add('dimmed');
        b.disabled = true;
      });
      showFeedback(correct, state.currentQ.explanation, state.currentQ.conceptId);
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
      recordAnswer(state.currentQ.conceptId, correct);
      document.querySelectorAll('.showdown-btn').forEach(b => {
        const winner = b.textContent.trim() === state.currentQ.correct;
        if (winner)          b.classList.add('correct');
        else if (b === this) b.classList.add('incorrect');
        else                 b.classList.add('dimmed');
        b.disabled = true;
      });
      showFeedback(correct, state.currentQ.explanation, state.currentQ.conceptId);
    });
  });
}

// ── Feedback ───────────────────────────────────────────────────────────────
function showFeedback(correct, explanation, conceptId) {
  const panel   = document.getElementById('feedback');
  const isLast  = state.index + 1 >= state.session.length;
  const rec     = getConceptRecord(conceptId);
  const newState = rec.state;

  // Show mastery milestone if just hit 3-in-a-row
  const milestone = correct && rec.streak >= 3 && newState === 'mastered'
    ? '<div class="milestone">⭐ Mastered! This concept moves to your review pile.</div>'
    : '';

  panel.className = `feedback-panel ${correct ? 'feedback-correct' : 'feedback-incorrect'}`;
  panel.innerHTML = `
    <div class="feedback-top">
      <span class="feedback-icon">${correct ? '✓' : '✗'}</span>
      <div class="feedback-text">
        <strong>${correct ? 'Correct!' : 'Not quite.'}</strong>
        <p>${explanation}</p>
      </div>
    </div>
    ${milestone}
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
  const m     = getClusterMastery(c);

  const [emoji, title, subtitle] =
    pct >= 90 ? ['🔥', 'On Fire!',      'Keep at it — mastery is close.']
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
          <span class="score-pct">${pct}% this session</span>
        </div>
        <div class="mastery-summary">
          <div class="mastery-summary-row">
            <span><span class="dot dot-mastered"></span> Mastered</span>
            <strong>${m.mastered} / ${m.total}</strong>
          </div>
          <div class="mastery-summary-row">
            <span><span class="dot dot-practicing"></span> Practicing</span>
            <strong>${m.practicing}</strong>
          </div>
          <div class="mastery-summary-row">
            <span><span class="dot dot-unexplored"></span> Unexplored</span>
            <strong>${m.unexplored}</strong>
          </div>
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
