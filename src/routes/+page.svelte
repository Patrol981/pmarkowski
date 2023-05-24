<script lang="ts">
	import { onMount } from 'svelte';
	import { Clock, Euler, MathUtils, Quaternion, Vector3 } from 'three';
	import type { Scene } from '../lib/scene';
	import Contact from './contact.svelte';
	import { base } from '$app/paths';

	let cnv: HTMLCanvasElement;
	let scene: Scene;
</script>

<div class="content">
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

	<div class="skills">
		<p class="subtitle">Frameworks I use</p>
		<div class="skillsbox">
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
				<img src="{base}/vuelogo.png" alt="Vue.js" />
			</div>
			<div class="skill selectable">
				<img src="{base}/nuxtlogo.png" alt="Nuxt.js" />
			</div>
			<div class="skill selectable">
				<img src="{base}/reactlogo.png" alt="React.js" />
			</div>
		</div>
	</div>

	<div class="skills">
		<p class="subtitle">Programmer Traits</p>
		<div class="skillsbox">
			<div class="skill">
				<p>Agile</p>
			</div>
			<div class="skill">
				<p>Scrum</p>
			</div>
			<div class="skill">
				<p>Git</p>
			</div>
			<div class="skill">
				<p>Working in a team</p>
			</div>
			<div class="skill">
				<p>AHA (Avoid hasty abstractions)</p>
			</div>
		</div>
	</div>
	<div class="magnum-opus">
		<p class="subtitle">Featured projects</p>
		<div class="project selectable">
			<a href="{base}/dwarf-engine">
				<img src="{base}/dwarflogo.png" alt="Dwarf Engine" />
				<p>Dwarf Engine</p>
			</a>
		</div>
	</div>
	<Contact />
</div>
<canvas bind:this={cnv} />

<style>
	canvas {
		margin: 0;
		padding: 0;
		position: absolute;
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

	.skillsbox .skill {
		margin-left: 2em;
		margin-right: 2em;
	}

	.skillsbox .skill img {
		height: 5em;
		max-height: 5em;
	}

	.content {
		min-height: 93vh;
		width: 100%;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		background-color: rgba(28, 28, 33, 0.65);
	}

	.content div {
		margin-bottom: 5em;
	}

	.content #me {
		text-align: left;
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
		}

		.content .title {
			font-size: 2.5rem;
		}

		.content .subtitle {
			font-size: 1.5rem;
		}

		.skillsbox {
			flex-direction: column;
			gap: 0.25rem;
		}

		.skillsbox .skill {
			margin: 0;
		}
	}
</style>
