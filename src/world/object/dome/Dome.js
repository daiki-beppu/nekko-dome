import * as THREE from 'three';
import { createDomeConfig } from './domeConfig';

export class Dome {
  constructor(appCore) {
    this.appCore = appCore;
    this.scene = this.appCore.scene;
    this.debug = this.appCore.debug;
    this.config = createDomeConfig();

    this.setGeometry();
    this.setmaterial();
    this.setMesh();
    this.setDebugUI();
  }
  setGeometry() {
    const { radius, widthSegment, heightSegment } = this.config.geometry;
    this.geometry = new THREE.SphereGeometry(
      radius,
      widthSegment,
      heightSegment,
    );
  }
  setmaterial() {
    this.material = this.config.material;
  }
  setMesh() {
    const { position } = this.config.mesh;
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.set(position.x, position.y, position.z);
    this.scene.add(this.mesh);
  }
  setDebugUI() {
    if (this.debug.active) {
      this.folder = this.debug.ui.addFolder('dome');

      this.folder
        .add(this.config.mesh, 'scale')
        .min(1)
        .max(10)
        .step(0.01)
        .name('scale')
        .onChange(() => {
          this.mesh.scale.setScalar(this.config.mesh.scale);
        });

      const debugConfig = {
        props: [
          'opacity',
          'transmission',
          'roughness',
          'metalness',
          'clearcoat',
          'clearcoatRoughness',
          'ior',
          'reflectivity',
        ],
        value: { min: 0, max: 3, step: 0.001 },
      };

      const { min, max, step } = debugConfig.value;
      debugConfig.props.map((prop) => {
        this.folder.add(this.material, prop)
        .min(min)
        .max(max)
        .step(step)
        .name(`${prop}`);
      });
    }
  }
}
