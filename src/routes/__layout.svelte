<script lang="ts">
	import 'nprogress/nprogress.css'
	import BackTop from '$lib/BackTop/index.svelte';
	import NProgress from 'nprogress'

	NProgress.configure({ showSpinner: false })
	const onNavigationStart = () => {
		console.log('start')
		NProgress.start()
	}
	const onNavigationEnd = () => {
		console.log('end')
		NProgress.done()
	}
</script>

<svelte:window on:sveltekit:navigation-start="{onNavigationStart}" on:sveltekit:navigation-end="{onNavigationEnd}"  />
<section>
	<header>
		<a href="/">
			<img class="logo" src="/assets/images/logo.png" alt="code book logo" />
		</a>
		<a class="github" href="https://github.com/PingTouG" target="_blank">
			<i class="iconfont icon-github" />
		</a>
	</header>
	<main>
		<slot />
	</main>
	<BackTop />
</section>

<style>
	section {
		width: 71.25rem;
		margin: 0 auto;
	}

	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.75rem 1.5rem;
		border-bottom: 1px solid var(--bc-lighter);
		background-color: var(--c-white);
	}

	.logo {
		width: 8rem;
		object-fit: cover;
	}

	.github {
		color: var(--tc-primary);
	}

	.icon-github {
		font-size: 1.5rem;
	}

	@media only screen and (max-width: 600px) {
		section {
			width: 100%;
		}

		.logo {
			width: 6rem;
		}
	}
</style>
