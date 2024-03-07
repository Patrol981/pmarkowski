import * as THREE from 'three';
import type { Scene } from './scene';
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { GammaCorrectionShader } from "three/examples/jsm/shaders/GammaCorrectionShader";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import { RGBShiftShader } from "three/examples/jsm/shaders/RGBShiftShader";
import { getHeight, getWidth } from './utils';
import { base } from '$app/paths';


const TEXTURE_PATH = `${base}/grid.png`;
const DISPLACEMENT_PATH = `${base}/displacement.png`;

class Vaporwave {
  scene: Scene;
  plane: THREE.Mesh;
  plane2: THREE.Mesh;
  plane3: THREE.Mesh;
  fog: THREE.Fog;
  effectComposer: EffectComposer;
  isReady: boolean;

  constructor(scene: Scene) {
    this.scene = scene;
    this.plane = THREE.Mesh.prototype;
    this.plane2 = THREE.Mesh.prototype;
    this.plane3 = THREE.Mesh.prototype;
    this.fog = THREE.Fog.prototype;
    this.effectComposer = EffectComposer.prototype;
    this.isReady = false;
  }

  async init(): Promise<void> {
    const geometry = new THREE.PlaneGeometry(1, 2, 24, 24);
    const material = new THREE.MeshStandardMaterial({
      // Uncomment the following if you wish to visualize the wireframe of our mesh
      // wireframe: true,
      // color: 0xffffff
      map: await this.loadTexture(),
      displacementMap: await this.loadDisplacement(),
      color: new THREE.Color("rgb(255,163,172)")
    });

    this.plane = new THREE.Mesh(geometry, material);
    this.plane.rotation.x = -Math.PI * 0.5;
    this.plane.position.y = 0.0;
    this.plane.position.z = 0.0;
    this.plane.scale.x *= 2;
    this.scene.scene.add(this.plane);

    this.plane2 = new THREE.Mesh(geometry, material);
    this.plane2.rotation.x = -Math.PI * 0.5;
    this.plane2.position.y = 0.0;
    this.plane2.position.z = -1.85;
    this.plane2.scale.x *= 2;
    this.scene.scene.add(this.plane2);

    this.plane3 = new THREE.Mesh(geometry, material);
    this.plane3.rotation.x = -Math.PI * 0.5;
    this.plane3.position.y = 0.0;
    this.plane3.position.z = -2.7;
    this.plane3.scale.x *= 2;
    this.scene.scene.add(this.plane3);

    this.fog = new THREE.Fog("#ffa3ac", 1, 3);
    this.scene.scene.fog = this.fog;

    // this.scene.scene.background = new THREE.Color("rgb(253,155,202)");
    this.scene.scene.background = new THREE.Color("rgb(255,174,151)");
    this.addLight();
    this.addPostProcessing();

    this.isReady = true;
  }

  async loadTexture(): Promise<THREE.Texture> {
    const textureLoader = new THREE.TextureLoader();
    const gridTexture = textureLoader.loadAsync(TEXTURE_PATH);
    return gridTexture;
  }

  async loadDisplacement(): Promise<THREE.Texture> {
    const textureLoader = new THREE.TextureLoader();
    return textureLoader.loadAsync(DISPLACEMENT_PATH);
  }

  addLight(): void {
    const ambientLight = new THREE.AmbientLight("#ffba81", 10);
    this.scene.scene.add(ambientLight);
  }

  update(): void {
    const timeDelta = this.scene.clock.getElapsedTime();
    // this.plane.position.z *= timeDelta * 0.15;
    this.plane.position.z = (0.15 * timeDelta) % 2;
    this.plane2.position.z = ((0.15 * timeDelta) % 2) - 2;
    this.plane3.position.z = ((0.15 * timeDelta) % 2) - 4;
  }

  resize(x: number, y: number): void {
    this.effectComposer.setSize(x, y);
    this.effectComposer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  addPostProcessing(): void {
    this.effectComposer = new EffectComposer(this.scene.renderer);
    const size = new THREE.Vector2(getWidth(document, 'main-canvas'), getHeight(document, 'main-canvas'));
    this.effectComposer.setSize(size.x, size.y);
    this.effectComposer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const renderPass = new RenderPass(this.scene.scene, this.scene.camera);
    this.effectComposer.addPass(renderPass);

    const shiftPass = new ShaderPass(RGBShiftShader);
    shiftPass.uniforms["amount"].value = 0.15;

    this.effectComposer.addPass(shiftPass);

    const gammaCorrectionPass = new ShaderPass(GammaCorrectionShader);
    this.effectComposer.addPass(gammaCorrectionPass);
  }
}

export default Vaporwave;