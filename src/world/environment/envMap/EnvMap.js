import * as THREE from 'three';

export class EnvMap {
  constructor(scene, resources) {
    this.scene = scene;
    this.resources = resources;

    this.environmentMap = {};
    this.environmentMap.intensity = 0.4;
    this.environmentMap.texture = this.resources.items.envMap;

    this.setup();
  }
  setup() {
    this.scene.environment = this.environmentMap.texture;
    this.updateMaterialsEnvMap();
  }
  updateMaterialsEnvMap() {
    this.scene.traverse((child) => {
      if (
        child instanceof THREE.Mesh &&
        child.material instanceof THREE.MeshStandardMaterial
      ) {
        child.material.envMapIntensity = this.environmentMap.intensity;
        child.material.needsUpdate = true;
      }
    });
  }
  setIntensity(intensity) {
    this.environmentMap.intensity = intensity;
    this.updateMaterialsEnvMap();
  }
}
