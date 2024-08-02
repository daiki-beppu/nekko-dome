import * as THREE from 'three';
import { createBaseConfig } from './baseConfig';

export class Base {
  constructor(experience) {
    this.experience = experience;
    this.scene = this.experience;

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
    this.material = new THREE.MeshBasicMaterial({
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
