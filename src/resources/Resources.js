import * as THREE from 'three';
import {
  FontLoader,
  GLTFLoader,
  RGBELoader,
} from 'three/examples/jsm/Addons.js';
import { EventEmitter } from '../utils/EventEmitter';

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
      rgbeLoader: new RGBELoader(),
    };
  }
  startLoading() {
    for (const asset of this.assets) {
      if (asset.type === 'gltfModel') {
        this.loaders.gltfLoader.load(asset.path, (file) => {
          this.assetLoaded(asset, file);
        });
      } else if (asset.type === 'texture') {
        this.loaders.textureLoader.load(asset.path, (file) => {
          this.assetLoaded(asset, file);
        });
      } else if (asset.type === 'cubeTexture') {
        this.loaders.cubeTextureLoader.load(asset.path, (file) => {
          this.assetLoaded(asset, file);
        });
      } else if (asset.type === 'font') {
        this.loaders.fontLoader.load(asset.path, (file) => {
          this.assetLoaded(asset, file);
        });
      } else if (asset.type === 'hdrTexture') {
        this.loaders.rgbeLoader.load(asset.path, (file) => {
          file.mapping = THREE.EquirectangularReflectionMapping;
          this.assetLoaded(asset, file);
        });
      }
    }
  }
  assetLoaded(asset, file) {
    this.items[asset.name] = file;
    this.loaded += 1;
    console.log(`Asset loaded: ${asset.name} (${this.loaded}/${this.toLoad})`);

    if (this.loaded === this.toLoad) {
      console.log('All assets loaded');
      this.trigger('ready');
    }
  }
}
