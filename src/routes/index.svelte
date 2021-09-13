<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import {
		Github,
		Envelope
	} from "svelte-bootstrap-icons";

	import FallstopLogo from "../lib/icons/fallstop_logo.svelte";
	import LasprucaLogo from "../lib/icons/laspruca_logo.svelte";




</script>

<svelte:head>
	<title>E2G</title>
</svelte:head>

<section>
	<div class="container flex flex-col justify-center content-center">
		<h1 class="title header-font font-semibold mx-auto">E²G</h1>
		<h2 class="sub-title text-4xl mx-auto text-blue-50">Under Construction.</h2>
		<div class="links-container flex flex-row content-center justify-center flex-wrap">
			<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_none" rel=”noreferrer” class="link-wrapper">
				Poster
			</a>
			<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_none" rel=”noreferrer” class="link-wrapper">
				Presentation
			</a>
			<a href="https://github.com/Questionable-Research-Labs?q=ESquaredG&type=&language=&sort=" target="_none" rel=”noreferrer” class="link-wrapper">
				Source Code
			</a>
			<a href="https://jmw.nz/" target="_none" rel=”noreferrer” class="link-wrapper">
				About Jasper M-W
			</a>
			<a href="https://laspruca.nz/" target="_none" rel=”noreferrer” class="link-wrapper">
				About Nathan Hare
			</a>
		</div>
	</div>


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
			height: 25rem;
			@media (max-width: 600px) {
				font-size: 10rem;
				margin-top: 1em;
			}
		}
		.sub-title {
			margin: 0 auto 2em auto;
			@media (max-width: 600px) {
				font-size: 1.5rem;
				margin: 0 auto;
			}
			
		}
		.links-container {

			text-align: center;
			
			
			margin: 0 auto;
			@media (max-width: 600px) {
				flex-direction: column;
			}
			.link-wrapper {
				margin: 1em;
				display: block;
				padding: 0.5em;
				font-size: 1.25rem;
				color: white;
				border: rgba(255, 255, 255, 0.8) solid 5px;
				background: rgba(227,124,255,0.1);

			}
		}
	}

</style>
