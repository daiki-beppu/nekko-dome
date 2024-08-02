import * as THREE from 'three';

const baseConfig = {
  geometry: { radiusTop: 2, radiusBottom: 5, height: 2, radialSegments: 4 },
  material: { color: 'brown' },
  mesh: {
    position: {
      x: 0,
      get y() {
        return baseConfig.geometry.height / 2;
      },
      z: 0,
    },
    rotation: { x: 0, y: 0, z: 0 },
  },
};

export class Base {
  constructor(experience) {
    this.experience = experience;
    this.scene = this.experience;

    this.setGeometry();
    this.setmaterial();
    this.setMesh();
  }
  setGeometry() {
    const { radiusTop, radiusBottom, height, radialSegments } =
      baseConfig.geometry;
    this.geometry = new THREE.CylinderGeometry(
      radiusTop,
      radiusBottom,
      height,
      radialSegments,
    );
  }
  setmaterial() {
    const { color } = baseConfig.material;
    this.material = new THREE.MeshBasicMaterial({
      color: color,
    });
  }
  setMesh() {
    const { position } = baseConfig.mesh;
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.set(position.x, position.y, position.z);
    this.scene.add(this.mesh);
  }
}
