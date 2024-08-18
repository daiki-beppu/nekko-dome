import * as THREE from 'three';
import { createFloorConfig } from './floorConfig';

export class Floor {
  constructor(appCore) {
    this.appCore = appCore;
    this.scene = this.appCore.scene;
    this.debug = this.appCore.debug;
    this.config = createFloorConfig();

    this.setGeometry();
    this.setmaterial();
    this.setMesh();
    this.setDebug();
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

  setDebug() {
    if (this.debug.active) {
      this.folder = this.debug.ui.addFolder('floor');

      this.folder
        .add(this.config.mesh, 'scale')
        .min(1)
        .max(10)
        .step(0.01)
        .name('scale')
        .onChange(() => {
          this.mesh.scale.setScalar(this.config.mesh.scale);
        });
    }
  }
}
