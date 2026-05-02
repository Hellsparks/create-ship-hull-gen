import { HULLS } from './hulls/index.js';
import { voxelize } from './voxelizer.js';
import { exportNBT } from './nbt.js';
import { ShipRenderer } from './renderer.js';

// ── Hull SVG icons ────────────────────────────────────────────────────────
const HULL_ICONS = {
  galleon: `<svg viewBox="0 0 36 28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
    <path d="M4 22 Q8 14 10 10 Q14 6 18 6 Q24 4 30 8 L32 22 Q18 26 4 22Z"/>
    <line x1="18" y1="6" x2="18" y2="2"/><line x1="15" y1="3" x2="21" y2="3"/>
  </svg>`,
  cutter: `<svg viewBox="0 0 36 28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
    <path d="M6 24 L10 8 Q18 4 26 10 L30 24 Q18 27 6 24Z"/>
    <line x1="10" y1="8" x2="10" y2="2"/><line x1="10" y1="5" x2="22" y2="5"/>
  </svg>`,
  sloop: `<svg viewBox="0 0 36 28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
    <path d="M5 23 Q10 12 18 10 Q24 10 30 14 L31 23 Q18 27 5 23Z"/>
    <line x1="14" y1="10" x2="14" y2="2"/><line x1="14" y1="3" x2="24" y2="9"/>
  </svg>`,
  brig: `<svg viewBox="0 0 36 28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
    <path d="M4 23 L8 11 Q18 8 28 11 L32 23 Q18 26 4 23Z"/>
    <line x1="11" y1="10" x2="11" y2="2"/><line x1="11" y1="3" x2="18" y2="3"/>
    <line x1="23" y1="10" x2="23" y2="3"/><line x1="23" y1="3" x2="30" y2="3"/>
  </svg>`,
  frigate: `<svg viewBox="0 0 36 28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
    <path d="M3 23 L7 14 Q10 8 18 8 Q24 8 28 12 L33 23 Q18 26 3 23Z"/>
    <line x1="10" y1="12" x2="10" y2="2"/><line x1="10" y1="3" x2="20" y2="3"/>
    <line x1="22" y1="11" x2="22" y2="4"/><line x1="22" y1="4" x2="30" y2="4"/>
  </svg>`,
  fluyt: `<svg viewBox="0 0 36 28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
    <path d="M5 23 Q6 18 8 14 Q12 8 18 8 Q26 8 29 14 Q31 18 31 23 Q18 27 5 23Z"/>
    <line x1="18" y1="8" x2="18" y2="2"/><line x1="15" y1="3" x2="21" y2="3"/>
  </svg>`,
};

// ── Palette data ─────────────────────────────────────────────────────────
// Each row: [plank, log, stripped] — same wood type across columns
const PALETTE_ROWS = [
  { name: 'Oak',      plank: 'minecraft:oak_planks',      log: 'minecraft:oak_wood',           strip: 'minecraft:stripped_oak_wood' },
  { name: 'Dark Oak', plank: 'minecraft:dark_oak_planks',  log: 'minecraft:dark_oak_wood',      strip: 'minecraft:stripped_dark_oak_wood' },
  { name: 'Spruce',   plank: 'minecraft:spruce_planks',    log: 'minecraft:spruce_wood',        strip: 'minecraft:stripped_spruce_wood' },
  { name: 'Birch',    plank: 'minecraft:birch_planks',     log: 'minecraft:birch_wood',         strip: 'minecraft:stripped_birch_wood' },
  { name: 'Acacia',   plank: 'minecraft:acacia_planks',    log: 'minecraft:acacia_wood',        strip: 'minecraft:stripped_acacia_wood' },
  { name: 'Mangrove', plank: 'minecraft:mangrove_planks',  log: 'minecraft:mangrove_wood',      strip: 'minecraft:stripped_mangrove_wood' },
  { name: 'Jungle',   plank: 'minecraft:jungle_planks',    log: 'minecraft:jungle_wood',        strip: 'minecraft:stripped_jungle_wood' },
  { name: 'Cherry',   plank: 'minecraft:cherry_planks',    log: 'minecraft:cherry_wood',        strip: 'minecraft:stripped_cherry_wood' },
  { name: 'Bamboo',   plank: 'minecraft:bamboo_planks',    log: 'minecraft:bamboo_block',       strip: 'minecraft:stripped_bamboo_block' },
  { name: 'Crimson',  plank: 'minecraft:crimson_planks',   log: 'minecraft:crimson_hyphae',     strip: 'minecraft:stripped_crimson_hyphae' },
  { name: 'Warped',   plank: 'minecraft:warped_planks',    log: 'minecraft:warped_hyphae',      strip: 'minecraft:stripped_warped_hyphae' },
];

