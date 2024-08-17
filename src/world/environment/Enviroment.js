import { EnvMap } from './envMap/EnvMap';

export class Environment {
  constructor(appCore) {
    this.appCore = appCore;
    this.scene = this.appCore.scene;
    this.resources = this.appCore.resources;
    this.debug = this.appCore.debug;

    this.setEnvMap();
  }
  setEnvMap() {
    this.environmentMap = new EnvMap(this.scene, this.resources);
  }
}
