/**
 * Minimal NBT serializer for Minecraft structure files (.nbt schematic).
 * Output is compatible with the /place structure command and most schematic mods.
 *
 * Format: Minecraft Java Edition structure NBT (DataVersion 4189 = 1.21.4)
 * Compressed with pako gzip before download.
 *
 * Includes Create mod super_glue entities so the structure loads as a single
 * glued contraption. Boxes are max 24 blocks per axis with 1-block overlap.
 */

import pako from 'pako';

// ── NBT tag type constants ──────────────────────────────────────────────────
const TAG = {
  END: 0, BYTE: 1, SHORT: 2, INT: 3, LONG: 4, FLOAT: 5,
  DOUBLE: 6, BYTE_ARRAY: 7, STRING: 8, LIST: 9, COMPOUND: 10,
  INT_ARRAY: 11, LONG_ARRAY: 12,
};

// ── Public API ──────────────────────────────────────────────────────────────

/**
 * Build and download an NBT structure file.
 * @param {Array<{x,y,z,block}>} blocks
 * @param {number} sizeX
 * @param {number} sizeY
 * @param {number} sizeZ
 * @param {string} filename  without extension
 */
export function exportNBT(blocks, sizeX, sizeY, sizeZ, filename = 'ship_hull') {
  const raw  = buildNBT(blocks, sizeX, sizeY, sizeZ);
  const gz   = pako.gzip(raw);
  const blob = new Blob([gz], { type: 'application/octet-stream' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url;
  a.download = `${filename}.nbt`;
  a.click();
  URL.revokeObjectURL(url);
}

// ── Glue box computation ────────────────────────────────────────────────────

/**
 * Compute the minimum set of 24-block super_glue boxes that covers
 * [0, sX-1] × [0, sY-1] × [0, sZ-1] with at least 1-block overlap
 * between adjacent boxes.
 */
function computeGlueBoxes(sX, sY, sZ) {
  const MAX    = 24; // max blocks per axis per box
  const STRIDE = MAX - 1; // 23 — adjacent boxes overlap by 1 block

  function starts(size) {
    const s = [];
    for (let i = 0; i < size; i += STRIDE) s.push(i);
    return s;
  }

  const boxes = [];
  for (const x of starts(sX)) {
    for (const y of starts(sY)) {
      for (const z of starts(sZ)) {
        boxes.push({
          x1: x,  y1: y,  z1: z,
          x2: Math.min(x + MAX, sX),
          y2: Math.min(y + MAX, sY),
          z2: Math.min(z + MAX, sZ),
        });
      }
    }
  }
  return boxes;
}

// ── Serialiser ──────────────────────────────────────────────────────────────

function buildNBT(blocks, sizeX, sizeY, sizeZ) {
  // Build palette (unique block IDs → integer index)
  const paletteMap = new Map();
  for (const b of blocks) {
    if (!paletteMap.has(b.block)) paletteMap.set(b.block, paletteMap.size);
  }
  const palette = [...paletteMap.keys()];

  const chunks = [];
  let totalLen = 0;

  function push(buf) {
    const u = buf instanceof Uint8Array ? buf : new Uint8Array(buf);
    chunks.push(u);
    totalLen += u.length;
  }

  function u8(v)  { push(new Uint8Array([v & 0xff])); }
  function i16(v) { const d = new DataView(new ArrayBuffer(2)); d.setInt16(0, v, false); push(d.buffer); }
  function i32(v) { const d = new DataView(new ArrayBuffer(4)); d.setInt32(0, v, false); push(d.buffer); }
  function f32(v) { const d = new DataView(new ArrayBuffer(4)); d.setFloat32(0, v, false); push(d.buffer); }
  function f64(v) { const d = new DataView(new ArrayBuffer(8)); d.setFloat64(0, v, false); push(d.buffer); }
  function str(s) { const e = new TextEncoder().encode(s); i16(e.length); push(e); }
  function head(type, name) { u8(type); str(name); }

  function listDoubles(name, vals) {
    head(TAG.LIST, name); u8(TAG.DOUBLE); i32(vals.length);
    for (const v of vals) f64(v);
  }
  function listInts(name, vals) {
    head(TAG.LIST, name); u8(TAG.INT); i32(vals.length);
    for (const v of vals) i32(v);
  }
  function listFloats(name, vals) {
    head(TAG.LIST, name); u8(TAG.FLOAT); i32(vals.length);
    for (const v of vals) f32(v);
  }
  function intArray(name, vals) {
    head(TAG.INT_ARRAY, name); i32(vals.length);
    for (const v of vals) i32(v);
  }

  function randI32() {
    return (Math.random() * 0x100000000 - 0x80000000) | 0;
  }

  // ── Root compound (name = "") ────────────────────────────────────────────
  u8(TAG.COMPOUND); str('');

  // DataVersion
  head(TAG.INT, 'DataVersion'); i32(4189);

  // size: List<Int> with 3 elements
  head(TAG.LIST, 'size');
  u8(TAG.INT); i32(3);
  i32(sizeX); i32(sizeY); i32(sizeZ);

  // ── entities: List<Compound> — Create super_glue boxes ────────────────────
  const glueBoxes = computeGlueBoxes(sizeX, sizeY, sizeZ);

  head(TAG.LIST, 'entities');
  u8(TAG.COMPOUND); i32(glueBoxes.length);

  for (const box of glueBoxes) {
    const { x1, y1, z1, x2, y2, z2 } = box;

    // Entity position: center X/Z of box, min Y, +0.5 on Z (matches reference format)
    const px = (x1 + x2) / 2;
    const py = y1;
    const pz = (z1 + z2) / 2 + 0.5;

    const bpx = Math.floor(px);
    const bpy = Math.floor(py);
    const bpz = Math.floor(pz);

    // From / To are relative to pos
    const fx = x1 - px, fy = y1 - py, fz = z1 - pz;
    const tx = x2 - px, ty = y2 - py, tz = z2 - pz;

    // Outer entity fields
    listInts('blockPos', [bpx, bpy, bpz]);
    listDoubles('pos', [px, py, pz]);

    // Inner nbt compound
    head(TAG.COMPOUND, 'nbt');

    head(TAG.STRING, 'id'); str('create:super_glue');

    listDoubles('From', [fx, fy, fz]);
    listDoubles('To',   [tx, ty, tz]);

    intArray('UUID', [randI32(), randI32(), randI32(), randI32()]);

    // Standard entity fields
    listDoubles('Pos',    [0.0, 0.0, 0.0]);
    listDoubles('Motion', [0.0, 0.0, 0.0]);
    listFloats('Rotation', [0.0, 0.0]);
    head(TAG.FLOAT, 'FallDistance'); f32(0.0);
    head(TAG.SHORT, 'Fire');          i16(-1);
    head(TAG.SHORT, 'Air');           i16(300);
    head(TAG.BYTE,  'OnGround');      u8(0);
    head(TAG.BYTE,  'Invulnerable');  u8(0);
    head(TAG.INT,   'PortalCooldown');i32(0);

    u8(TAG.END); // end nbt compound

    u8(TAG.END); // end entity compound
  }

  // ── palette: List<Compound> ───────────────────────────────────────────────
  head(TAG.LIST, 'palette');
  u8(TAG.COMPOUND); i32(palette.length);
  for (const blockId of palette) {
    head(TAG.STRING, 'Name'); str(blockId);
    u8(TAG.END);
  }

  // ── blocks: List<Compound> ────────────────────────────────────────────────
  head(TAG.LIST, 'blocks');
  u8(TAG.COMPOUND); i32(blocks.length);
  for (const b of blocks) {
    listInts('pos', [b.x, b.y, b.z]);
    head(TAG.INT, 'state'); i32(paletteMap.get(b.block));
    u8(TAG.END);
  }

  // End root compound
  u8(TAG.END);

  // Assemble all chunks into one buffer
  const out = new Uint8Array(totalLen);
  let off = 0;
  for (const c of chunks) { out.set(c, off); off += c.length; }
  return out;
}
