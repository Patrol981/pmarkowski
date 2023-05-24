<script lang="ts">
	import { base } from '$app/paths';

	const date = new Date();
</script>

<nav>
	<div>
		<span><a href="{base}/">Home</a></span>
		<span><a href="{base}/about">About</a></span>
		<span><a href="{base}/blog">My Blog</a></span>
	</div>
</nav>

<slot />

<footer>
	<div class="holder">
		<p>Copyright &copy; Patryk Markowski {date.getFullYear()}</p>
		<div class="icons">
			<a href="https://github.com/Patrol981">
				<img src="{base}/github.svg" alt="Github" />
			</a>
			<a href="https://www.linkedin.com/in/patryk-markowski-366b541a1/">
				<img src="{base}/linkedin.svg" alt="LinkedIn" />
			</a>
		</div>
	</div>
</footer>

<style>
	nav {
		background-color: #1c1c21;
		color: #ffffff;
		margin: 0;
		padding: 0;

		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 7vh;

		z-index: 5;
	}

	nav div {
		width: 100%;
		height: 100%;

		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	nav div span {
		margin-left: 2em;
		margin-right: 2em;
	}

	nav a {
		color: #ffffff;
		text-decoration: none;
		transition: 0.1s all ease-in;
	}

	nav a:hover {
		color: #ff6347;
	}

	/*     */

	footer {
		width: 100%;
	}

	footer .holder {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr;

		justify-content: center;
		align-items: center;
	}

	footer .holder .icons img {
		max-height: 2em;
		filter: brightness(0) saturate(100%) invert(100%);
	}

	footer .holder .icons img:hover {
		filter: invert(61%) sepia(36%) saturate(6613%) hue-rotate(331deg) brightness(103%)
			contrast(108%);
	}

	@media only screen and (max-width: 600px) {
		footer .holder {
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 1fr;
		}
	}
</style>
