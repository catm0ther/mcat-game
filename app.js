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
  playMode: 'cluster',  // 'cluster' | 'section'
  gameType: 'all',
  session: [],
  index: 0,
  score: 0,
  answered: false,
  currentQ: null,
  currentAnswers: [],
  streak: 0,
  bestStreak: 0,
};

const isMobile = window.innerWidth < 768 ||
  /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// ── Cloud Sync (JSONBin.io) ────────────────────────────────────────────────
// Key lives only in your browser's localStorage — never in code or URLs.
// Setup: tap "Enable sync" on the home screen, then paste your JSONBin Master Key.
// Free key: jsonbin.io → Sign Up → account menu → API Keys → Master Key

let SYNC_KEY       = localStorage.getItem('mcatSyncKey') || '';
let _binId         = localStorage.getItem('mcatBinId')   || null;
let _showSyncSetup = false;

async function cloudLoad() {
  if (!SYNC_KEY || !_binId) return false;
  try {
    const r = await fetch(`https://api.jsonbin.io/v3/b/${_binId}/latest`, {
      headers: { 'X-Master-Key': SYNC_KEY, 'X-Bin-Meta': 'false' }
    });
    if (!r.ok) return false;
    const d = await r.json();
    const mastery = d?.mastery ?? d?.record?.mastery;
    if (mastery) { saveMasteryData(mastery); return true; }
  } catch {}
  return false;
}

