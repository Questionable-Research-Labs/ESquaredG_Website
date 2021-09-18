<script lang='ts'>
	import DefaultLayout from '../__layout.svelte';
	import logo from '../../../static/icon.svg';
</script>

<header>
	<div class=''>
		<a sveltekit:prefetch class='title header-font font-semibold mx-auto' href='/'><img src={logo}
																																												alt='E square G logo'></a>
	</div>
	<nav>
		<a href='/' sveltekit:prefetch>Home</a>
		<a href='/poster' sveltekit:prefetch>Poster</a>
	</nav>
</header>

<DefaultLayout>
	<slot />
</DefaultLayout>

<style lang='scss'>
	@import "../../assets/style/colors.scss";

  header {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 1rem;
		max-width: 100vw;
    color: white;
		align-items: center;
		background-color: $purple;

		img {
			width: 100px;
			height: 100px;
		}

		nav {
			display: flex;
			gap: 5rem;
		}
  }
</style>