import * as THREE from 'three';
import { createBaseConfig } from './baseConfig';

export class Base {
  constructor(appCore) {
    this.appCore = appCore;
    this.scene = this.appCore.scene;
    this.debug = this.appCore.debug;

    this.config = createBaseConfig();

    this.setGeometry();
    this.setMaterial();
    this.setMesh();
    this.setDebugUI();
  }
  setGeometry() {
    const { radiusTop, radiusBottom, height, radialSegments } =
      this.config.geometry;
    this.geometry = new THREE.CylinderGeometry(
      radiusTop,
      radiusBottom,
      height,
      radialSegments,
    );
  }
  setMaterial() {
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
      this.folder = this.debug.ui.addFolder('base');

      this.folder
        .add(this.config.mesh, 'scale')
        .min(1)
        .max(10)
        .step(0.01)
        .onChange(() => {
          this.mesh.scale.setScalar(this.config.mesh.scale);
        });
    }
  }
}
