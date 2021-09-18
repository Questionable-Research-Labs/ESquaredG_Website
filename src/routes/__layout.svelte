<script context="module" lang="ts">
	export const prerender = true;
</script>


<script lang="ts">
	import { onMount } from 'svelte';

	import "../reset.scss";
	import "../global.scss";
	import ParticleNetwork from "canvas-particle-network";
	onMount(async () => {
		let canvasDiv = document.getElementById('particle-canvas');
		let options = {
			particleColor: '#990099',
			background: "#330033",
			interactive: true,
			speed: 'slow',
			density: 'high'
		};
		let particleCanvas = new ParticleNetwork(canvasDiv, options);
		canvasDiv.classList.add('particle-canvas-loaded');

	});
</script>



<main>
	<slot></slot>
	<div id="particle-canvas"></div>
</main>

<style lang="scss">
	#particle-canvas {
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		position: absolute !important;
		top: 0;
		left: 0;
		z-index: -100;
	}

	.particle-canvas-loaded {
		transition: all 0.5s ease;
		opacity: 1;
	}
</style>