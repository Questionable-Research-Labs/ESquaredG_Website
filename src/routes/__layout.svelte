<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';
	import '../global.scss';
	import { browser } from '$app/env';
	import { CONFIG as PARTICLE_OPTIONS } from '$lib/particleConfig';
	onMount(async () => {
		if (browser) {
			let { particlesJS } = await import('tsparticles');
			await particlesJS('particle-canvas', PARTICLE_OPTIONS);
		}
	});
</script>

<main>
	<slot />
</main>

<div id="particle	-canvas" />

<style lang="scss">
	@import '../assets/style/colors';
	:root {
		--red: #{$red};
		--blue: #{$blue};
		--green: #{$green};
		--yellow: #{$yellow};
	}

	#particle-canvas {
		width: 100vw;
		height: 100%;
		overflow: hidden;
		position: absolute !important;
		top: 0;
		left: 0;
		z-index: -100;
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	.particle-canvas-loaded {
		transition: all 0.5s ease;
		opacity: 1;
	}
</style>
