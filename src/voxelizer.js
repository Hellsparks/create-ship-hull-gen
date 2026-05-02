/**
 * Voxelizer
 *
 * Hull isSolid coords (remapped per height for rake):
 *   nx  -0.5(bow) … +0.5(stern)  — logical hull space, always full range
 *   ny   0(keel)  … 1(deck)
 *   nz  -0.5(port) … +0.5(stbd)
 *
 * Global shape:
 *
 *   bowRake / sternRake  (-0.45 … +0.45)
 *     Positive = bow/stern face leans back (traditional rake).
 *     Negative = bow/stern overhangs forward/back (clipper / ram bow).
 *
 *     At every height ny the bow tip is at physical tx = bowRake * ny^exp.
 *     The hull's logical coordinates are remapped so it always spans the full
 *     [-0.5, +0.5] range — meaning it always tapers to a proper point.
 *     Negative rake expands the bounding box to accommodate the overhang.
 *
 *   bowBulge / sternBulge  (-0.3 … +0.3)
 *     Curves the rake line from straight to parabolic (side view).
 *     0 = straight (linear), +ve = convex, -ve = concave.
 *
 *   bowRiseLen / sternRiseLen  (0 … 0.45, fraction of hull length)
 *   bowRiseHeight / sternRiseHeight  (0 … 20 blocks)
 *     Raised deck sections added ON TOP of the hull.
 */