async function cloudSave() {
  if (!SYNC_KEY) return;
  const body = JSON.stringify({ mastery: getMasteryData() });
  try {
    if (!_binId) {
      const r = await fetch('https://api.jsonbin.io/v3/b', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Master-Key': SYNC_KEY,
          'X-Bin-Name': 'mcat-progress',
        },
        body,
      });
      if (!r.ok) return;
      _binId = (await r.json()).metadata.id;
      localStorage.setItem('mcatBinId', _binId);
      renderSectionMap();
    } else {
      await fetch(`https://api.jsonbin.io/v3/b/${_binId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'X-Master-Key': SYNC_KEY },
        body,
      });
    }
  } catch {}
}

function showSyncSetup() { _showSyncSetup = true;  renderSectionMap(); }
function hideSyncSetup() { _showSyncSetup = false; renderSectionMap(); }

function submitSyncKey() {
  const key = document.getElementById('sync-key-input')?.value?.trim();
  if (!key) return;
  SYNC_KEY = key;
  localStorage.setItem('mcatSyncKey', SYNC_KEY);
  _showSyncSetup = false;
  // If we already have a bin ID (came via sync link), load from cloud.
  // Otherwise create a new bin on first session save.
  cloudLoad().then(ok => { if (!ok && !_binId) cloudSave(); renderSectionMap(); });
}

async function copySyncLink() {
  if (!_binId) {
    const el = document.getElementById('sync-copy-btn');
    if (el) { el.textContent = '⏳ Play a session first'; setTimeout(() => { el.textContent = '📱 Sync to another device'; }, 2000); }
    return;
  }
  const link = `${location.origin}${location.pathname}?s=${_binId}`;
  try { await navigator.clipboard.writeText(link); }
  catch { prompt('Copy this sync link:', link); return; }
  const el = document.getElementById('sync-copy-btn');
  if (el) { el.textContent = '✓ Link copied — text it to yourself!'; setTimeout(() => { el.textContent = '📱 Sync to another device'; }, 3000); }
}

function disableSync() {
  if (!confirm('Remove sync from this device?\n(Your cloud progress stays safe — you can re-link anytime.)')) return;
  SYNC_KEY = ''; _binId = null;
  localStorage.removeItem('mcatSyncKey'); localStorage.removeItem('mcatBinId');
  renderSectionMap();
}

function buildSyncUI() {
  if (_showSyncSetup) return `
    <div class="sync-box">
      <p class="sync-box-title">☁️ Set up sync</p>
      <p class="sync-box-desc">
        Go to <strong>jsonbin.io</strong>, sign up free, then open<br>
        <strong>API Keys</strong> in your account menu and copy the <strong>Master Key</strong>.
      </p>
      <div class="sync-input-row">
        <input id="sync-key-input" type="password" class="sync-key-input"
          placeholder="Paste master key here…" autocomplete="off" autocorrect="off">
        <button onclick="submitSyncKey()" class="btn-sync-submit">Save</button>
      </div>
      <button onclick="hideSyncSetup()" class="btn-sync-cancel">Cancel</button>
    </div>`;

  if (SYNC_KEY) return `
    <div class="sync-bar">
      <span class="sync-indicator ${_binId ? 'sync-on' : 'sync-idle'}"></span>
      <span class="sync-label">${_binId ? 'Sync on' : 'Sync ready — play a session to activate'}</span>
      ${_binId ? `<button id="sync-copy-btn" class="btn-sync-link" onclick="copySyncLink()">📱 Sync to another device</button>` : ''}
    </div>`;

  return `
    <div class="sync-bar">
      <button class="btn-sync-setup" onclick="showSyncSetup()">☁️ Enable cross-device sync</button>
    </div>`;
}

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
  const ids = new Set();
  cluster.scenarioDrop.forEach(q => ids.add(q.conceptId));
  cluster.showdown.forEach(q => ids.add(q.conceptId));
  (cluster.equationRescue || []).forEach(q => ids.add(q.conceptId));
  (cluster.magnitudeBlitz || []).forEach(q => ids.add(q.conceptId));
  return [...ids];
}

// Section-level: % of concepts mastered
function getSectionMastery(section) {
  const clusters = section.clusterIds.map(id => CLUSTERS.find(c => c.id === id)).filter(Boolean);
  let total = 0, mastered = 0;
  clusters.forEach(c => {
    const m = getClusterMastery(c);
    total    += m.total;
    mastered += m.mastered;
  });
  return total === 0 ? 0 : Math.round((mastered / total) * 100);
}

// Count how many concepts will appear in the next smart session.
// Uses unique conceptIds (one question per concept), matching buildSmartSession.
function getSmartSessionCount(cluster) {
  const conceptIds = getClusterConceptIds(cluster);
  const unexplored = conceptIds.filter(id => getConceptState(id) === 'unexplored').length;
  const practicing = conceptIds.filter(id => getConceptState(id) === 'practicing').length;
  const mastered   = conceptIds.filter(id => getConceptState(id) === 'mastered').length;
  const isCalc = (cluster.equationRescue || []).length > 0 || (cluster.magnitudeBlitz || []).length > 0;
  const maxNew = isCalc ? 4 : 3;
  const count = practicing + Math.min(maxNew, unexplored) + Math.min(1, mastered);
  return count > 0 ? count : conceptIds.length;
}

// ── Session Builder ────────────────────────────────────────────────────────
// Priority: practicing (streak 1-2) > unexplored (max 3 new) > mastered (1 resurfacing)
// Each question gets a randomly chosen scenario variant so repeat plays feel fresh.

function pickScenario(q) {
  const variants = q.scenarios;
  return variants[Math.floor(Math.random() * variants.length)];
}

function pickWrongAnswers(q) {
  const pool = q.wrongPool || q.wrong || [];
  return shuffle([...pool]).slice(0, 3);
}

// Build a session for one cluster. One question per conceptId (randomly picks
// scenario-drop or showdown when both exist) so the same concept never appears
// twice in one session. Calc clusters use equationRescue + magnitudeBlitz instead.
function buildSmartSession(cluster) {
  const isCalc = (cluster.equationRescue || []).length > 0 || (cluster.magnitudeBlitz || []).length > 0;
  if (isCalc) {
    const pool = [
      ...(cluster.equationRescue || []).map(q => ({ ...q, type: 'equation-rescue' })),
      ...(cluster.magnitudeBlitz  || []).map(q => ({ ...q, type: 'magnitude-blitz' })),
    ];
    return _applyMastery(pool, { maxNew: 4, maxMastered: 1 });
  }
  const conceptMap = new Map();
  cluster.scenarioDrop.forEach(q => conceptMap.set(q.conceptId, { ...q, type: 'scenario-drop' }));
  cluster.showdown.forEach(q => {
    if (!conceptMap.has(q.conceptId) || Math.random() < 0.5)
      conceptMap.set(q.conceptId, { ...q, type: 'showdown' });
  });
  const pool = [...conceptMap.values()];
  return _applyMastery(pool);
}

// Build a review session: ALL mastered concepts for one cluster, shown once each.
// Wrong answers drop back to 'practicing' via the existing recordAnswer logic.
function buildReviewSession(cluster) {
  const isCalc = (cluster.equationRescue || []).length > 0 || (cluster.magnitudeBlitz || []).length > 0;
  let pool;
  if (isCalc) {
    pool = [
      ...(cluster.equationRescue || []).map(q => ({ ...q, type: 'equation-rescue' })),
      ...(cluster.magnitudeBlitz  || []).map(q => ({ ...q, type: 'magnitude-blitz' })),
    ].filter(q => getConceptState(q.conceptId) === 'mastered');
  } else {
    const conceptMap = new Map();
    cluster.scenarioDrop.forEach(q => conceptMap.set(q.conceptId, { ...q, type: 'scenario-drop' }));
    cluster.showdown.forEach(q => {
      if (!conceptMap.has(q.conceptId) || Math.random() < 0.5)
        conceptMap.set(q.conceptId, { ...q, type: 'showdown' });
    });
    pool = [...conceptMap.values()].filter(q => getConceptState(q.conceptId) === 'mastered');
  }
  return shuffle(pool).map(q => {
    const base = {
      ...q,
      scenario:     q.scenarios ? pickScenario(q) : (q.scenario || ''),
      wrongAnswers: q.wrongPool  ? pickWrongAnswers(q) : [],
    };
    if (q.variants) {
      const v = q.variants[Math.floor(Math.random() * q.variants.length)];
      return { ...base, scenario: v.scenario, options: v.options, correct: v.correct };
    }
    return base;
  });
}

// Build a session spanning all clusters in a section. Attaches _cluster to each
// question so renderQuestion can update styling as topics change mid-session.
function buildSectionSession(sectionId) {
  const section  = SECTIONS.find(s => s.id === sectionId);
  const clusters = section.clusterIds.map(id => CLUSTERS.find(c => c.id === id)).filter(Boolean);
  let combined = [];
  clusters.forEach(cluster => {
    const isCalc = (cluster.equationRescue || []).length > 0 || (cluster.magnitudeBlitz || []).length > 0;
    if (isCalc) {
      (cluster.equationRescue || []).forEach(q => combined.push({ ...q, type: 'equation-rescue', _cluster: cluster }));
      (cluster.magnitudeBlitz  || []).forEach(q => combined.push({ ...q, type: 'magnitude-blitz',  _cluster: cluster }));
    } else {
      const conceptMap = new Map();
      cluster.scenarioDrop.forEach(q => conceptMap.set(q.conceptId, { ...q, type: 'scenario-drop', _cluster: cluster }));
      cluster.showdown.forEach(q => {
        if (!conceptMap.has(q.conceptId) || Math.random() < 0.5)
          conceptMap.set(q.conceptId, { ...q, type: 'showdown', _cluster: cluster });
      });
      combined.push(...conceptMap.values());
    }
  });
  return _applyMastery(combined, { maxNew: 5, maxMastered: 2 });
}

function _applyMastery(pool, { maxNew = 3, maxMastered = 1 } = {}) {
  const unexplored = pool.filter(q => getConceptState(q.conceptId) === 'unexplored');
  const practicing = pool.filter(q => getConceptState(q.conceptId) === 'practicing');
  const mastered   = pool.filter(q => getConceptState(q.conceptId) === 'mastered');
  const session = [
    ...shuffle(practicing),
    ...shuffle(unexplored).slice(0, maxNew),
    ...shuffle(mastered).slice(0, maxMastered),
  ];
  const finalPool = session.length > 0 ? session : shuffle(pool);
  return finalPool.map(q => {
    const base = {
      ...q,
      scenario:     q.scenarios ? pickScenario(q) : (q.scenario || ''),
      wrongAnswers: q.wrongPool  ? pickWrongAnswers(q) : [],
    };
    if (q.variants) {
      const v = q.variants[Math.floor(Math.random() * q.variants.length)];
      return { ...base, scenario: v.scenario, options: v.options, correct: v.correct };
    }
    return base;
  });
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

function stripExplanation(text) {
  const idx = text.indexOf(' — ');
  return idx !== -1 ? text.slice(0, idx) : text;
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
      <p class="map-footnote">CARS not shown — you don't need it 💅 · ${CLUSTERS.length} clusters loaded</p>
      ${buildSyncUI()}
    </div>
  `);
}