const PALETTE_OTHER = [
  { id: 'minecraft:stone_bricks',   label: 'Stone Brick' },
  { id: 'minecraft:cobblestone',     label: 'Cobblestone' },
  { id: 'minecraft:iron_block',      label: 'Iron' },
  { id: 'minecraft:obsidian',        label: 'Obsidian' },
  { id: 'create:andesite_casing',    label: 'Andesite Casing' },
];

// Colour map for swatches + renderer fallback
const BLOCK_COLORS = {
  'minecraft:oak_planks':      '#9a7140', 'minecraft:oak_wood':             '#6b5839', 'minecraft:stripped_oak_wood':      '#af8f55',
  'minecraft:dark_oak_planks': '#3d2a13', 'minecraft:dark_oak_wood':        '#3a2a14', 'minecraft:stripped_dark_oak_wood': '#4a3518',
  'minecraft:spruce_planks':   '#7a5c30', 'minecraft:spruce_wood':          '#3b2912', 'minecraft:stripped_spruce_wood':   '#6a5028',
  'minecraft:birch_planks':    '#d6c89a', 'minecraft:birch_wood':           '#c8bca0', 'minecraft:stripped_birch_wood':    '#c5a96a',
  'minecraft:acacia_planks':   '#b5622b', 'minecraft:acacia_wood':          '#6a6a6a', 'minecraft:stripped_acacia_wood':   '#b05a30',
  'minecraft:mangrove_planks': '#7a2c1e', 'minecraft:mangrove_wood':        '#5a3a24', 'minecraft:stripped_mangrove_wood': '#6a2e1a',
  'minecraft:jungle_planks':   '#b5752d', 'minecraft:jungle_wood':          '#544a2e', 'minecraft:stripped_jungle_wood':   '#a87840',
  'minecraft:cherry_planks':   '#e4b4a2', 'minecraft:cherry_wood':          '#3b2028', 'minecraft:stripped_cherry_wood':   '#d6a090',
  'minecraft:bamboo_planks':   '#c4b840', 'minecraft:bamboo_block':         '#6a7a28', 'minecraft:stripped_bamboo_block':  '#b8b040',
  'minecraft:crimson_planks':  '#6c2033', 'minecraft:crimson_hyphae':       '#5c1626', 'minecraft:stripped_crimson_hyphae':'#8a3a50',
  'minecraft:warped_planks':   '#2b6a5e', 'minecraft:warped_hyphae':        '#2a4a46', 'minecraft:stripped_warped_hyphae': '#3a8a7e',
  'minecraft:stone_bricks':    '#7a7a7a', 'minecraft:cobblestone':          '#888888',
  'minecraft:iron_block':      '#cfd5d5', 'minecraft:obsidian':             '#1a0a2a',
  'create:andesite_casing':    '#8a8a7a',
};

function colorOf(id) { return BLOCK_COLORS[id] || '#666'; }

function shortName(id) {
  if (!id) return '';
  // "minecraft:dark_oak_planks" → "Dark Oak Planks"
  const name = id.replace(/^[^:]+:/, '').replace(/_/g, ' ');
  return name.replace(/\b\w/g, c => c.toUpperCase());
}

// ── App state ─────────────────────────────────────────────────────────────
const state = {
  hullId:          HULLS[0].meta.id,
  length:          30,
  beam:            14,
  draft:           8,
  thickness:       1,
  block:           'minecraft:oak_planks',
  tweaks:          {},
  bowRake:         0,
  sternRake:       0,
  bowBulge:        0,
  sternBulge:      0,
  bowRound:        0,
  sternRound:      0,
  ribSpacing:      0,
  ribThickness:    0,
  ribBlock:        '',
  ribsInterior:    false,
  keelBlock:       '',
  keelWidth:       0,
  deckBlock:       '',
  borderBlock:     '',
  bowRiseLen:      0,
  bowRiseHeight:   0,
  sternRiseLen:    0,
  sternRiseHeight: 0,
};

