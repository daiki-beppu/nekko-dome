import { Floor } from './Floor';

export class World {
  constructor(experience) {
    this.experience = experience;
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.debug = this.experience.debug;

    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder('test');
    }

    this.floor = new Floor(this.scene);
  }
  update() {}
}
