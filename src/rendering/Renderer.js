import * as THREE from 'three';

export class Renderer {
  constructor(appCore) {
    this.appCore = appCore;
    this.canvas = this.appCore.canvas;
    this.sizes = this.appCore.sizes;
    this.scene = this.appCore.scene;
    this.camera = this.appCore.camera;

    this.setInstance();
  }

  setInstance() {
    this.instance = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
    });
    this.instance.shadowMap.enabled = true;
    this.instance.shadowMap.type = THREE.PCFSoftShadowMap;
    this.instance.setSize(this.sizes.width, this.sizes.height);
    this.instance.setPixelRatio(this.sizes.devicePixelRatio);
  }

  resize() {
    this.instance.setSize(this.sizes.width, this.sizes.height);
    this.instance.setPixelRatio(this.sizes.devicePixelRatio);
  }

  update() {
    this.instance.render(this.scene, this.camera.instance);
  }
}
