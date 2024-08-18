import * as THREE from 'three';

export const createDomeConfig = () => {
  return {
    geometry: { radius: 5, widthSegment: 64, heightSegment: 32 },
    material: new THREE.MeshPhysicalMaterial({
      opacity: 0.3,
      transmission: 1,
      roughness: 0,
      metalness: 0,
      clearcoat: 1,
      clearcoatRoughness: 0,
      ior: 1.5,
      reflectivity: 0.9,
      side: THREE.DoubleSide,
    }),
    mesh: {
      scale: 1,
      position: { x: 0, y: 6, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
    },
  };
};
