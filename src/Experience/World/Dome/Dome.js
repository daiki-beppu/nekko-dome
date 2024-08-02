import * as THREE from 'three';
import { createDomeConfig } from './domeConfig';

export class Dome {
  constructor(experience) {
    this.experience = experience;
    this.scene = this.experience;
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
    const {
      opacity,
      transmission,
      clearcoat,
      clearcoatRoughness,
      ior,
      reflectivity,
      side,
    } = this.config.material;

    this.material = new THREE.MeshPhysicalMaterial({
      transparent: true,
      opacity: opacity,
      transmission: transmission,
      clearcoat: clearcoat,
      clearcoatRoughness: clearcoatRoughness,
      ior: ior,
      reflectivity: reflectivity,
      side: side,
    });
  }
  setMesh() {
    const { position } = this.config.mesh;
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.set(position.x, position.y, position.z);
    this.scene.add(this.mesh);
  }
}
