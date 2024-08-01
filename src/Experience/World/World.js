import * as THREE from 'three';

export class World {
	constructor(experience) {
		this.experinece = experience;
		this.scene = this.experinece.scene;
		this.resources = this.experinece.resources;
		this.debug = this.experinece.debug;

		if (this.debug.active) {
			this.debugFolder = this.debug.ui.addFolder('test');
		}

		// テストメッシュ
		const testMesh = new THREE.Mesh(
			new THREE.BoxGeometry(3, 3, 3),
			new THREE.MeshBasicMaterial({
				color: '#FFA758',
				wireframe: true,
			}),
		);
		if (this.debug.active) {
		}

		this.scene.add(testMesh);
	}
	update() {}
}
