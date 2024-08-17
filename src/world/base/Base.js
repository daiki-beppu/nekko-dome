import * as THREE from 'three';
import { createBaseConfig } from './baseConfig';

export class Base {
  constructor(appCore) {
    this.appCore = appCore;
    this.scene = this.appCore.scene;

    this.config = createBaseConfig();

    this.setGeometry();
    this.setMaterial();
    this.setMesh();
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
    const { color } = this.config.material;
    this.material = new THREE.MeshStandardMaterial({
      color: color,
    });
  }
  setMesh() {
    const { position } = this.config.mesh;
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.set(position.x, position.y, position.z);
    this.scene.add(this.mesh);
  }
}
