import * as THREE from 'three';
import { FontLoader, GLTFLoader } from 'three/examples/jsm/Addons.js';
import { EventEmitter } from './EventEmitter';

export class Resources extends EventEmitter {
  constructor(assets) {
    super();

    this.assets = assets;

    this.items = {};
    this.toLoad = this.assets.length;
    this.loaded = 0;

    this.setLoaders();
    this.startLoading();
  }

  setLoaders() {
    this.loaders = {
      gltfLoader: new GLTFLoader(),
      textureLoader: new THREE.TextureLoader(),
      cubeTextureLoader: new THREE.CubeTextureLoader(),
      fontLoader: new FontLoader(),
    };
  }
  startLoading() {
    for (const source of this.assets) {
      if (source.type === 'gltfModel') {
        this.loaders.gltfLoader.load(source.path, (file) => {
          this.sourceLoaded(source, file);
        });
      } else if (source.type === 'texture') {
        this.loaders.textureLoader.load(source.path, (file) => {
          this.sourceLoaded(source, file);
        });
      } else if (source.type === 'cubeTexture') {
        this.loaders.cubeTextureLoader.load(source.path, (file) => {
          this.sourceLoaded(source, file);
        });
      } else if (source.type === 'font') {
        this.loaders.fontLoader.load(source.path, (file) => {
          this.sourceLoaded(source, file);
        });
      }
    }
  }
  sourceLoaded(source, file) {
    this.items[source.name] = file;
    this.loaded += 1;
    if (this.loaded === this.toLoad) {
      this.trigger('ready');
    }
  }
}
