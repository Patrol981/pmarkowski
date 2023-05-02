import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

class Scene {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  loader = new OBJLoader();
  textureLoader = new THREE.TextureLoader();

  constructor(fov = 75) {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(fov, 700 / 700, 0.1, 100);
    this.camera.position.z = 5;

    this.renderer = THREE.WebGLRenderer.prototype;

    const light = new THREE.AmbientLight(0x404040);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);

    this.scene.add(light);
    this.scene.add(directionalLight);
  }

  public resize(x: number, y: number) {
    this.renderer.setSize(x, y);
    this.camera.aspect = x / y;
    this.camera.updateProjectionMatrix();
  }

  public createScene(canvas: HTMLCanvasElement) {
    this.renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvas, alpha: true });
    this.resize(0, 0);
  }

  public async loadModel(path: string, texturePath: string) {
    const texture = await this.textureLoader.loadAsync(texturePath);
    const model = await this.loader.loadAsync(path);

    model.traverse((child) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const m = <any>child;
      if (m.isMesh) {
        m.material.map = texture;
        m.geometry.computeVertexNormals();
      }
    })
    this.scene.add(model);
    return model;
  }

  public getCamera(): THREE.Camera {
    return this.camera;
  }

}

export { Scene };