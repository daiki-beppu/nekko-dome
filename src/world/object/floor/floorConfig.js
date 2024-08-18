import * as THREE from 'three';

export const createFloorConfig = () => {
  return {
    geometry: { width: 20, height: 20 },
    material: new THREE.MeshBasicMaterial({ color: '#ffffff' }),
    mesh: {
      scale: 1,
      position: { x: 0, y: 0, z: 0 },
      rotation: { x: -Math.PI / 2, y: 0, z: 0 },
    },
  };
};
