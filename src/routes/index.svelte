<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import ParticleNetwork from "canvas-particle-network";


	onMount(async () => {
		let canvasDiv = document.getElementById('particle-canvas');
		let options = {
		particleColor: '#550055',
		background: "#330033",
		interactive: true,
		speed: 'slow',
		density: 'high'
		};
		let particleCanvas = new ParticleNetwork(canvasDiv, options);

	});
</script>

<svelte:head>
	<title>E2G</title>
</svelte:head>

<section>
	<div class="container flex flex-col justify-center content-center">
		<h1 class="text-center text-9xl font-semibold mx-auto text-blue-50 flex-col">E<sup>2</sup>G</h1>
	</div>
	<div id="particle-canvas"></div>
</section>

<style lang="scss">
	section {
		min-height: 100vh;
	}
	.container {
		margin: auto;
		height: 100%;
	}
	#particle-canvas {
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		position: absolute !important;
		top: 0;
		left: 0;
		z-index: -100;
	}
</style>
