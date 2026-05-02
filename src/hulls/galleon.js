/**
 * Galleon — wide-beamed merchant/warship.
 * Rounded U cross-section; bow flare and stern rise are now global controls.
 */
export const galleon = {
  meta: {
    id: 'galleon',
    name: 'Galleon',
    description: 'Wide-beamed warship with rounded U hull',
    tweaks: [
      { id: 'belly', label: 'Hull Belly', min: 0, max: 1, step: 0.05, default: 0.55 },
    ],
  },

  isSolid(nx, ny, nz, t) {
    const belly = t.belly ?? 0.55;

    const tx   = nx + 0.5;
    const absZ = Math.abs(nz);

    // Plan view: elliptic, widest ~45% from bow
    const halfBeam = Math.sin(Math.PI * Math.pow(tx, 0.75)) * 0.5;
    if (absZ > halfBeam || halfBeam < 0.001) return false;

    // Cross-section: rounded U
    //   zFrac=0 → floorNy=0 (keel at bottom)
    //   zFrac=1 → floorNy scales with belly
    const zFrac   = absZ / halfBeam;
    const roundNy = 1 - Math.sqrt(Math.max(0, 1 - zFrac * zFrac));
    const floorNy = roundNy * (1 - belly * 0.6);

    if (ny < floorNy) return false;

    return true;
  },
};
