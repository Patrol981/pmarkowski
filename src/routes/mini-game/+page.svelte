<script lang="ts">
	import { onMount } from 'svelte';
	import { Clock, Euler, MathUtils, Quaternion, Vector3 } from 'three';
	import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
	import * as CANNON from 'cannon';
	import { Scene } from '../../lib/scene';
	import { Player } from '$lib/player';
	import type { Keys } from '$lib/player';

	let cnv: HTMLCanvasElement;
	let scene: Scene;

	let map: THREE.Group;
	let player: Player;

	const clock = new Clock();
	const keysPressed: Keys = {
		W: false,
		A: false,
		S: false,
		D: false
	};

	onMount(async () => {
		await setupScene();
		await setupCamera();
		await setupMap();
		await setupCallbacks();

		animate();
	});

	async function setupCallbacks() {
		document.addEventListener('keydown', handleKeyDown);
		document.addEventListener('keyup', handleKeyUp);
	}

	async function setupMap() {
		map = await scene.loadModel('pacman_map.obj', 'pacman_map.png');
		map.scale.set(3, 3, 3);

		let mapMesh = <THREE.Mesh>(<any>map.children[0]);
		let mapGeo = mapMesh.geometry;
		console.log(mapGeo);

		//let vertices = [];
		//let faces = [];
		//let normals = [];
		//let shape = new CANNON.ConvexPolyhedron(vertices, faces, normals);

		player = new Player(scene);
		await player.loadPlayerModel();
		player.getPlayerModel().scale.set(0.05, 0.05, 0.05);
	}

	async function setupCamera() {
		scene.camera.translateY(21);
		scene.camera.translateX(-0.15);
		scene.camera.translateZ(-5);

		scene.camera.rotateX(MathUtils.degToRad(-90));
	}

	async function setupScene() {
		scene = new Scene(15);
		scene.createScene(cnv);
		scene.resize(getWidth(), getHeight());
	}

	function animate() {
		let delta = clock.getDelta();
		player.update(delta, keysPressed);

		scene.renderer.render(scene.scene, scene.camera);

		requestAnimationFrame(animate);
	}

	function handleKeyDown(event: KeyboardEvent) {
		(keysPressed as any)[event.key.toUpperCase()] = true;
	}

	function handleKeyUp(event: KeyboardEvent) {
		(keysPressed as any)[event.key.toUpperCase()] = false;
	}

	function getWidth(): number {
		return document.getElementById('canvas-placeholder')?.offsetWidth!;
	}

	function getHeight(): number {
		return document.getElementById('canvas-placeholder')?.offsetHeight!;
	}
</script>

<div>
	<div id="canvas-placeholder" />
	<canvas id="minigame-canvas" bind:this={cnv} />
</div>

<style>
	#canvas-placeholder {
		position: fixed;
		visibility: hidden;
		width: 97vw;
		height: 93vh;
	}
</style>