// ══════════════════════════════════════════════════════════════════════════
// SCREEN 2 — Section Hub (e.g. Psych/Soc)
// ══════════════════════════════════════════════════════════════════════════
function renderSectionHub(sectionId) {
  const section  = SECTIONS.find(s => s.id === sectionId);
  state.section  = section;
  const clusters = section.clusterIds.map(id => CLUSTERS.find(c => c.id === id)).filter(Boolean);
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
        style="--zone-color:${c.color}; --zone-light:${c.lightColor || c.light}">
        <div class="topic-card-top">
          <span class="topic-icon">${c.emoji || c.icon || ''}</span>
          <div class="topic-names">
            <div class="topic-place">${c.place || c.label || ''}</div>
            <div class="topic-tagline">${c.tagline || ''}</div>
          </div>
          ${badge}
        </div>
        <div class="topic-concepts">${c.description || ''}</div>
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
        <div class="hub-nav">
          <button class="btn-home-light" onclick="renderSectionMap()">🏠</button>
        </div>
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
        <button class="btn-play-section" onclick="startSectionGame('${sectionId}')"
          style="background:${section.color}">
          ▶ Play All ${section.name}
          <span class="play-section-sub">${totalConcepts} concepts</span>
        </button>
        <p class="hub-section-label" style="margin-top:24px">Topics</p>
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

  const smartCount = getSmartSessionCount(cluster);
  const m          = getClusterMastery(cluster);

  const conceptIds = getClusterConceptIds(cluster);
  const conceptChips = conceptIds.map(id => {
    const s = getConceptState(id);
    const q = cluster.scenarioDrop.find(q => q.conceptId === id)
           || cluster.showdown.find(q => q.conceptId === id)
           || (cluster.equationRescue || []).find(q => q.conceptId === id)
           || (cluster.magnitudeBlitz  || []).find(q => q.conceptId === id);
    const label = q ? (q.label || q.correct) : id;
    return `<span class="concept-chip state-${s}" title="${s}">${stripExplanation(label)}</span>`;
  }).join('');

  const countLabel = smartCount === 1 ? '1 concept' : `${smartCount} concepts`;

  render(`
    <div class="screen-hub" style="--zone-color:${cluster.color}; --zone-light:${cluster.lightColor || cluster.light}">
      <div class="hub-hero">
        <div class="hub-hero-bg"></div>
        <div class="hub-nav">
          <button class="btn-home-light" onclick="renderSectionMap()">🏠</button>
          <button class="hub-back" onclick="renderSectionHub('${section.id}')">← ${section.name}</button>
        </div>
        <div class="hub-icon">${cluster.emoji || cluster.icon || ''}</div>
        <div class="hub-place">${cluster.place || cluster.label || ''}</div>
        <div class="hub-tagline">${cluster.tagline || ''}</div>
      </div>

      <div class="hub-body">
        <div class="concept-status-row">
          <span class="concept-status-stat"><span class="dot dot-unexplored"></span>${m.unexplored} unexplored</span>
          <span class="concept-status-stat"><span class="dot dot-practicing"></span>${m.practicing} practicing</span>
          <span class="concept-status-stat"><span class="dot dot-mastered"></span>${m.mastered} mastered</span>
        </div>

        <div class="concept-chips-wrap">${conceptChips}</div>

        <div class="single-play-wrap">
          <button class="btn-play-big" onclick="startGame('${clusterId}')"
            style="background:${cluster.color}">
            ▶ Play
            <span class="play-sub">${countLabel} this session</span>
          </button>
          ${m.mastered > 0 ? `
          <button class="btn-review" onclick="startReviewGame('${clusterId}')">
            ♻️ Review Mastered
            <span class="play-sub">${m.mastered} concept${m.mastered === 1 ? '' : 's'} — miss one and it drops back</span>
          </button>` : ''}
        </div>
      </div>
    </div>
  `);
}