let activeSlot = 'hull'; // which slot the palette assigns to

// Initialise tweaks from defaults
function initTweaks(hull) {
  state.tweaks = {};
  for (const tw of hull.meta.tweaks) {
    state.tweaks[tw.id] = tw.default;
  }
}
initTweaks(HULLS[0]);

// ── DOM refs ──────────────────────────────────────────────────────────────
const hullGrid       = document.getElementById('hull-type-grid');
const tweaksGroup    = document.getElementById('tweaks-group');
const statsEl        = document.getElementById('stats');
const exportBtn      = document.getElementById('export-btn');
const perfEl         = document.getElementById('perf');
const ribsInteriorCb = document.getElementById('ribs-interior');
const paletteGrid    = document.getElementById('palette-grid');
const customBlockId  = document.getElementById('custom-block-id');

const hullSwatch    = document.getElementById('hull-swatch');
const ribSwatch     = document.getElementById('rib-swatch');
const keelSwatch    = document.getElementById('keel-swatch');
const deckSwatch    = document.getElementById('deck-swatch');
const borderSwatch  = document.getElementById('border-swatch');
const hullBlockName   = document.getElementById('hull-block-name');
const ribBlockName    = document.getElementById('rib-block-name');
const keelBlockName   = document.getElementById('keel-block-name');
const deckBlockName   = document.getElementById('deck-block-name');
const borderBlockName = document.getElementById('border-block-name');