export function voxelize({
  isSolid, tweaks,
  length, beam, draft, thickness, block,
  bowRake         =  0,
  sternRake       =  0,
  bowRiseLen      =  0,
  bowRiseHeight   =  0,
  sternRiseLen    =  0,
  sternRiseHeight =  0,
  bowRound        =  0,
  sternRound      =  0,
  bowBulge        =  0,   // rake curvature: +ve = convex, -ve = concave
  sternBulge      =  0,   // rake curvature: +ve = convex, -ve = concave
  ribSpacing      =  0,   // 0 = no ribs; N = one rib every N blocks along X
  ribThickness    =  2,   // how many blocks thick the rib frame is
  ribBlock        = '',   // block ID for ribs (empty = same as hull)
  ribsInterior    = false, // true = ribs only fill interior, don't replace hull shell
  keelBlock       = '',   // block ID for keel strip (empty = same as hull)
  keelWidth       =  0,   // 0 = no keel; N = keel strip N blocks wide along centreline
  deckBlock       = '',   // block ID for top deck surface (empty = same as hull)
  borderBlock     = '',   // block ID for deck perimeter edge (empty = same as deck)
}) {
  const sZ   = beam;
  const extraY = Math.max(0, Math.ceil(bowRiseHeight), Math.ceil(sternRiseHeight));
  const sY   = draft + extraY;

  // ── Rake curvature exponents ──────────────────────────────────────────────
  // bulge=0 → exponent=1 (linear rake), ±0.3 → exponent 1±0.9
  const bowExp   = Math.max(0.1, 1 + bowBulge   * 3);
  const sternExp = Math.max(0.1, 1 + sternBulge * 3);

  // ── Grid expansion for negative rake overhang ─────────────────────────────
  const nyMax = draft > 1 ? (sY - 1) / Math.max(draft - 1, 1) : 1;
  const bowTipAtTop  = bowRake   * Math.pow(nyMax, bowExp);
  const stnTipAtTop  = 1 - sternRake * Math.pow(nyMax, sternExp);

  const padBow   = Math.ceil(Math.max(0, -bowTipAtTop)    * (length - 1));
  const padStern = Math.ceil(Math.max(0, stnTipAtTop - 1) * (length - 1));
  const sX       = length + padBow + padStern;

  const total = sX * sY * sZ;
  const solid = new Uint8Array(total);

  const lenM1  = Math.max(length - 1, 1);  // guard against length=1

  for (let x = 0; x < sX; x++) {
    // Physical tx: 0 = keel bow tip, 1 = keel stern tip (may be <0 or >1 in overhang)
    const tx = (x - padBow) / lenM1;

    for (let y = 0; y < sY; y++) {
      // nyEff: normalised height, can exceed 1 in rise zones
      const nyEff = draft > 1 ? y / (draft - 1) : 1;

      // Curved rake tips at this height
      const bowTipBase = bowRake   * Math.pow(nyEff, bowExp);
      const stnTipBase = 1 - sternRake * Math.pow(nyEff, sternExp);
      if (stnTipBase <= bowTipBase) continue;        // degenerate

      if (tx < bowTipBase || tx > stnTipBase) continue;

      // txL: logical position along hull [0=bow, 1=stern]
      const txL = (tx - bowTipBase) / (stnTipBase - bowTipBase);

      // Apply bow/stern roundness
      let txLr;
      if (txL <= 0.5) {
        txLr = 0.5 * Math.pow(txL * 2, 1 / (1 + bowRound   * 3));
      } else {
        txLr = 1   - 0.5 * Math.pow((1 - txL) * 2, 1 / (1 + sternRound * 3));
      }
      const nxL = txLr - 0.5;                         // -0.5 … +0.5

      for (let z = 0; z < sZ; z++) {
        const nz = sZ > 1 ? z / (sZ - 1) - 0.5 : 0;

        if (y < draft) {
          // ── Main hull ────────────────────────────────────────────────────
          const ny = Math.min(nyEff, 1);
          if (isSolid(nxL, ny, nz, tweaks)) {
            solid[idx(x, y, z, sX, sY, sZ)] = 1;
          }

        } else {
          // ── Rise zones (above main deck) ─────────────────────────────────
          const yRise = y - draft;
          const inBow   = yRise < bowRiseHeight   && txL <= bowRiseLen;
          const inStern = yRise < sternRiseHeight && txL >= 1 - sternRiseLen;
          if (!inBow && !inStern) continue;
          if (isSolid(nxL, 1.0, nz, tweaks)) {
            solid[idx(x, y, z, sX, sY, sZ)] = 1;
          }
        }
      }
    }
  }

  // ── Shell erosion ─────────────────────────────────────────────────────────
  let shell = solid;
  if (thickness > 0 && thickness < sY && thickness < sX && thickness < sZ) {
    let inner = new Uint8Array(solid);
    for (let t = 0; t < thickness; t++) {
      inner = erode(inner, sX, sY, sZ);
    }
    shell = new Uint8Array(total);
    for (let i = 0; i < total; i++) {
      shell[i] = solid[i] & (~inner[i] & 1);
    }
  }

  // ── Ribs ──────────────────────────────────────────────────────────────────
  // shell values: 1 = hull, 2 = rib
  //   ribThickness = 0 → full solid cross-section
  //   ribThickness > 0 → hollow frame: only the outer ribThickness-layer ring
  //   ribsInterior  → only add ribs where shell is empty (no visible striping)
  if (ribSpacing > 0) {
    const rt = Math.max(0, ribThickness);
    for (let x = 0; x < sX; x += ribSpacing) {
      const cs = new Uint8Array(sY * sZ);
      for (let y = 0; y < sY; y++)
        for (let z = 0; z < sZ; z++)
          cs[y * sZ + z] = solid[idx(x, y, z, sX, sY, sZ)];

      // Compute which cells to stamp
      let include;
      if (rt === 0) {
        include = cs; // full solid
      } else {
        let interior = cs;
        for (let t = 0; t < rt; t++) interior = erode2D(interior, sY, sZ);
        include = new Uint8Array(sY * sZ);
        for (let i = 0; i < sY * sZ; i++) include[i] = cs[i] & (~interior[i] & 1);
      }

      for (let y = 0; y < sY; y++)
        for (let z = 0; z < sZ; z++) {
          if (!include[y * sZ + z]) continue;
          const i = idx(x, y, z, sX, sY, sZ);
          if (ribsInterior && shell[i]) continue; // don't replace hull blocks
          shell[i] = 2; // mark as rib
        }
    }
  }

  // ── Keel ───────────────────────────────────────────────────────────────────
  // shell values: 1 = hull, 2 = rib, 3 = keel
  // Keel runs along the centreline at y=0, keelWidth blocks wide in Z.
  if (keelWidth > 0) {
    const halfKeel = keelWidth / 2;
    const centreZ  = (sZ - 1) / 2;
    for (let x = 0; x < sX; x++) {
      for (let z = 0; z < sZ; z++) {
        if (Math.abs(z - centreZ) >= halfKeel) continue;
        // Mark all solid blocks in this column from the bottom up
        for (let y = 0; y < sY; y++) {
          const i = idx(x, y, z, sX, sY, sZ);
          if (shell[i]) shell[i] = 3;
        }
      }
    }
  }

  // ── Deck & border ─────────────────────────────────────────────────────────
  // shell values: 1=hull, 2=rib, 3=keel, 4=deck, 5=border
  // The topmost block in every (x,z) column becomes deck — ribs/keel never
  // show on the top surface.  The perimeter of the deck layer becomes border.
  {
    // Build a top-Y map: for each (x,z) find the highest occupied y
    const topY = new Int16Array(sX * sZ).fill(-1);
    for (let x = 0; x < sX; x++) {
      for (let z = 0; z < sZ; z++) {
        for (let y = sY - 1; y >= 0; y--) {
          if (shell[idx(x, y, z, sX, sY, sZ)]) {
            topY[x * sZ + z] = y;
            break;
          }
        }
      }
    }

    // Only treat blocks at or above the deck line as deck candidates.
    // The hull tapers below draft-1 at bow/stern — those low-y tip blocks
    // must not be marked as deck or they produce border artifacts way below
    // the actual deck level.
    const deckFloor = draft - 1;

    // Mark deck blocks (override whatever is there, including ribs/keel)
    for (let x = 0; x < sX; x++) {
      for (let z = 0; z < sZ; z++) {
        const y = topY[x * sZ + z];
        if (y < deckFloor) continue;          // below deck line → skip
        shell[idx(x, y, z, sX, sY, sZ)] = 4;
      }
    }

    // Mark border: deck blocks whose neighbour column has no deck block
    // (i.e. neighbour topY is below deck floor or empty → hull edge here)
    if (borderBlock !== undefined) {
      for (let x = 0; x < sX; x++) {
        for (let z = 0; z < sZ; z++) {
          const y = topY[x * sZ + z];
          if (y < deckFloor) continue;
          const onEdge =
            topY[(x - 1) * sZ + z] < deckFloor || topY[(x + 1) * sZ + z] < deckFloor ||
            topY[x * sZ + (z - 1)] < deckFloor || topY[x * sZ + (z + 1)] < deckFloor ||
            x === 0 || x === sX - 1 || z === 0 || z === sZ - 1;
          if (onEdge) shell[idx(x, y, z, sX, sY, sZ)] = 5;
        }
      }
    }
  }

  // ── Collect blocks ────────────────────────────────────────────────────────
  const rBlock = ribBlock  || block;
  const kBlock = keelBlock || block;
  const dBlock = deckBlock || block;
  const bBlock = borderBlock || dBlock;
  const blocks = [];
  for (let x = 0; x < sX; x++) {
    for (let y = 0; y < sY; y++) {
      for (let z = 0; z < sZ; z++) {
        const v = shell[idx(x, y, z, sX, sY, sZ)];
        if      (v === 1) blocks.push({ x, y, z, block });
        else if (v === 2) blocks.push({ x, y, z, block: rBlock });
        else if (v === 3) blocks.push({ x, y, z, block: kBlock });
        else if (v === 4) blocks.push({ x, y, z, block: dBlock });
        else if (v === 5) blocks.push({ x, y, z, block: bBlock });
      }
    }
  }

  return { blocks, sizeX: sX, sizeY: sY, sizeZ: sZ };
}

