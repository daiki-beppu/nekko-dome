import * as THREE from 'three';
import { ambientLightConfig } from './ambientLightConfig';

export class AmbientLight {
  constructor(experience) {
    this.experience = experience;
    this.scene = this.experience;
    this.config = ambientLightConfig();

    this.setAmbientLight();
  }
  setAmbientLight() {
    const { color, intensity } = this.config;
    const ambientLight = new THREE.AmbientLight(color, intensity);
    this.scene.add(ambientLight);
  }
}