// ── Build hull type buttons ───────────────────────────────────────────────
HULLS.forEach(hull => {
  const btn = document.createElement('button');
  btn.className = 'hull-btn' + (hull.meta.id === state.hullId ? ' active' : '');
  btn.title = hull.meta.description;
  btn.innerHTML = (HULL_ICONS[hull.meta.id] || '') + `<span>${hull.meta.name}</span>`;
  btn.addEventListener('click', () => {
    state.hullId = hull.meta.id;
    initTweaks(hull);
    document.querySelectorAll('.hull-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    buildTweakControls(hull);
    regenerate();
  });
  hullGrid.appendChild(btn);
});

// ── Dimension sliders ─────────────────────────────────────────────────────
function linkSlider(sliderId, numberId, key) {
  const slider = document.getElementById(sliderId);
  const number = document.getElementById(numberId);
  slider.addEventListener('input', () => {
    state[key] = parseInt(slider.value, 10);
    number.value = state[key];
    regenerate();
  });
  number.addEventListener('change', () => {
    const v = Math.max(+number.min, parseInt(number.value, 10) || +number.min);
    state[key] = v;
    number.value = v;
    slider.value = Math.min(v, +slider.max);
    regenerate();
  });
}

linkSlider('dim-length',    'dim-length-n',    'length');
linkSlider('dim-beam',      'dim-beam-n',      'beam');
linkSlider('dim-draft',     'dim-draft-n',     'draft');
linkSlider('dim-thickness', 'dim-thickness-n', 'thickness');

// Global shape controls
function linkFloatSlider(sliderId, numberId, key) {
  const slider = document.getElementById(sliderId);
  const number = document.getElementById(numberId);
  if (!slider || !number) return;
  slider.addEventListener('input', () => {
    state[key] = parseFloat(slider.value);
    number.value = state[key];
    regenerate();
  });
  number.addEventListener('change', () => {
    const v = Math.max(+number.min, parseFloat(number.value) || 0);
    state[key] = v;
    number.value = v;
    slider.value = Math.min(v, +slider.max);
    regenerate();
  });
}

linkFloatSlider('bow-rake',       'bow-rake-n',       'bowRake');
linkFloatSlider('stern-rake',     'stern-rake-n',     'sternRake');
linkFloatSlider('bow-bulge',      'bow-bulge-n',      'bowBulge');
linkFloatSlider('stern-bulge',    'stern-bulge-n',    'sternBulge');
linkFloatSlider('bow-round',      'bow-round-n',      'bowRound');
linkFloatSlider('stern-round',    'stern-round-n',    'sternRound');
linkSlider     ('rib-spacing',    'rib-spacing-n',    'ribSpacing');
linkSlider     ('rib-thickness',  'rib-thickness-n',  'ribThickness');
linkFloatSlider('bow-rise-len',   'bow-rise-len-n',   'bowRiseLen');
linkSlider     ('bow-rise-h',     'bow-rise-h-n',     'bowRiseHeight');
linkFloatSlider('stern-rise-len', 'stern-rise-len-n', 'sternRiseLen');
linkSlider     ('stern-rise-h',   'stern-rise-h-n',   'sternRiseHeight');
linkSlider     ('keel-width',     'keel-width-n',     'keelWidth');

// ── Reset buttons ─────────────────────────────────────────────────────────
const RESET_MAP = {
  rake: {
    bowRake: 0, sternRake: 0, bowBulge: 0, sternBulge: 0, bowRound: 0, sternRound: 0,
  },
  'bow-rise':   { bowRiseLen: 0, bowRiseHeight: 0 },
  'stern-rise': { sternRiseLen: 0, sternRiseHeight: 0 },
  ribs: { ribSpacing: 0, ribThickness: 0, ribBlock: '', ribsInterior: false },
};

const SLIDER_IDS = {
  bowRake: 'bow-rake', sternRake: 'stern-rake',
  bowBulge: 'bow-bulge', sternBulge: 'stern-bulge',
  bowRound: 'bow-round', sternRound: 'stern-round',
  bowRiseLen: 'bow-rise-len', bowRiseHeight: 'bow-rise-h',
  sternRiseLen: 'stern-rise-len', sternRiseHeight: 'stern-rise-h',
  ribSpacing: 'rib-spacing', ribThickness: 'rib-thickness',
};

document.querySelectorAll('.reset-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const defaults = RESET_MAP[btn.dataset.reset];
    if (!defaults) return;
    for (const [key, val] of Object.entries(defaults)) {
      state[key] = val;
      const sid = SLIDER_IDS[key];
      if (sid) {
        const s = document.getElementById(sid);
        const n = document.getElementById(sid + '-n');
        if (s) s.value = val;
        if (n) n.value = val;
      }
    }
    if (btn.dataset.reset === 'ribs') {
      ribsInteriorCb.checked = false;
      updateSwatches();
    }
    regenerate();
  });
});

// ── Tweak controls ────────────────────────────────────────────────────────
function buildTweakControls(hull) {
  tweaksGroup.innerHTML = '';
  if (!hull.meta.tweaks.length) {
    tweaksGroup.innerHTML = '<span style="color:var(--text-muted);font-size:11px">No shape tweaks for this hull.</span>';
    return;
  }
  hull.meta.tweaks.forEach(tw => {
    const row = document.createElement('div');
    row.className = 'control-row';

    const label = document.createElement('label');
    label.textContent = tw.label;

    const slider = document.createElement('input');
    slider.type  = 'range';
    slider.min   = tw.min;
    slider.max   = tw.max;
    slider.step  = tw.step;
    slider.value = state.tweaks[tw.id] ?? tw.default;

    const num = document.createElement('input');
    num.type      = 'number';
    num.className = 'num-input';
    num.min       = tw.min;
    num.max       = tw.max;
    num.step      = tw.step;
    num.value     = state.tweaks[tw.id] ?? tw.default;

    slider.addEventListener('input', () => {
      state.tweaks[tw.id] = parseFloat(slider.value);
      num.value = state.tweaks[tw.id];
      regenerate();
    });
    num.addEventListener('change', () => {
      const v = Math.max(tw.min, Math.min(tw.max, parseFloat(num.value) || 0));
      state.tweaks[tw.id] = v;
      num.value = v;
      slider.value = v;
      regenerate();
    });

    row.append(label, slider, num);
    tweaksGroup.appendChild(row);
  });
}
buildTweakControls(HULLS[0]);

