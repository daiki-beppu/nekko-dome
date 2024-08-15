import * as THREE from 'three';
import { createDomeConfig } from '../Dome/domeConfig';
import { createSnowConfig } from './snowConfig';

export class Snow {
  constructor(experience) {
    this.experience = experience;
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.domeConfig = createDomeConfig();
    this.snowConfig = createSnowConfig();

    this.setGeometry();
    this.setMaterial();
    this.setMesh();
  }
  setGeometry() {
    this.geometry = new THREE.BufferGeometry();
    const { count, minSize, maxSize } = this.snowConfig.particles;
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
    const { color, opacity } = this.snowConfig.material;
    const snowTexture = this.resources.items.snowTexture

    this.material = new THREE.PointsMaterial({
      map: snowTexture,
      size: 0.5,
      color: color,
      sizeAttenuation: true,
      vertexColors: false,
      depthTest: false,
      depthWrite: false,
      transparent: true,
      opacity: opacity,
    });
  }
  setMesh() {
    this.mesh = new THREE.Points(this.geometry, this.material);

    this.mesh.position.copy(this.domeConfig.mesh.position);
    this.scene.add(this.mesh);
  }

  update() {
    
  }
}
