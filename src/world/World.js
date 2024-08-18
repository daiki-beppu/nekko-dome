import { Environment } from './environment/Enviroment';
import { Base } from './object/base/Base';
import { Dome } from './object/dome/Dome';
import { Floor } from './object/floor/Floor';
import { Snow } from './object/snow/Snow';

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
  }
  update() {}
}