// ── Block slot selection ──────────────────────────────────────────────────
const STATE_KEYS = { hull: 'block', rib: 'ribBlock', keel: 'keelBlock', deck: 'deckBlock', border: 'borderBlock' };

function updateSwatches() {
  hullSwatch.style.background   = colorOf(state.block);
  ribSwatch.style.background    = state.ribBlock    ? colorOf(state.ribBlock)    : colorOf(state.block);
  keelSwatch.style.background   = state.keelBlock   ? colorOf(state.keelBlock)   : colorOf(state.block);
  deckSwatch.style.background   = state.deckBlock   ? colorOf(state.deckBlock)   : colorOf(state.block);
  borderSwatch.style.background = state.borderBlock ? colorOf(state.borderBlock) : (state.deckBlock ? colorOf(state.deckBlock) : colorOf(state.block));
  // Dim when "same as parent"
  ribSwatch.style.opacity    = state.ribBlock    ? '1' : '0.4';
  keelSwatch.style.opacity   = state.keelBlock   ? '1' : '0.4';
  deckSwatch.style.opacity   = state.deckBlock   ? '1' : '0.4';
  borderSwatch.style.opacity = state.borderBlock ? '1' : '0.4';
  // Block type labels
  hullBlockName.textContent   = shortName(state.block);
  ribBlockName.textContent    = state.ribBlock    ? shortName(state.ribBlock)    : '= Hull';
  keelBlockName.textContent   = state.keelBlock   ? shortName(state.keelBlock)  : '= Hull';
  deckBlockName.textContent   = state.deckBlock   ? shortName(state.deckBlock)  : '= Hull';
  borderBlockName.textContent = state.borderBlock ? shortName(state.borderBlock): '= Deck';
}
updateSwatches();

document.querySelectorAll('.block-slot').forEach(btn => {
  btn.addEventListener('click', (e) => {
    if (e.target.classList.contains('slot-clear')) return;
    activeSlot = btn.dataset.slot;
    document.querySelectorAll('.block-slot').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Clear buttons (reset rib/keel to "same as hull")
document.querySelectorAll('.slot-clear').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const slot = btn.dataset.clear;
    state[STATE_KEYS[slot]] = '';
    updateSwatches();
    regenerate();
  });
});

// ── Interior only toggle ─────────────────────────────────────────────────
ribsInteriorCb.addEventListener('change', () => {
  state.ribsInterior = ribsInteriorCb.checked;
  regenerate();
});

// ── Palette grid ─────────────────────────────────────────────────────────
function assignBlock(blockId) {
  const key = STATE_KEYS[activeSlot];
  state[key] = blockId;
  updateSwatches();
  regenerate();
}

function addPalBtn(id, label) {
  const btn = document.createElement('button');
  btn.className = 'pal-btn';
  btn.title = label;
  btn.style.background = colorOf(id);
  btn.addEventListener('click', () => assignBlock(id));
  paletteGrid.appendChild(btn);
  return btn;
}

function addEmptyCell() {
  const btn = document.createElement('button');
  btn.className = 'pal-btn empty';
  paletteGrid.appendChild(btn);
}

function addLabel(text, right) {
  const span = document.createElement('span');
  span.className = 'pal-label' + (right ? ' pal-label-right' : '');
  span.textContent = text;
  paletteGrid.appendChild(span);
}

// Build 6-column grid: Label | Plank | Log | Stripped | Misc | Label
const maxRows = Math.max(PALETTE_ROWS.length, PALETTE_OTHER.length);
for (let r = 0; r < maxRows; r++) {
  const row = PALETTE_ROWS[r];
  // Left label (wood type name)
  addLabel(row ? row.name : '');
  if (row) {
    addPalBtn(row.plank, row.name + ' Plank');
    addPalBtn(row.log,   row.name + ' Log');
    addPalBtn(row.strip, row.name + ' Stripped');
  } else {
    addEmptyCell(); addEmptyCell(); addEmptyCell();
  }
  const other = PALETTE_OTHER[r];
  if (other) {
    addPalBtn(other.id, other.label);
  } else {
    addEmptyCell();
  }
  // Right label (misc type name)
  addLabel(other ? other.label : '', true);
}

