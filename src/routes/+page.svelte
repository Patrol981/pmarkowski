<script lang="ts">
	import { onMount } from 'svelte';
	import { Clock, Euler, MathUtils, Quaternion, Vector3, Vector2 } from 'three';
	import { Scene } from '../lib/scene';
	import Contact from './contact.svelte';
	import { base } from '$app/paths';
	import { getHeight, getWidth } from '$lib/utils';
	import * as THREE from 'three';
	import { SimplexNoise } from 'three/examples/jsm/math/SimplexNoise';
	import Vaporwave from '$lib/vaporwave';
	import Prism from 'prismjs';
	import * as test from 'prismjs/components';
	import programmerTraits from '$lib/traitsString';

	let cnv: HTMLCanvasElement;
	let scene: Scene;
	let vaporwave: Vaporwave;
	let currentRGBA = 'rgba(28, 28, 33, 1)';
	let alpha = 1.0;

	onMount(async () => {
		scene = new Scene(75, 3);
		scene.createScene(cnv);
		vaporwave = new Vaporwave(scene);

		await vaporwave.init();

		const fadeOut = () => {
			const interval = setInterval(() => {
				alpha -= 0.01;
				currentRGBA = `rgba(28, 28, 33, ${alpha})`;
				if (alpha <= 0.6) {
					clearInterval(interval);
					alpha = 0.6;
				}
			}, 20);
		};

		fadeOut();

		// currentRGBA = 'rgba(28, 28, 33, 0.6)';

		scene.camera.position.setZ(0.7);
		scene.camera.position.setY(0.2);

		updateSize();

		window.addEventListener('resize', updateSize, false);

		animate();
	});

	function updateSize() {
		const size = new Vector2(getWidth(document, 'main-canvas'), getHeight(document, 'main-canvas'));
		scene.resize(size.x, size.y);
		vaporwave.resize(size.x, size.y);
	}

	function animate() {
		// controls.update();
		requestAnimationFrame(animate);
		vaporwave.update();
		scene.renderer.render(scene.scene, scene.camera);
	}
</script>

<div class="content" style:background-color={currentRGBA}>
	<div id="main-canvas">
		<canvas bind:this={cnv} />
	</div>
	<div id="me">
		<p class="title">Hi, I'm <span class="colored">Patrick</span></p>
		<p class="subtitle">I develop games, game engines <br /> and web applications</p>
	</div>
	<div class="skills">
		<p class="subtitle">Languages I use</p>
		<div class="skillsbox">
			<div class="skill selectable">
				<img src="{base}/csharplogo.png" alt="C#" />
			</div>
			<div class="skill selectable">
				<img src="{base}/clogo.png" alt="C" />
			</div>
			<div class="skill selectable">
				<img src="{base}/typescriptlogo.svg" alt="TypeScript" />
			</div>
		</div>
	</div>

	<div class="grid2 separator">
		<div class="skills">
			<div class="code-container">
				<section class="file-bar">
					<div />
					<div />
					<div />
				</section>
				<div class="code">
					{@html Prism.highlight(programmerTraits, Prism.languages['clike'], 'clike')}
				</div>
			</div>

			<div class="code-comment">
				{@html Prism.highlight('// Some serious stuff up here', Prism.languages['js'], 'js')}
			</div>
		</div>

		<div class="skills">
			<p class="subtitle">Frameworks I use</p>
			<div class="skillsgrid">
				<div class="skill selectable">
					<img src="{base}/dotnetlogo.png" alt=".NET" />
				</div>
				<div class="skill selectable">
					<img src="{base}/unitylogo.png" alt="Unity3D" />
				</div>
				<div class="skill selectable white-filter">
					<img src="{base}/denologo.png" alt="Deno" />
				</div>
				<div class="skill selectable">
					<img src="{base}/nodejslogo.png" alt="Node.js" />
				</div>
				<div class="skill selectable">
					<img src="{base}/sveltelogo.png" alt="Svelte" />
				</div>
				<div class="skill selectable">
					<img src="{base}/fresh.svg" alt="Fresh" />
				</div>
				<div class="skill selectable">
					<img src="{base}/reactlogo.png" alt="React.js" />
				</div>
			</div>
		</div>
	</div>

	<div class="skills separator">
		<p class="subtitle">Featured projects</p>
		<div class="skillsbox">
			<div class="skill selectable">
				<a href="{base}/dwarf-engine">
					<img src="{base}/dwarflogo.png" alt="Dwarf Engine" />
					<p>Dwarf Engine</p>
				</a>
			</div>
			<div class="skill selectable">
				<a href="https://github.com/Patrol981/sql-designer">
					<img src="{base}/csharplogo.png" alt="Sql Designer" />
					<p>SQL Designer</p>
				</a>
			</div>
			<div class="skill selectable">
				<a href="https://github.com/Patrol981/Dwarf-FontGenerator">
					<img src="{base}/clogo.png" alt="Dwarf Font Generator" />
					<p>Dwarf Font Generator</p>
				</a>
			</div>
			<div class="skill selectable">
				<a href="https://github.com/Patrol981/image-processing">
					<img src="{base}/camera.jpg" alt="ImageProcessing" />
					<p>Image Processing</p>
				</a>
			</div>
			<div class="skill selectable">
				<a href="https://github.com/Patrol981/SubjectGuide">
					<img src="{base}/unitylogo.png" alt="SubjectGuide" />
					<p>Subject Guide</p>
				</a>
			</div>
		</div>
	</div>

	<Contact />
