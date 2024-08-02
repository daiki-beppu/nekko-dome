import { Base } from './Base/Base';
import { Dome } from './Dome/Dome';
import { Floor } from './Floor/Floor';

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
    this.base = new Base(this.scene);
    this.dome = new Dome(this.scene);
  }
  update() {}
}
