/**
 * Cutter — fast, narrow, deep-keeled single-mast vessel.
 * Deep V cross-section. Taper and stern rise are global controls.
 */
export const cutter = {
  meta: {
    id: 'cutter',
    name: 'Cutter',
    description: 'Fast, narrow-beamed vessel with deep V keel',
    tweaks: [
      { id: 'vSharpness', label: 'V Sharpness', min: 0.3, max: 1.5, step: 0.05, default: 0.8 },
    ],
  },

  isSolid(nx, ny, nz, t) {
    const vSharpness = t.vSharpness ?? 0.8;

    const tx   = nx + 0.5;
    const absZ = Math.abs(nz);

    // Narrow elliptic plan view
    const halfBeam = Math.sin(Math.PI * Math.pow(tx, 1.1)) * 0.5;
    if (absZ > halfBeam || halfBeam < 0.001) return false;

    // Deep V cross-section
    const zFrac   = absZ / halfBeam;
    const floorNy = Math.pow(zFrac, vSharpness);

    if (ny < floorNy) return false;

    return true;
  },
};
