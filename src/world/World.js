import { Base } from './base/Base';
import { Dome } from './dome/Dome';
import { Environment } from './environment/Enviroment';
import { Floor } from './floor/Floor';
import { Snow } from './snow/Snow';

export class World {
  constructor(appCore) {
    this.appCore = appCore;
    this.scene = this.appCore.scene;
    this.resources = this.appCore.resources;
    this.debug = this.appCore.debug;

    this.resources.on('ready', () => {
      this.environment = new Environment(this);
      this.base = new Base(this);
      this.floor = new Floor(this);
      this.dome = new Dome(this);
      this.snow = new Snow(this);
    });

    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder('test');
    }

    if (this.debug.active) {
    }
  }
  update() {}
}
