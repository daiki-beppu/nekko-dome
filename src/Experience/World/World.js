import { Base } from './Base/Base';
import { Dome } from './Dome/Dome';
import { Floor } from './Floor/Floor';
import { AmbientLight } from './Light/AmbientLight/AmbientLight';
import { Snow } from './Snow/Snow.js';

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
    this.ambientLight = new AmbientLight(this.scene);
    this.snow = new Snow(this.experience);
  }
  update() {
    if (this.snow) {
      this.snow.update();
    }
  }
}