function idx(x, y, z, sX, sY, sZ) {
  return x * sY * sZ + y * sZ + z;
}

// 2-D erosion on a flat YZ slice (used for rib frame generation)
function erode2D(cs, sY, sZ) {
  const out = new Uint8Array(sY * sZ);
  for (let y = 0; y < sY; y++) {
    for (let z = 0; z < sZ; z++) {
      if (!cs[y * sZ + z]) continue;
      if (y === 0 || y === sY - 1 || z === 0 || z === sZ - 1) continue;
      if (
        cs[(y - 1) * sZ + z] && cs[(y + 1) * sZ + z] &&
        cs[y * sZ + (z - 1)] && cs[y * sZ + (z + 1)]
      ) {
        out[y * sZ + z] = 1;
      }
    }
  }
  return out;
}

function erode(mask, sX, sY, sZ) {
  const out = new Uint8Array(mask.length);
  for (let x = 0; x < sX; x++) {
    for (let y = 0; y < sY; y++) {
      for (let z = 0; z < sZ; z++) {
        if (!mask[idx(x, y, z, sX, sY, sZ)]) continue;
        if (x===0||x===sX-1||y===0||y===sY-1||z===0||z===sZ-1) continue;
        if (
          mask[idx(x-1,y,z,sX,sY,sZ)] && mask[idx(x+1,y,z,sX,sY,sZ)] &&
          mask[idx(x,y-1,z,sX,sY,sZ)] && mask[idx(x,y+1,z,sX,sY,sZ)] &&
          mask[idx(x,y,z-1,sX,sY,sZ)] && mask[idx(x,y,z+1,sX,sY,sZ)]
        ) {
          out[idx(x, y, z, sX, sY, sZ)] = 1;
        }
      }
    }
  }
  return out;
}
