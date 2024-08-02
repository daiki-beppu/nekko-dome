import * as THREE from 'three';

const domeConfig = {
  geometry: { radius: 2.5, widthSegment: 32, heightSegment: 16 },
  material: { color: '#ffffff' },
  mesh: {
    position: { x: 0, y: 5, z: 0 },
    rotation: { x: 0, y: 0, z: 0 },
  },
};

export class Dome {
  constructor(experience) {
    this.experience = experience;
    this.scene = this.experience;

    this.setGeometry();
    this.setmaterial();
    this.setMesh();
  }
  setGeometry() {
    const { radius, widthSegment, heightSegment } = domeConfig.geometry;
    this.geometry = new THREE.SphereGeometry(
      radius,
      widthSegment,
      heightSegment,
    );
  }
  setmaterial() {
    const { color } = domeConfig.material;
    this.material = new THREE.MeshBasicMaterial({
      color: color,
    });
  }
  setMesh() {
    const { position } = domeConfig.mesh;
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.set(position.x, position.y, position.z);
    this.scene.add(this.mesh);
  }
}