// ══════════════════════════════════════════════════════════════════════════
// SCREEN 4 — Game
// ══════════════════════════════════════════════════════════════════════════
function startGame(clusterId) {
  const cluster   = CLUSTERS.find(c => c.id === clusterId);
  state.cluster   = cluster;
  state.playMode  = 'cluster';
  state.gameType  = 'all';
  state.section   = SECTIONS.find(s => s.clusterIds.includes(clusterId));
  state.session   = buildSmartSession(cluster);
  state.index     = 0;
  state.score     = 0;
  state.streak    = 0;
  state.answered  = false;
  renderQuestion();
}

function startSectionGame(sectionId) {
  const section  = SECTIONS.find(s => s.id === sectionId);
  state.section  = section;
  state.cluster  = null;
  state.playMode = 'section';
  state.gameType = 'all';
  state.session  = buildSectionSession(sectionId);
  state.index    = 0;
  state.score    = 0;
  state.streak   = 0;
  state.answered = false;
  renderQuestion();
}

function startReviewGame(clusterId) {
  const cluster  = CLUSTERS.find(c => c.id === clusterId);
  state.cluster  = cluster;
  state.playMode = 'cluster';
  state.gameType = 'review';
  state.section  = SECTIONS.find(s => s.clusterIds.includes(clusterId));
  state.session  = buildReviewSession(cluster);
  state.index    = 0;
  state.score    = 0;
  state.streak   = 0;
  state.answered = false;
  renderQuestion();
}

