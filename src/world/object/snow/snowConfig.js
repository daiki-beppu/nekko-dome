import * as THREE from 'three';

export const createSnowConfig = () => {
  return {
    particles: {
      count: 5000,
      vertices: 3,
      offset: 0.05,
    },
    material: new THREE.PointsMaterial({
      color: '#ffffff',
      size: 0.2,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.8,
      vertexColors: false,
      depthTest: false,
      depthWrite: false,
    }),
  };
};
