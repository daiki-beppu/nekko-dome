import { PerspectiveCamera } from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

export class Camera {
  constructor(experience) {
    this.experinece = experience;
    this.sizes = this.experinece.sizes;
    this.scene = this.experinece.scene;
    this.canvas = this.experinece.canvas;

    this.cameraConfig = {
      fov: 35,
      aspect: this.sizes.width / this.sizes.height,
      near: 0.1,
      far: 100,
      position: { x: 4, y: 6, z: 10 },
    };

    this.setInstance();
    this.setControls();
  }
  setInstance() {
    const { fov, aspect, near, far, position } = this.cameraConfig;
    this.instance = new PerspectiveCamera(fov, aspect, near, far);
    this.instance.position.set(position.x, position.y, position.z);
    this.scene.add(this.instance);
  }
  setControls() {
    this.controls = new OrbitControls(this.instance, this.canvas);
    this.controls.enableDamping = true;
  }

  resize() {
    this.instance.aspect = this.cameraConfig.aspect;
    this.instance.updateMatrix();
  }

  update() {
    this.controls.update();
  }
}