function renderQuestion() {
  const q = state.session[state.index];
  state.currentQ = q;
  state.answered = false;

  // Section-wide play: each question carries its cluster; update state so
  // colors and navigation reflect the current question's topic area.
  if (q._cluster) state.cluster = q._cluster;

  const pct   = (state.index / state.session.length) * 100;
  const count = `${state.index + 1} / ${state.session.length}`;
  const c     = state.cluster;
  const label = q.type === 'scenario-drop'   ? 'Scenario Drop'
              : q.type === 'showdown'         ? 'Showdown'
              : q.type === 'equation-rescue'  ? 'Equation Rescue'
              : 'Magnitude Blitz';

  const cState = getConceptState(q.conceptId);
  const statePill = cState === 'mastered'
    ? '<span class="state-pill pill-mastered">🔥 Resurfacing</span>'
    : cState === 'practicing'
    ? '<span class="state-pill pill-practicing">📈 Practicing</span>'
    : '<span class="state-pill pill-unexplored">✨ New</span>';

  const backBtn = state.playMode === 'section'
    ? `<button class="btn-back" onclick="renderSectionHub('${state.section.id}')">← ${state.section.name}</button>`
    : `<button class="btn-back" onclick="renderZoneHub('${c.id}')">← Zone</button>`;

  const header = `
    <div class="game-header" style="--zone-color:${c.color}">
      <div class="header-left">
        <button class="btn-home" onclick="renderSectionMap()" title="Home">🏠</button>
        ${backBtn}
      </div>
      <div class="header-center">
        <span class="cluster-name">${c.emoji || c.icon || ''} ${c.place || c.label || ''}</span>
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

  if (q.type === 'equation-rescue') return renderEquationRescue(q, header);
  if (q.type === 'magnitude-blitz') return renderMagnitudeBlitz(q, header);
  q.type === 'scenario-drop'
    ? renderScenarioDrop(q, header)
    : renderShowdown(q, header);
}

function renderScenarioDrop(q, header) {
  const answers = shuffle([q.correct, ...(q.wrongAnswers || q.wrong || [])]);
  state.currentAnswers = answers;
  const c = state.cluster;

  render(`
    <div class="screen-game" style="--zone-color:${c.color}; --zone-light:${c.lightColor || c.light}">
      ${header}
      <div class="game-body">
        <div class="scenario-card"><p class="scenario-text">${q.scenario}</p></div>
        <div class="answers-grid" id="answers">
          ${answers.map((a, i) => `<button class="answer-btn" data-idx="${i}">${stripExplanation(a)}</button>`).join('')}
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
  const flip  = Math.random() < 0.5;
  const left  = flip ? q.conceptB : q.conceptA;
  const right = flip ? q.conceptA : q.conceptB;

  render(`
    <div class="screen-game" style="--zone-color:${c.color}; --zone-light:${c.lightColor || c.light}">
      ${header}
      <div class="game-body">
        <p class="showdown-prompt">Which concept fits?</p>
        <div class="scenario-card"><p class="scenario-text">${q.scenario}</p></div>
        <div class="showdown-choices">
          <button class="showdown-btn" id="btnA" data-val="${left}">${stripExplanation(left)}</button>
          <div class="vs-badge">VS</div>
          <button class="showdown-btn" id="btnB" data-val="${right}">${stripExplanation(right)}</button>
        </div>
        <div id="feedback" class="feedback-panel hidden"></div>
      </div>
    </div>
  `);

  [{ id: 'btnA', val: left }, { id: 'btnB', val: right }].forEach(({ id, val }) => {
    document.getElementById(id).addEventListener('click', function () {
      if (state.answered) return;
      state.answered = true;
      const correct = val === state.currentQ.correct;
      if (correct) state.score++;
      recordAnswer(state.currentQ.conceptId, correct);
      document.querySelectorAll('.showdown-btn').forEach(b => {
        const winner = b.dataset.val === state.currentQ.correct;
        if (winner)          b.classList.add('correct');
        else if (b === this) b.classList.add('incorrect');
        else                 b.classList.add('dimmed');
        b.disabled = true;
      });
      showFeedback(correct, state.currentQ.explanation, state.currentQ.conceptId);
    });
  });
}

