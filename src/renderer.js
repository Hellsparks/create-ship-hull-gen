/**
 * 3D renderer using Three.js.
 * Renders voxel blocks as instanced cubes with orbit controls.
 */

import * as THREE from 'three';

// ── Block colour map ─────────────────────────────────────────────────────────
const BLOCK_COLORS = {
  // Planks
  'minecraft:oak_planks':      0x9a7140,
  'minecraft:dark_oak_planks': 0x3d2a13,
  'minecraft:spruce_planks':   0x7a5c30,
  'minecraft:birch_planks':    0xd6c89a,
  'minecraft:acacia_planks':   0xb5622b,
  'minecraft:mangrove_planks': 0x7a2c1e,
  'minecraft:jungle_planks':   0xb5752d,
  'minecraft:cherry_planks':   0xe4b4a2,
  'minecraft:bamboo_planks':   0xc4b840,
  'minecraft:crimson_planks':  0x6c2033,
  'minecraft:warped_planks':   0x2b6a5e,
  // Logs (all-bark)
  'minecraft:oak_wood':             0x6b5839,
  'minecraft:dark_oak_wood':        0x3a2a14,
  'minecraft:spruce_wood':          0x3b2912,
  'minecraft:birch_wood':           0xc8bca0,
  'minecraft:acacia_wood':          0x6a6a6a,
  'minecraft:mangrove_wood':        0x5a3a24,
  'minecraft:jungle_wood':          0x544a2e,
  'minecraft:cherry_wood':          0x3b2028,
  'minecraft:bamboo_block':         0x6a7a28,
  'minecraft:crimson_hyphae':       0x5c1626,
  'minecraft:warped_hyphae':        0x2a4a46,
  // Stripped logs (all-bark)
  'minecraft:stripped_oak_wood':      0xaf8f55,
  'minecraft:stripped_dark_oak_wood': 0x4a3518,
  'minecraft:stripped_spruce_wood':   0x6a5028,
  'minecraft:stripped_birch_wood':    0xc5a96a,
  'minecraft:stripped_acacia_wood':   0xb05a30,
  'minecraft:stripped_mangrove_wood': 0x6a2e1a,
  'minecraft:stripped_jungle_wood':   0xa87840,
  'minecraft:stripped_cherry_wood':   0xd6a090,
  'minecraft:stripped_bamboo_block':  0xb8b040,
  'minecraft:stripped_crimson_hyphae':0x8a3a50,
  'minecraft:stripped_warped_hyphae': 0x3a8a7e,
  // Stone & metal
  'minecraft:stone_bricks':    0x7a7a7a,
  'minecraft:cobblestone':     0x888888,
  'minecraft:iron_block':      0xcfd5d5,
  'minecraft:gold_block':      0xf0c840,
  'minecraft:obsidian':        0x1a0a2a,
  'minecraft:glass':           0x9de4f5,
  // Create mod
  'create:andesite_casing':    0x8a8a7a,
};

function colorForBlock(blockId) {
  if (BLOCK_COLORS[blockId]) return BLOCK_COLORS[blockId];
  // Hash unknown IDs to a deterministic colour
  let h = 0;
  for (const c of blockId) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return ((h & 0xffffff) | 0x404040) & 0xffffff;
}

// ── Renderer class ────────────────────────────────────────────────────────────
export class ShipRenderer {
  /**
   * @param {HTMLCanvasElement} canvas
   */
  constructor(canvas) {
    this.canvas = canvas;
    this._mesh = null;
    this._animId = null;

    // Camera orbit state
    this._phi   = Math.PI / 5;    // vertical angle
    this._theta = -Math.PI / 4;   // horizontal angle
    this._dist  = 60;
    this._center = new THREE.Vector3(0, 0, 0);

    this._setupScene();
    this._setupLights();
    this._setupControls();
    this._startLoop();
  }

