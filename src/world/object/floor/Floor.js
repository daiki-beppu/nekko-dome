import * as THREE from 'three';
import { createFloorConfig } from './floorConfig';

export class Floor {
  constructor(appCore) {
    this.appCore = appCore;
    this.scene = this.appCore.scene;
    this.config = createFloorConfig();

    this.setGeometry();
    this.setmaterial();
    this.setMesh();
  }

  setGeometry() {
    const { width, height } = this.config.geometry;
    this.geometry = new THREE.PlaneGeometry(width, height);
  }

  setmaterial() {
    this.material = this.config.material;
  }

  setMesh() {
    const { rotation, position } = this.config.mesh;
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.set(position.x, position.y, position.z);
    this.mesh.rotation.set(rotation.x, rotation.y, rotation.z);
    this.mesh.receiveShadow = true;
    this.scene.add(this.mesh);
  }
}