function renderEquationRescue(q, header) {
  const c = state.cluster;
  const shuffledOpts = shuffle([...q.options]);
  render(`
    <div class="screen-game" style="--zone-color:${c.color}; --zone-light:${c.lightColor || c.light}">
      ${header}
      <div class="game-body">
        <div class="calc-badge rescue-badge">🔧 Equation Rescue</div>
        <div class="scenario-card"><p class="scenario-text">${q.scenario}</p></div>
        <p class="calc-prompt">Which setup is correct?</p>
        <div class="rescue-options" id="rescue-options">
          ${shuffledOpts.map((opt, i) => `<button class="rescue-btn" data-idx="${i}">${stripExplanation(opt.replace(/\s*\([^)]*\)\s*$/, '').trim())}</button>`).join('')}
        </div>
        <div id="feedback" class="feedback-panel hidden"></div>
      </div>
    </div>
  `);
  document.querySelectorAll('.rescue-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (state.answered) return;
      state.answered = true;
      const selected = shuffledOpts[parseInt(btn.dataset.idx)];
      const correct  = selected === q.correct;
      if (correct) state.score++;
      recordAnswer(q.conceptId, correct);
      document.querySelectorAll('.rescue-btn').forEach(b => {
        const val = shuffledOpts[parseInt(b.dataset.idx)];
        if (val === q.correct)  b.classList.add('correct');
        else if (b === btn)     b.classList.add('incorrect');
        else                    b.classList.add('dimmed');
        b.disabled = true;
      });
      showFeedback(correct, q.explanation, q.conceptId);
    });
  });
}