</div>

<style>
	#main-canvas {
		position: fixed;
		width: 100vw;
		height: 100vh;

		margin: 0;
		padding: 0;
		left: 0;
		top: 7vh;
		z-index: -1;
	}

	.skillsbox {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 3vw;
		justify-content: center;
		position: relative;
		width: 100%;
	}

	.skillsgrid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: auto;
		gap: 0.1vw;
		justify-content: center;
		position: relative;
		width: 100%;
	}

	.skillsbox .skill {
		margin-left: 2em;
		margin-right: 2em;
	}

	.skill img {
		height: 5em;
		max-height: 5em;
	}

	.skillsgrid .skill img {
		height: 4.5em;
		max-height: 4.5em;
	}

	.content {
		min-height: 93vh;
		width: 100%;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		transition: all 0.5 ease-in-out;

		/*
		background-color: rgba(28, 28, 33, 0.6);
		*/
	}

	.content div {
		margin-bottom: 5em;
	}

	.content #me {
		text-align: left;
	}

	.grid2 {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-evenly;
		flex-wrap: wrap;
		width: 100%;
	}

	.code-container {
		margin: 0;
		padding: 0;

		display: flexbox;
	}

	.code {
		white-space: pre-wrap;
		text-align: justify;
		background-color: #202020;
		width: fit-content;
		padding-left: 2rem;
		padding-right: 2rem;
		padding-top: 0rem;
		padding-bottom: 1.5rem;

		border-radius: 20px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
		border: 3px solid rgb(80, 80, 80);
		border-top: none;

		margin-top: 0;
	}

	.code-comment {
	}

	.file-bar {
		height: 4vh;
		background-color: rgb(28, 28, 30);

		display: flex;
		flex-direction: row;
		justify-content: flex-start;

		border: 3px solid rgb(80, 80, 80);
		border-bottom: 1px solid grey;
		border-radius: 20px;
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}

	.file-bar div {
		min-width: 1rem;
		min-height: 1rem;
		border-radius: 24px;
		margin-top: 0.5em;
		margin-left: 0.5em;
	}

	.file-bar div:hover {
		filter: brightness(75%);
	}

	.file-bar div:nth-of-type(1) {
		background-color: rgb(255, 105, 97);
		margin-left: 0.5em;
	}

	.file-bar div:nth-of-type(2) {
		background-color: rgb(255, 212, 64);
	}

	.file-bar div:nth-of-type(3) {
		background-color: rgb(255, 179, 64);
	}

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

	a {
		text-decoration: none;
		color: #ffffff;
	}

	.colored {
		color: tomato;
	}

	.selectable a {
		transition: 0.15s all ease-in;
	}

	.selectable a:hover {
		color: tomato;
	}

	.white-filter {
		filter: brightness(0) saturate(100%) invert(100%);
	}

	/* */

	@media only screen and (max-width: 600px) {
		.content {
		}

		.content #me {
			text-align: center;
			margin-left: 1em;
			margin-right: 1em;
		}

		.content .title {
			font-size: 2.5rem;
		}

		.content .subtitle {
			font-size: 1.5rem;
		}

		.skillsbox {
			flex-direction: column;
		}

		.skillsbox .skill {
			margin: 0;
			margin-bottom: 2.5rem;
			margin-top: 2.5rem;
		}

		.skillsgrid {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			gap: 2em;
		}

		.code {
			font-size: small;
		}
	}
</style>
