import * as THREE from 'three';

const floorConfig = {
  geometry: { width: 10, height: 10 },
  material: { color: 'ffffff' },
  mesh: {
    position: { x: 0.3 },
    rotation: { x: -Math.PI / 2 },
  },
};

export class Floor {
  constructor(experience) {
    this.experience = experience;
    this.scene = this.experience;

    this.setGeometry();
    this.setmaterial();
    this.setMesh();
  }

  setGeometry() {
    const { width, height } = floorConfig.geometry;
    this.geometry = new THREE.PlaneGeometry(width, height);
  }

  setmaterial() {
    const { color } = floorConfig.material;
    this.material = new THREE.MeshBasicMaterial({
      color: color,
    });
  }

  setMesh() {
    const { rotation, position } = floorConfig.mesh;
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.x = position.x;
    this.mesh.rotation.x = rotation.x;
    this.mesh.receiveShadow = true;
    this.scene.add(this.mesh);
  }
}