function renderMagnitudeBlitz(q, header) {
  const c = state.cluster;
  const shuffledOpts = shuffle([...q.options]);
  render(`
    <div class="screen-game" style="--zone-color:${c.color}; --zone-light:${c.lightColor || c.light}">
      ${header}
      <div class="game-body">
        <div class="calc-badge blitz-badge">⚡ Magnitude Blitz</div>
        <div class="scenario-card"><p class="scenario-text">${q.scenario}</p></div>
        <p class="calc-prompt">Best estimate?</p>
        <div class="blitz-grid" id="blitz-options">
          ${shuffledOpts.map((opt, i) => `<button class="blitz-btn" data-idx="${i}">${opt}</button>`).join('')}
        </div>
        <div id="feedback" class="feedback-panel hidden"></div>
      </div>
    </div>
  `);
  document.querySelectorAll('.blitz-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (state.answered) return;
      state.answered = true;
      const selected = shuffledOpts[parseInt(btn.dataset.idx)];
      const correct  = selected === q.correct;
      if (correct) state.score++;
      recordAnswer(q.conceptId, correct);
      document.querySelectorAll('.blitz-btn').forEach(b => {
        const val = shuffledOpts[parseInt(b.dataset.idx)];
        if (val === q.correct)  b.classList.add('correct');
        else if (b === btn)     b.classList.add('incorrect');
        else                    b.classList.add('dimmed');
        b.disabled = true;
      });
      showFeedback(correct, q.explanation, q.conceptId);
    });
  });
}