// Custom block ID input
customBlockId.addEventListener('change', () => {
  const v = customBlockId.value.trim();
  if (v) assignBlock(v);
});

// ── Palette toggle ──────────────────────────────────────────────────────
const paletteEl     = document.getElementById('palette');
const paletteToggle = document.getElementById('palette-toggle');
paletteToggle.addEventListener('click', () => {
  paletteEl.classList.toggle('collapsed');
  paletteToggle.innerHTML = paletteEl.classList.contains('collapsed') ? '&#x25C0;' : '&#x25B6;';
});

// ── View buttons ──────────────────────────────────────────────────────────
document.querySelectorAll('.view-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    renderer.snapView(parseInt(btn.dataset.angle, 10));
  });
});

// ── Export ────────────────────────────────────────────────────────────────
exportBtn.addEventListener('click', () => {
  if (!lastResult) return;
  const { blocks, sizeX, sizeY, sizeZ } = lastResult;
  const hullName = HULLS.find(h => h.meta.id === state.hullId)?.meta.name ?? state.hullId;
  const filename = `${hullName.toLowerCase()}_${sizeX}x${sizeY}x${sizeZ}`;
  exportNBT(blocks, sizeX, sizeY, sizeZ, filename);
});

// ── Renderer setup ────────────────────────────────────────────────────────
const canvas = document.getElementById('canvas');
const renderer = new ShipRenderer(canvas);

// ── Stats update ──────────────────────────────────────────────────────────
function updateStats(blocks, sizeX, sizeY, sizeZ, ms) {
  const interior = countInterior(sizeX, sizeY, sizeZ, blocks.length);
  statsEl.innerHTML = `
    <div class="stat-card"><div class="stat-label">Blocks</div><div class="stat-value">${blocks.length.toLocaleString()}</div></div>
    <div class="stat-card"><div class="stat-label">Interior</div><div class="stat-value">${interior.toLocaleString()}</div></div>
    <div class="stat-card"><div class="stat-label">Size X</div><div class="stat-value">${sizeX}</div></div>
    <div class="stat-card"><div class="stat-label">Size Y</div><div class="stat-value">${sizeY}</div></div>
  `;
  perfEl.textContent = `${ms}ms`;
}

function countInterior(sX, sY, sZ, shellCount) {
  return Math.max(0, sX * sY * sZ - shellCount);
}

// ── Regenerate ────────────────────────────────────────────────────────────
let lastResult = null;
let _regen_timer = null;

function regenerate() {
  clearTimeout(_regen_timer);
  _regen_timer = setTimeout(_doRegen, 40);
}

function _doRegen() {
  const hull = HULLS.find(h => h.meta.id === state.hullId);
  if (!hull) return;

  const t0 = performance.now();

  const result = voxelize({
    isSolid:         hull.isSolid.bind(hull),
    tweaks:          { ...state.tweaks },
    length:          state.length,
    beam:            state.beam,
    draft:           state.draft,
    thickness:       state.thickness,
    block:           state.block,
    // bow/stern are swapped here so the UI labels match what the user sees
    bowRake:         state.sternRake,
    sternRake:       state.bowRake,
    bowBulge:        state.sternBulge,
    sternBulge:      state.bowBulge,
    bowRound:        state.sternRound,
    sternRound:      state.bowRound,
    ribSpacing:      state.ribSpacing,
    ribThickness:    state.ribThickness,
    ribBlock:        state.ribBlock,
    ribsInterior:    state.ribsInterior,
    keelBlock:       state.keelBlock,
    keelWidth:       state.keelWidth,
    deckBlock:       state.deckBlock,
    borderBlock:     state.borderBlock,
    bowRiseLen:      state.sternRiseLen,
    bowRiseHeight:   state.sternRiseHeight,
    sternRiseLen:    state.bowRiseLen,
    sternRiseHeight: state.bowRiseHeight,
  });

  const ms = Math.round(performance.now() - t0);
  lastResult = result;

  renderer.updateBlocks(result.blocks, result.sizeX, result.sizeY, result.sizeZ);
  updateStats(result.blocks, result.sizeX, result.sizeY, result.sizeZ, ms);
}

// Initial render
regenerate();
