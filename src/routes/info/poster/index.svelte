<script lang='ts' context='module'>
	export const prerender = true;
</script>

<svelte:head>
	<title>E&sup2;G | Poster</title>
</svelte:head>

<div class="poster">
	<a href="/poster/background-info" sveltekit:prefetch class="poster__section bg-info">
		Background Info
	</a>

	<a href="/poster/problem-and-solutions" sveltekit:prefetch class="poster__section prblm-sln">
		Problem and Solutions
	</a>

	<a href="/poster/implementation-details" sveltekit:prefetch class="poster__section impl-details">
		Implementation Details
	</a>

	<a href="/poster/now-and-in-the-future" sveltekit:prefetch class="poster__section now-fut">
		Now and in the Future
	</a>
</div>

<style lang="scss">
	@import '../../assets/style/colors';

	.poster {
		color: red;
		display: grid;
		width: 100%;
		height: 95vh;
		gap: 5rem;
		overflow: hidden;
		grid-template-areas:
			'bg-info prblm-sln'
			'inpl-details now-fut';

		&__section {
			width: 100%;
			height: 100%;
			position: relative;
			transition: 0.1s ease-out transform;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 30pt;
			backdrop-filter: blur(5px);

			&:hover {
				transform: scale(1.1);
			}

			&::before {
				content: '';
				position: absolute;
				bottom: 0;
				right: 0;
				width: 100%;
				height: 100%;
			}
		}

		.bg-info {
			color: $red;
			&::before {
				clip-path: polygon(calc(100% - 0.4rem) calc(100% - 0.4rem), 100% 10%, 100% 100%, 10% 100%);
				background-color: $red;
			}
		}

		.prblm-sln {
			color: $green;

			&::before {
				clip-path: polygon(0.4rem calc(100% - 0.4rem), 0% 10%, 0% 100%, 90% 100%);
				background-color: $green;
			}
		}

		.impl-details {
			color: $blue;

			&::before {
				clip-path: polygon(calc(100% - 0.4rem) 0.4rem, 100% 90%, 100% 0%, 10% 0%);
				background-color: $blue;
			}
		}

		.now-fut {
			color: $yellow;

			&::before {
				clip-path: polygon(0.4rem 0.4rem, 0% 90%, 0% 0%, 90% 0%);
				background-color: $yellow;
			}
		}
	}

	@media only screen and (max-width: 1030px) {
		.poster {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			min-width: 100vw;
			min-height: 100vh;
			height: fit-content;
			padding: 2rem;

			&__section {
				padding: 10px;

				&:hover {
					transform: scale(1.03);
				}
			}

			.bg-info::before {
				clip-path: polygon(calc(100% - 0.4rem) 0.4rem, 100% 90%, 100% 0%, 10% 0%);
			}

			.impl-details::before {
				clip-path: polygon(0.4rem 0.4rem, 0% 90%, 0% 0%, 90% 0%);
			}

			.now-fut::before {
				clip-path: polygon(calc(100% - 0.4rem) calc(100% - 0.4rem), 100% 10%, 100% 100%, 10% 100%);
			}
		}
	}
</style>
