/**
 * Hull registry — each hull exports:
 *   meta: { id, name, description, tweaks: [{id, label, min, max, step, default}] }
 *   isSolid(nx, ny, nz, tweaks): boolean
 *     nx = normalised x  (-0.5 … 0.5, bow→stern)
 *     ny = normalised y  ( 0 … 1, keel→deck)
 *     nz = normalised z  (-0.5 … 0.5, port→starboard)
 *     tweaks = { [id]: value }
 *   returns true if the voxel should be part of the solid hull
 */

export { galleon }  from './galleon.js';
export { cutter }   from './cutter.js';
export { sloop }    from './sloop.js';
export { brig }     from './brig.js';
export { frigate }  from './frigate.js';
export { fluyt }    from './fluyt.js';

import { galleon } from './galleon.js';
import { cutter }  from './cutter.js';
import { sloop }   from './sloop.js';
import { brig }    from './brig.js';
import { frigate } from './frigate.js';
import { fluyt }   from './fluyt.js';

export const HULLS = [galleon, cutter, sloop, brig, frigate, fluyt];
