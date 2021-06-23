<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({
		page: {
			params: { book }
		},
		fetch
	}) => {
		const res = await fetch(`${book}.json`);

		if (res.ok) {
			const articles = await res.json();

			return {
				props: { 
					articles,
					category: book
				}
			};
		}

		const { message } = await res.json();

		return {
			error: new Error(message)
		};
	};
</script>

<script lang="ts">
	import { dateFormat } from '$lib/utils';
	import type { Article } from '$lib/types';

	export let category;
	export let articles: Array<Article>;
</script>

<svelte:head>
	<title>CODE BOOK | {category}</title>
</svelte:head>

<h1 class="category">{category}</h1>
<ul class="list">
	{#each articles as art (art.id)}
		<li>
			<a class="item" href={`/article/${category}/${art.id}`}>
				<div class="title">{art.title}</div>
				<div class="time">{dateFormat(art.time)}</div>
			</a>
		</li>
	{/each}
</ul>

<style>
	.category {
		margin-top: 1.5rem;
		background-color: var(--c-white);
		display: inline-block;
		padding: 0.75rem;
		min-width: 10rem;
		border-radius: 6px;
		border: 4px double var(--c-black);
		border-left-style: solid;
		border-right-style: solid;
		text-align: center;
	}

	.list {
		margin-top: 1.5rem;
	}

	.item {
		padding: 1.5rem;
		background-color: #fff;
		border-radius: 6px;
		margin-bottom: 0.75rem;
		line-height: 1;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.title {
		width: 100%;
		line-height: 1.5;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		color: var(--c-gray-7);
	}
	.title:hover {
		text-decoration: underline;
		color: var(--tc-primary);
	}

	.time {
		font-size: 0.75rem;
		color: var(--c-gray-5);
		flex: 0 0 auto;
		margin-left: 0.5rem;
	}

	@media only screen and (max-width: 600px) {
		.category {
			padding: 0.125rem;
			min-width: 6rem;
			border-radius: 6px;
			text-align: center;
			margin-left: 0.75rem;
		}
		.item {
			padding: 0.875rem;
			flex-direction: column;
			align-items: flex-start;
		}
		.time {
			margin-left: 0;
			margin-top: 0.5rem;
		}
	}
</style>
