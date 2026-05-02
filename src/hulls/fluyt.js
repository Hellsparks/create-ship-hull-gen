/**
 * Fluyt — Dutch merchant, pear-shaped cross-section.
 * Narrow keel, wide belly at ~45% height, extreme tumblehome narrows deck.
 *
 * Uses a direct maxWidth(ny) profile instead of a floor function:
 *   ny=0 (keel): maxWidth = 0  →  centreline only
 *   ny=bellyFrac: maxWidth = halfBeam  →  full width
 *   ny=1 (deck): maxWidth = halfBeam*(1-tumblehome)  →  narrow deck
 */
export const fluyt = {
  meta: {
    id: 'fluyt',
    name: 'Fluyt',
    description: 'Dutch merchant with round keel and extreme tumblehome',
    tweaks: [
      { id: 'bellyWidth',  label: 'Belly Width',  min: 0.4, max: 1,   step: 0.05, default: 0.8  },
      { id: 'tumblehome',  label: 'Tumblehome',   min: 0,   max: 0.7, step: 0.05, default: 0.5  },
      { id: 'sternRound',  label: 'Stern Round',  min: 0,   max: 1,   step: 0.05, default: 0.55 },
    ],
  },

  isSolid(nx, ny, nz, t) {
    const bellyWidth = t.bellyWidth ?? 0.8;
    const tumblehome = t.tumblehome ?? 0.5;
    const sternRound = t.sternRound ?? 0.55;

    const tx   = nx + 0.5;
    const absZ = Math.abs(nz);

    // Plan view: wide, rounded stern, fuller bow than a warship
    const sternFactor = 1 - sternRound * Math.pow(tx, 3) * 0.35;
    const halfBeam    = Math.sin(Math.PI * Math.pow(tx, 0.6)) * 0.5 * bellyWidth * sternFactor;
    if (absZ > halfBeam || halfBeam < 0.001) return false;

    // Cross-section maxWidth profile:
    //   Lower section  (ny 0 → bellyFrac): round keel, width rises from 0 to halfBeam
    //   Upper section  (ny bellyFrac → 1): tumblehome narrows to (1-tumblehome)*halfBeam
    const bellyFrac = 0.45;
    let maxZ;
    if (ny <= bellyFrac) {
      // Sine curve: 0 at keel, halfBeam at belly
      maxZ = halfBeam * Math.sin((Math.PI / 2) * (ny / bellyFrac));
    } else {
      const t2 = (ny - bellyFrac) / (1 - bellyFrac);  // 0..1 in upper hull
      maxZ = halfBeam * (1 - tumblehome * Math.pow(t2, 0.9));
    }

    if (absZ > maxZ) return false;

    return true;
  },
};
