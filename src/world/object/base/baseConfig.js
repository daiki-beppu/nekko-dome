import * as THREE from 'three';

export const createBaseConfig = () => {
  return {
    geometry: {
      radiusTop: 4,
      radiusBottom: 5.5,
      height: 2,
      radialSegments: 32,
    },
    material: new THREE.MeshBasicMaterial({ color: '#222222' }),
    mesh: {
      scale: 1,
      position: { x: 0, y: 1, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
    },
  };
};
