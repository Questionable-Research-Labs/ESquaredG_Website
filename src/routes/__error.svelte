<script context="module" lang="ts">
	import type { ErrorLoad } from '@sveltejs/kit';

	export const load: ErrorLoad = ({ error, status }) => {
		return {
			props: {
				title: `${status}: ${error.message}`
			}
		};
	}
</script>

<script>
	export let title;
</script>

<div class='content'>
	<h1>{title}</h1>
	<a href='/'>Go home</a>
</div>

<style>
	.content {
		display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			min-height: 100vh;
	}
	h1 {
			color: white;
			font-weight: bold;
			font-size: 30pt;
	}

	a {
			font-size: 20pt;
			color: grey;
	}
</style>