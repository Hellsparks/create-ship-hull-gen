/**
 * Brig — two-masted square-rigged vessel.
 * Flat bottom: wide from keel up, straight near-vertical sides, slight tumblehome near deck.
 *
 * maxWidth(ny) profile:
 *   ny=0   (keel):  ~80% of halfBeam  (flat bottom, slightly chamfered edge)
 *   ny=0.3 (sides): full halfBeam
 *   ny=1   (deck):  halfBeam * (1-tumblehome)
 */
export const brig = {
  meta: {
    id: 'brig',
    name: 'Brig',
    description: 'Two-masted square-rigged with flat bottom and straight sides',
    tweaks: [
      { id: 'tumblehome', label: 'Tumblehome', min: 0, max: 0.4, step: 0.05, default: 0.12 },
    ],
  },

  isSolid(nx, ny, nz, t) {
    const tumblehome = t.tumblehome ?? 0.12;

    const tx   = nx + 0.5;
    const absZ = Math.abs(nz);

    // Plan view: blunt bow, rounded stern — controlled by global taper now
    const halfBeam = Math.sin(Math.PI * Math.pow(tx, 0.6)) * 0.5;
    if (absZ > halfBeam || halfBeam < 0.001) return false;

    // maxWidth profile — wider near the deck than the keel (correct for brig)
    const keelFrac  = 0.25;   // chamfer zone at keel
    const deckFrac  = 0.75;   // tumblehome starts here
    let maxZ;

    if (ny <= keelFrac) {
      // Keel: rises from 0.8*halfBeam at ny=0 to fullBeam at ny=keelFrac
      const t2 = ny / keelFrac;
      maxZ = halfBeam * (0.80 + 0.20 * t2);
    } else if (ny <= deckFrac) {
      // Straight sides: full width
      maxZ = halfBeam;
    } else {
      // Tumblehome: narrows toward deck
      const t2 = (ny - deckFrac) / (1 - deckFrac);
      maxZ = halfBeam * (1 - tumblehome * t2);
    }

    if (absZ > maxZ) return false;

    return true;
  },
};
