import * as THREE from 'three';
import { createDomeConfig } from './domeConfig';

export class Dome {
  constructor(appCore) {
    this.appCore = appCore;
    this.scene = this.appCore.scene;
    this.config = createDomeConfig();

    this.setGeometry();
    this.setmaterial();
    this.setMesh();
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
}
