/**
 * Frigate — long, sleek warship.
 * Moderate V cross-section. Taper and stern rise are global controls.
 */
export const frigate = {
  meta: {
    id: 'frigate',
    name: 'Frigate',
    description: 'Long, sleek warship with sharp bow and fine lines',
    tweaks: [
      { id: 'vDepth',     label: 'V Depth',    min: 0.3, max: 1.2, step: 0.05, default: 0.7 },
      { id: 'tumblehome', label: 'Tumblehome', min: 0,   max: 0.3, step: 0.05, default: 0.1 },
    ],
  },

  isSolid(nx, ny, nz, t) {
    const vDepth     = t.vDepth     ?? 0.7;
    const tumblehome = t.tumblehome ?? 0.1;

    const tx   = nx + 0.5;
    const absZ = Math.abs(nz);

    // Fine elongated plan form
    const halfBeam = Math.pow(Math.sin(Math.PI * tx), 1.4) * 0.5;
    if (absZ > halfBeam || halfBeam < 0.001) return false;

    // Moderate V cross-section
    const zFrac   = absZ / halfBeam;
    const floorNy = Math.pow(zFrac, 1 / vDepth);
    if (ny < floorNy) return false;

    // Slight tumblehome on upper hull only
    const beamCentre = 0.55;
    if (ny > beamCentre) {
      const t2   = (ny - beamCentre) / (1 - beamCentre);
      const maxZ = halfBeam * (1 - tumblehome * t2);
      if (absZ > maxZ) return false;
    }

    return true;
  },
};
