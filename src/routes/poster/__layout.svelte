<script lang="ts">
	import { page } from '$app/stores';
	import DefaultLayout from '../__layout.svelte';
	import logo from '../../../static/icon.svg';
	import BackButton from '../../assets/graphics/BackButton.svg';
	import { afterUpdate } from 'svelte';
	let inRoot: boolean = $page.path == '/poster';
	afterUpdate(() => {
		inRoot = $page.path == '/poster';
	});
</script>

<main>
	<header>
		<nav>
			<div>
				<img class="back-icon" src={BackButton} alt="back" />
				{#if inRoot}
					<a href="/" sveltekit:prefetch>Back to Home</a>
				{:else}
					<a href="/poster" sveltekit:prefetch>Back to Poster</a>
				{/if}
			</div>
			<a sveltekit:prefetch class="title" href="/">
				<img class="logo" src={logo} alt="E square G logo" />
			</a>
		</nav>
	</header>

	<DefaultLayout>
		<slot />
	</DefaultLayout>
</main>

<style lang="scss">
	@import '../../assets/style/colors.scss';

	main {
		min-height: 100vh;
		header {
			nav {
				display: flex;
				justify-content: space-between;
				flex-direction: row;
				padding: 0 1rem;
				max-width: 100vw;
				color: white;
				align-items: center;
				background-color: $purple;
				a {
					color: white;
					font-size: 15pt;
				}
				.logo {
					height: 3em;
				}
				.back-icon {
					height: 2rem;
				}
			}
		}
		DefaultLayout {
			height: 100%;
		}
	}
</style>
