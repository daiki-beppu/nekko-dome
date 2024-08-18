import { PerspectiveCamera } from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

export class Camera {
  constructor(appCore) {
    this.appCore = appCore;
    this.sizes = this.appCore.sizes;
    this.scene = this.appCore.scene;
    this.canvas = this.appCore.canvas;
    this.debug = this.appCore.debug;

    this.cameraConfig = {
      fov: 35,
      aspect: this.sizes.width / this.sizes.height,
      near: 0.1,
      far: 100,
      position: { x: 22, y: 18, z: -24 },
    };

    this.setInstance();
    this.setControls();
    this.setDebugUI();
  }
  setInstance() {
    const { fov, aspect, near, far, position } = this.cameraConfig;
    this.instance = new PerspectiveCamera(fov, aspect, near, far);
    this.instance.position.y = position.y;
    this.instance.position.x = position.x;
    this.instance.position.z = position.z;
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

  setDebugUI() {
    if (this.debug.active) {
      this.folder = this.debug.ui.addFolder('camera');
      const debugConfig = {
        positionAxes: ['x', 'y', 'z'],
        value: { min: -30, max: 30, step: 0.01 },
      };

      const { min, max, step } = debugConfig.value;
      debugConfig.positionAxes.map((axis) => {
        this.folder
          .add(this.instance.position, axis)
          .min(min)
          .max(max)
          .step(step)
          .name(`position${axis.toLocaleUpperCase()}`);
        // .listen();
      });
    }
  }
}
