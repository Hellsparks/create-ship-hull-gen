/**
 * Sloop — classic single-mast sailing vessel.
 * Round U cross-section. Sheer/stern rise are global controls.
 */
export const sloop = {
  meta: {
    id: 'sloop',
    name: 'Sloop',
    description: 'Classic round-hulled single-mast sailboat',
    tweaks: [
      { id: 'roundness', label: 'Roundness', min: 0.3, max: 1, step: 0.05, default: 0.75 },
    ],
  },

  isSolid(nx, ny, nz, t) {
    const roundness = t.roundness ?? 0.75;

    const tx   = nx + 0.5;
    const absZ = Math.abs(nz);

    // Smooth elliptic plan form
    const halfBeam = Math.pow(Math.sin(Math.PI * Math.pow(tx, 0.85)), 0.7) * 0.5;
    if (absZ > halfBeam || halfBeam < 0.001) return false;

    // Round cross-section blended with a shallower parabola
    const zFrac   = absZ / halfBeam;
    const circNy  = 1 - Math.sqrt(Math.max(0, 1 - zFrac * zFrac));
    const paraNy  = Math.pow(zFrac, 2) * 0.5;
    const floorNy = circNy * roundness + paraNy * (1 - roundness);

    if (ny < floorNy) return false;

    return true;
  },
};
