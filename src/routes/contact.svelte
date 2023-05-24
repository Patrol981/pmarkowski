<script lang="ts">
	import { onMount } from 'svelte';
	import { MathUtils } from 'three';
	import { Scene } from '../lib/scene';
	import { base } from '$app/paths';

	let cnv: HTMLCanvasElement;
	let scene: Scene;

	let mailbox: THREE.Group;

	onMount(async () => {
		scene = new Scene();
		scene.createScene(cnv);
		mailbox = await scene.loadModel(`${base}/mail.obj`, `${base}/mail.png`);
		scene.resize(window.innerWidth / 2, window.innerHeight / 2);

		scene.camera.translateZ(-1);
		scene.camera.translateY(2.5);
		scene.camera.rotateX(MathUtils.degToRad(-20));

		animate();
	});

	function animate() {
		requestAnimationFrame(animate);
		scene.renderer.render(scene.scene, scene.camera);
		mailbox.rotation.y += 0.01;
		if (mailbox.rotation.y > 360) mailbox.rotation.y = 0;
	}
</script>

<div class="contact">
	<p class="subtitle">Contact Me</p>
	<div class="content">
		<a href="mailto:patryk.markowski14@gmail.com">patryk.markowski14@gmail.com</a>
		<canvas bind:this={cnv} />
	</div>
</div>

<style>
	.title {
		font-size: 5em;
		margin-bottom: 0;
		padding-bottom: 0;
	}

	.subtitle {
		font-size: 3em;
		margin-top: 0;
		padding-top: 0;
	}

	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	a {
		text-decoration: none;
		color: #ffffff;
		transition: 0.1s all ease-in;
	}

	a:hover {
		color: tomato;
	}

	.content form {
	}
</style>