  _setupScene() {
    const w = this.canvas.clientWidth  || 800;
    const h = this.canvas.clientHeight || 600;

    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, alpha: false });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(w, h, false);
    this.renderer.setClearColor(0x0d0d12);
    this.renderer.shadowMap.enabled = true;

    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog(0x0d0d12, 120, 300);

    this.camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 1000);
    this._updateCamera();

    // Grid
    const grid = new THREE.GridHelper(200, 40, 0x222230, 0x1a1a28);
    this.scene.add(grid);
  }

  _setupLights() {
    this.scene.add(new THREE.AmbientLight(0xffffff, 0.5));

    const key = new THREE.DirectionalLight(0xfff4e0, 1.2);
    key.position.set(5, 12, 7);
    key.castShadow = true;
    this.scene.add(key);

    const fill = new THREE.DirectionalLight(0x8899cc, 0.4);
    fill.position.set(-6, -2, -8);
    this.scene.add(fill);

    const rim = new THREE.DirectionalLight(0x446688, 0.3);
    rim.position.set(0, -8, 0);
    this.scene.add(rim);
  }

  _setupControls() {
    const canvas = this.canvas;
    let rotating = false;
    let panning  = false;
    let lastX = 0, lastY = 0;

    canvas.addEventListener('contextmenu', e => e.preventDefault());

    canvas.addEventListener('mousedown', e => {
      if (e.button === 1 || e.button === 2 || (e.button === 0 && e.shiftKey)) {
        panning = true;
        e.preventDefault();
      } else if (e.button === 0) {
        rotating = true;
      }
      lastX = e.clientX;
      lastY = e.clientY;
    });

    window.addEventListener('mouseup', () => { rotating = false; panning = false; });

    window.addEventListener('mousemove', e => {
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;
      if (rotating) {
        this._theta -= dx * 0.008;
        this._phi = Math.max(-Math.PI / 2 + 0.01, Math.min(Math.PI / 2 - 0.01, this._phi + dy * 0.006));
        this._updateCamera();
      } else if (panning) {
        this._pan(dx, dy);
      }
    });

    canvas.addEventListener('wheel', e => {
      e.preventDefault();
      this._dist = Math.max(8, Math.min(500, this._dist + e.deltaY * 0.08));
      this._updateCamera();
    }, { passive: false });

    // Touch: 1 finger = rotate, 2 fingers = pinch-zoom + pan
    let lastTouchDist = 0;
    let lastTouchCX = 0, lastTouchCY = 0;

    canvas.addEventListener('touchstart', e => {
      if (e.touches.length === 1) {
        rotating = true;
        lastX = e.touches[0].clientX;
        lastY = e.touches[0].clientY;
      }
      if (e.touches.length === 2) {
        rotating = false;
        lastTouchDist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY,
        );
        lastTouchCX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
        lastTouchCY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
      }
    }, { passive: true });

    canvas.addEventListener('touchmove', e => {
      e.preventDefault();
      if (e.touches.length === 1 && rotating) {
        const dx = e.touches[0].clientX - lastX;
        const dy = e.touches[0].clientY - lastY;
        this._theta -= dx * 0.01;
        this._phi = Math.max(-Math.PI / 2 + 0.01, Math.min(Math.PI / 2 - 0.01, this._phi + dy * 0.008));
        lastX = e.touches[0].clientX;
        lastY = e.touches[0].clientY;
        this._updateCamera();
      }
      if (e.touches.length === 2) {
        const d = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY,
        );
        const cx = (e.touches[0].clientX + e.touches[1].clientX) / 2;
        const cy = (e.touches[0].clientY + e.touches[1].clientY) / 2;

        this._dist = Math.max(8, Math.min(500, this._dist - (d - lastTouchDist) * 0.2));
        this._pan(cx - lastTouchCX, cy - lastTouchCY);

        lastTouchDist = d;
        lastTouchCX = cx;
        lastTouchCY = cy;
      }
    }, { passive: false });

    canvas.addEventListener('touchend', () => { rotating = false; });
  }

  _pan(dx, dy) {
    // Move _center in the camera's local XZ/XY plane so the scene follows the cursor.
    // right = camera's local X axis; up = camera's local Y axis (derived analytically).
    const panSpeed = this._dist * 0.0015;
    const rx =  Math.cos(this._theta);
    const rz = -Math.sin(this._theta);
    const ux = -Math.sin(this._phi) * Math.sin(this._theta);
    const uy =  Math.cos(this._phi);
    const uz = -Math.sin(this._phi) * Math.cos(this._theta);

    this._center.x += (-dx * rx + dy * ux) * panSpeed;
    this._center.y += (           dy * uy) * panSpeed;
    this._center.z += (-dx * rz + dy * uz) * panSpeed;
    this._updateCamera();
  }

  _updateCamera() {
    const x = this._dist * Math.cos(this._phi) * Math.sin(this._theta);
    const y = this._dist * Math.sin(this._phi);
    const z = this._dist * Math.cos(this._phi) * Math.cos(this._theta);
    this.camera.position.set(
      this._center.x + x,
      this._center.y + y,
      this._center.z + z,
    );
    this.camera.lookAt(this._center);
  }

  snapView(preset) {
    // preset: 0=front, 1=side, 2=top, 3=iso, 4=bottom
    switch (preset) {
      case 0: this._theta = 0;           this._phi = 0.08;              break;
      case 1: this._theta = Math.PI / 2; this._phi = 0.08;              break;
      case 2: this._theta = 0;           this._phi = Math.PI/2 - 0.01;  break;
      case 3: this._theta = -Math.PI/4;  this._phi = Math.PI/5;         break;
      case 4: this._theta = 0;           this._phi = -Math.PI/2 + 0.01; break;
    }
    this._updateCamera();
  }

  /**
   * Replace the rendered mesh with a new set of blocks.
   * @param {Array<{x,y,z,block}>} blocks
   * @param {number} sizeX
   * @param {number} sizeY
   * @param {number} sizeZ
   */
  updateBlocks(blocks, sizeX, sizeY, sizeZ) {
    // Remove old mesh group
    if (this._mesh) {
      this.scene.remove(this._mesh);
      this._mesh.traverse(o => {
        if (o.geometry) o.geometry.dispose();
        if (o.material) o.material.dispose();
      });
    }

    if (blocks.length === 0) { this._mesh = null; return; }

    // Centre the hull
    const cx = sizeX / 2;
    const cy = 0;            // keel sits on grid
    const cz = sizeZ / 2;

    // Group blocks by material
    const byMat = new Map();
    for (const b of blocks) {
      if (!byMat.has(b.block)) byMat.set(b.block, []);
      byMat.get(b.block).push(b);
    }

    const group = new THREE.Group();
    const geo = new THREE.BoxGeometry(1, 1, 1);

    for (const [blockId, bList] of byMat) {
      const color = colorForBlock(blockId);
      const isGlass = blockId.includes('glass');
      const isMetal = blockId.includes('iron') || blockId.includes('gold');

      const mat = new THREE.MeshStandardMaterial({
        color,
        roughness:    isGlass ? 0.05 : isMetal ? 0.2  : 0.82,
        metalness:    isMetal ? 0.7  : 0,
        transparent:  isGlass,
        opacity:      isGlass ? 0.45 : 1,
      });

      const mesh = new THREE.InstancedMesh(geo, mat, bList.length);
      mesh.castShadow    = true;
      mesh.receiveShadow = true;

      const m = new THREE.Matrix4();
      for (let i = 0; i < bList.length; i++) {
        const b = bList[i];
        m.setPosition(b.x - cx, b.y - cy, b.z - cz);
        mesh.setMatrixAt(i, m);
      }
      mesh.instanceMatrix.needsUpdate = true;
      group.add(mesh);
    }

    // Wireframe bounding box
    const boxGeo = new THREE.BoxGeometry(sizeX, sizeY, sizeZ);
    const edges  = new THREE.EdgesGeometry(boxGeo);
    const line   = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x334466, transparent: true, opacity: 0.25 }));
    line.position.set(0, sizeY / 2, 0);
    group.add(line);
    boxGeo.dispose();

    // Auto-fit camera only on the very first render
    if (!this._hasInitialView) {
      this._center.set(0, sizeY / 2, 0);
      this._dist = Math.max(sizeX, sizeY, sizeZ) * 2.0;
      this._hasInitialView = true;
    } else {
      // Keep orbit angles/distance; just re-centre vertically if draft changed
      this._center.set(0, sizeY / 2, 0);
    }
    this._updateCamera();

    this.scene.add(group);
    this._mesh = group;
  }

  _startLoop() {
    const animate = () => {
      this._animId = requestAnimationFrame(animate);
      this._handleResize();
      this.renderer.render(this.scene, this.camera);
    };
    animate();
  }

  _handleResize() {
    const canvas = this.renderer.domElement;
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    if (canvas.width !== w || canvas.height !== h) {
      this.renderer.setSize(w, h, false);
      this.camera.aspect = w / h;
      this.camera.updateProjectionMatrix();
    }
  }

  destroy() {
    if (this._animId) cancelAnimationFrame(this._animId);
    this.renderer.dispose();
  }
}
