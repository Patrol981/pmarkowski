<script lang="ts">
	import { base } from '$app/paths';

	const myBirthDate = new Date('2000-12-14');
	const today = new Date();
	const offset = today.getTime() - myBirthDate.getTime();
	const offsetYears = Math.floor(offset / (1000 * 60 * 60 * 24 * 365.25));
</script>

<div class="block">
	<h1>About</h1>

	<p>
		Hi! My name is Patrick, I am {offsetYears} years old and I love programming (cliché, I know right?)
		I mainly focus on graphics programming (large part of it in C#, but I do some C/C++ aswell). Also
		I develop games in Unity3D and web applications in Svelte with SvelteKit or Vue with Nuxt meta-framework
	</p>
	<p>
		Besides programming I like to spend my time playing games, reading books, hanging up with
		friends you know, usual stuff
	</p>
	<p>Feel free to check my github page with some cool projects that I was able to make public :D</p>

	<img src="{base}/me_box2.jpg" alt="MyPhoto" />
</div>

<style>
	.block {
		justify-content: center;
		align-items: center;
		align-content: center;
		display: flex;
		flex-direction: column;
	}

	.block p {
		max-width: 1080px;
	}

	img {
		max-height: 30rem;
		border-radius: 50%;
		margin-top: 4em;
		margin-bottom: 30vh;
	}

	@media only screen and (max-width: 600px) {
		.block {
			margin-left: 1em;
			margin-right: 1em;
		}

		img {
			max-height: 20rem;
		}
	}
</style>
