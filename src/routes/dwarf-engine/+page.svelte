<script lang="ts">
	import { base } from '$app/paths';
</script>

<div>
	<div class="block">
		<p>Dwarf Engine is my approach for game engines topic.</p>
		<p>
			The engine itself is not meant by any means for enterprice general use cases; it is strictly
			designed to match my expectations of an game engine so I can create some cool games with it :)
		</p>
	</div>

	<div class="block">
		<p class="title">Features</p>
		<div class="features">
			<div class="feature">
				<p>2D</p>
			</div>
			<div class="feature">
				<p>3D</p>
			</div>
			<div class="feature">
				<p>Preloaded assets</p>
			</div>
			<div class="feature">
				<p>Cross-platform</p>
			</div>
			<div class="feature">
				<p>Custom asset language</p>
			</div>
			<div class="feature">
				<p>Entity Component System</p>
			</div>
		</div>
	</div>

	<div class="block">
		<p class="title">Stack I used to create this engine</p>
		<div class="stack">
			<a href="https://dotnet.microsoft.com/en-us/download/dotnet/7.0">
				<img src="{base}/dotnetlogo.png" alt="DotNetLogo" />
				<p>.NET 7</p>
			</a>
			<a href="https://github.com/amerkoleci/Vortice.Vulkan">
				<img src="{base}/vulkanlogo.png" alt="VulkanLogo" />
				<p>Vulkan bindings</p>
			</a>
			<a href="https://bitbucket.org/Starnick/assimpnet/src/master/">
				<img src="{base}/assimplogo.png" alt="AssimpLogo" />
				<p>Assimp bindings</p>
			</a>
			<a href="https://www.glfw.org/">
				<img src="{base}/glfwlogo.png" alt="GLFWLogo" />
				<p>GLFW</p>
			</a>
			<a href="https://opentk.net/">
				<img src="opentklogo.png" alt="OpenTKLogo" />
				<p>OpenTK</p>
			</a>
		</div>
	</div>

	<div class="block">
		<p class="title">Download</p>
		<p>
			Although, the project in it's newest form is not available for public (it will be in the
			future, when I will implement all the nessesary stuff), you can check the prototype <a
				class="link"
				href="https://github.com/Patrol981/Dwarf-Engine">here</a
			>
		</p>
	</div>
</div>

<style>
	.stack {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 3vw;
		position: relative;
		width: 100%;
	}

	.stack img {
		max-height: 5em;
		height: 5em;
	}

	.stack a {
		text-decoration: none;
		color: #ffff;
	}

	.stack a:hover {
		color: tomato;
	}

	.block .title {
		font-size: 3rem;
	}

	.block p {
		max-width: 1080px;
	}

	.block {
		justify-content: center;
		align-items: center;
		align-content: center;
		display: flex;
		flex-direction: column;
	}

	.block .features {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: auto;
	}

	.block .features .feature p {
		padding-left: 0.5vw;
		padding-right: 0.5vw;
	}

	.block .features .feature {
		background-color: rgba(190, 179, 179, 0.281);

		margin-left: 1vw;
		margin-right: 1vw;
		margin-bottom: 1vh;
		margin-top: 1vh;
	}

	.block:last-of-type {
		margin-bottom: 15vh;
	}

	.link {
		text-decoration: none;
		color: tomato;
	}
</style>
