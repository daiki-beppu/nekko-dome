import * as THREE from 'three';
import { Camera } from './Camera';
import { Renderer } from './Renderer';
import { Debug } from './Utils/Debug';
import { Resources } from './Utils/Resources';
import { Sizes } from './Utils/Sizes';
import { Time } from './Utils/Time';
import { World } from './World/World';
import { assets } from './assets';

export class Experience {
  constructor(canvas) {
    this.canvas = canvas;

    this.debug = new Debug();
    this.sizes = new Sizes();
    this.time = new Time();
    this.scene = new THREE.Scene();
    this.resources = new Resources(assets);
    this.camera = new Camera(this);
    this.renderer = new Renderer(this);
    this.world = new World(this);

    this.sizes.on('resize', () => {
      this.resize();
    });

    this.time.on('tick', () => {
      this.update();
    });
  }

  resize() {
    this.camera.resize();
    this.renderer.resize();
  }

  update() {
    this.camera.update();
    this.world.update();
    this.renderer.update();
  }
}
