<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { afterUpdate, onMount } from 'svelte';
	import '../global.scss';
	import { browser } from '$app/env';
	import { CONFIG as PARTICLE_OPTIONS } from '$lib/particleConfig';

	const loadParticle = async () => {
		if (browser) {
			console.log("Loading particle js")
			let { particlesJS } = await import('tsparticles');
			await particlesJS('particle-canvas', PARTICLE_OPTIONS);
		}
	};

	onMount(loadParticle);
	afterUpdate(loadParticle);
</script>

<main>
	<slot />
	<div id="particle-canvas" />
</main>


<style lang="scss">
	@import '../assets/style/colors';
	:root {
		--red: #{$red};
		--blue: #{$blue};
		--green: #{$green};
		--yellow: #{$yellow};
		--background-blur: 0px;
	}

	#particle-canvas {
		width: 100%;
		height: 100%;
		overflow: hidden;
		position: absolute !important;
		filter: blur(var(--background-blur));
		top: 0;
		left: 0;
		z-index: -100;
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	main {
		position: relative;
	}
</style>
