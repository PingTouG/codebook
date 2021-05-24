<script context="module" lang="ts">
	export async function load({ fetch }) {
		const res = await fetch(`index.json`);
		if (res.ok) {
			const books = await res.json();
			return { props: { books } };
		}

		return {
			status: res.status,
			error: new Error(`Could not load index.json`)
		};
	}
</script>

<script lang="ts">
	import Book from '$lib/Book/index.svelte';
	export let books: Array<string>;
</script>

<svelte:head>
	<title>CodeBook | 有质感的编程</title>
</svelte:head>

<div class="home">
	<div class="book__list">
		{#each books as book, index (`${book}_${index}`)}
			<div class="book__item">
				<Book title={book} url={`/book/${book}`} />
			</div>
		{/each}
	</div>
</div>

<style>
	.home {
		--gap: 0.875rem;

		text-align: center;
		margin: 1.5rem 0 2.5rem;
	}

	.book__list {
		display: grid;
		grid-template-columns: repeat(5, calc(calc(100% - var(--gap) * 4) / 5));
		gap: var(--gap);
	}

	@media only screen and (max-width: 600px) {
		.book__list {
			grid-template-columns: repeat(2, calc(calc(100% - var(--gap)) / 2));
			padding: 0.75rem;
		}
	}
</style>