// ── Feedback ───────────────────────────────────────────────────────────────
function showFeedback(correct, explanation, conceptId) {
  // Fall back to the full correct answer as the explanation (replace ' — ' with ': ')
  if (!explanation) {
    const c = (state.currentQ && state.currentQ.correct) || '';
    explanation = c.replace(' — ', ': ');
  }
  if (correct) {
    state.streak++;
    if (state.streak > state.bestStreak) state.bestStreak = state.streak;
  } else {
    state.streak = 0;
  }

  const panel    = document.getElementById('feedback');
  const isLast   = state.index + 1 >= state.session.length;
  const rec      = getConceptRecord(conceptId);
  const newState = rec.state;

  const milestone = correct && rec.streak >= 3 && newState === 'mastered'
    ? '<div class="milestone">⭐ Mastered! This concept moves to your review pile.</div>'
    : '';

  let streakBanner = '';
  if (correct && state.streak >= 3) {
    if      (state.streak >= 10) streakBanner = `<div class="streak-banner streak-epic">🔥🔥🔥 ${state.streak} in a row!! MCAT beast mode!</div>`;
    else if (state.streak >= 5)  streakBanner = `<div class="streak-banner streak-hot">🔥🔥 ${state.streak} in a row! You're on fire!</div>`;
    else                         streakBanner = `<div class="streak-banner streak-warm">🔥 ${state.streak} in a row!</div>`;
  }

  const explanationHtml = explanation
    ? (correct ? `<p>${explanation}</p>` : `<p><strong>Right answer:</strong> ${explanation}</p>`)
    : '';

  panel.className = `feedback-panel ${correct ? 'feedback-correct' : 'feedback-incorrect'}`;
  panel.innerHTML = `
    <div class="feedback-top">
      <span class="feedback-icon">${correct ? '✓' : '✗'}</span>
      <div class="feedback-text">
        <strong>${correct ? 'Correct!' : 'Not quite.'}</strong>
        ${explanationHtml}
      </div>
    </div>
    ${milestone}
    ${streakBanner}
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
  const isSectionPlay = state.playMode === 'section';

  const isReview = state.gameType === 'review';
  let m, zoneColor, backFn, retryFn, retryLabel;
  if (isSectionPlay) {
    const sec = state.section;
    const clusters = sec.clusterIds.map(id => CLUSTERS.find(c => c.id === id));
    let totalC = 0, mastered = 0, practicing = 0, unexplored = 0;
    clusters.forEach(cl => {
      const cm = getClusterMastery(cl);
      totalC += cm.total; mastered += cm.mastered;
      practicing += cm.practicing; unexplored += cm.unexplored;
    });
    m         = { total: totalC, mastered, practicing, unexplored };
    zoneColor = sec.color;
    backFn    = `renderSectionHub('${sec.id}')`;
    retryFn   = `startSectionGame('${sec.id}')`;
    retryLabel = 'Play Again';
  } else {
    const c  = state.cluster;
    m        = getClusterMastery(c);
    zoneColor = c.color;
    backFn   = `renderZoneHub('${c.id}')`;
    if (isReview) {
      retryFn   = m.mastered > 0 ? `startReviewGame('${c.id}')` : `renderZoneHub('${c.id}')`;
      retryLabel = m.mastered > 0 ? '♻️ Review Again' : '← Back';
    } else {
      retryFn   = `startGame('${c.id}')`;
      retryLabel = 'Play Again';
    }
  }

  const dropped = isReview ? total - state.score : 0;
  const [emoji, title, subtitle] = isReview
    ? ( pct === 100 ? ['🔥', 'All Clear!',    'Everything held. Nice.']
      : pct >= 70   ? ['💪', 'Mostly Solid',  `${dropped} concept${dropped === 1 ? '' : 's'} dropped back to Practicing — you'll see ${dropped === 1 ? 'it' : 'them'} in your next session.`]
      :               ['🧠', 'Worth Doing',   `${dropped} concept${dropped === 1 ? '' : 's'} slipped. They\'re back in Practicing — run a normal session to rebuild the streak.`] )
    : ( pct >= 90 ? ['🔥', 'On Fire!',      'Keep at it — mastery is close.']
      : pct >= 70 ? ['💪', 'Solid Work',    "You're getting there. One more round will lock it in."]
      : pct >= 50 ? ['📈', 'Building Up',   'These gaps are closing. Keep going.']
      :             ['🧠', 'Brain Training', "This is exactly why we practice. Run it again."] );

  render(`
    <div class="screen-results" style="--zone-color:${zoneColor}">
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
          <button class="btn-primary" onclick="${backFn}">← Back</button>
          <button class="btn-secondary" onclick="${retryFn}">${retryLabel}</button>
        </div>
      </div>
    </div>
  `);
  cloudSave(); // auto-save to cloud after every session
}

// ── Boot ───────────────────────────────────────────────────────────────────
// Handle incoming sync link (?s=binId opens on a new device)
const _urlBin = new URLSearchParams(location.search).get('s');
if (_urlBin) {
  _binId = _urlBin;
  localStorage.setItem('mcatBinId', _urlBin);
  history.replaceState({}, '', location.pathname);
  if (!SYNC_KEY) _showSyncSetup = true; // new device: prompt for key
}

renderSectionMap();

// Load latest cloud progress on startup (fire-and-forget)
if (SYNC_KEY && _binId) cloudLoad().then(ok => { if (ok) renderSectionMap(); });
