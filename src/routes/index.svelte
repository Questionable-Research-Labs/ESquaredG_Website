<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import ParticleNetwork from "canvas-particle-network";
	import {
		Github,
		Envelope
	} from "svelte-bootstrap-icons";

	import FallstopLogo from "../lib/icons/fallstop_logo.svelte";
	import LasprucaLogo from "../lib/icons/laspruca_logo.svelte";



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
		canvasDiv.classList.add('particle-canvas-loaded');

	});
</script>

<svelte:head>
	<title>E2G</title>
</svelte:head>

<section>
	<div class="container flex flex-col justify-center content-center">
		<h1 class="title header-font font-semibold mx-auto">E²G</h1>
		<h2 class="text-4xl mx-auto text-blue-50">Under Construction.</h2>
		<div class="icons flex flex-row content-center justify-evenly">
			<Github width=32 height=32/>
			<Envelope width=32 height=32/>
			<FallstopLogo/>
			<LasprucaLogo/>
		</div>
	</div>
	<div id="particle-canvas"></div>

</section>

<style lang="scss">
	section {
		height: 100vh;
		
	}
	.container {
		margin: auto;
		height: 100%;
		.title {
			font-size: 20rem;
			background: linear-gradient(140deg, rgba(227,124,255,1) 0%, rgba(60,9,71,1) 100%);
			background-clip: text;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			opacity: 0.5;
			margin: 0 auto;

		}
		.icons {
			color: white;
		}
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
	.particle-canvas-loaded {
		transition: all 0.5s ease;
		opacity: 1;

	}
</style>
