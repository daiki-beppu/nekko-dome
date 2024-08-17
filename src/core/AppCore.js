import * as THREE from 'three';
import { Camera } from '../rendering/Camera';
import { Renderer } from '../rendering/Renderer';
import { Resources } from '../resources/Resources';
import { assets } from '../resources/assets';
import { Debug } from '../utils/Debug';
import { Sizes } from '../utils/Sizes';
import { Time } from '../utils/Time';
import { World } from '../world/World';

export class AppCore {
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
