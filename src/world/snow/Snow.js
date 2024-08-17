import * as THREE from 'three';
import { createDomeConfig } from '../dome/domeConfig';
import { createSnowConfig } from './snowConfig';

export class Snow {
  constructor(appCore) {
    this.appCore = appCore;
    this.scene = this.appCore.scene;
    this.resources = this.appCore.resources;
    this.domeConfig = createDomeConfig();
    this.snowConfig = createSnowConfig();

    this.setGeometry();
    this.setMaterial();
    this.setMesh();
  }
  setGeometry() {
    this.geometry = new THREE.BufferGeometry();
    const { count } = this.snowConfig.particles;
    const vertices = 3;
    const position = new Float32Array(count * vertices);

    for (let i = 0; i < count; i++) {
      const positionIndex = i * 3;
      const radius = this.domeConfig.geometry.radius * Math.random();
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      position[positionIndex] = radius * Math.sin(phi) * Math.cos(theta);
      position[positionIndex + 1] = radius * Math.sin(phi) * Math.sin(theta);
      position[positionIndex + 2] = radius * Math.cos(phi);
    }

    this.geometry.setAttribute(
      'position',
      new THREE.BufferAttribute(position, vertices),
    );
  }

  setMaterial() {
    const { color, size, opacity } = this.snowConfig.material;

    this.material = new THREE.PointsMaterial({
      color: color,
      size: size,
      sizeAttenuation: true,
      transparent: true,
      opacity: opacity,
      vertexColors: false,
      depthTest: false,
      depthWrite: false,
    });
  }
  setMesh() {
    this.mesh = new THREE.Points(this.geometry, this.material);

    this.mesh.position.copy(this.domeConfig.mesh.position);
    this.scene.add(this.mesh);
  }

  update() {}
}
