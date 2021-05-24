<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
  
	export const load: Load = async ({
		page: {
			params: { id }
		},
		fetch
	}) => {
    const res = await fetch(`${id}.json`)

    if (res.ok) {
      const data = await res.json()
      return { 
        props:{
          page: data
        }
       }
    } 

    const { message } = await res.json();

    return {
      error: new Error(message)
    };
  }
</script>

<script>
  import { dateFormat } from '$lib/utils'
  export let page
</script>

<svelte:head>
  <title>{page.title}</title>
</svelte:head>

<section class="md">
  <h1 class="title">
    {page.title}
  </h1>
  <div class="info">
    <div class="author">作者：{page.author}</div>
    <div class="time">时间：{dateFormat(page.time)}</div>
  </div>

  <div class="md-content">
    {@html page.html}
  </div>
</section>

<style>
  .info {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--c-gray-6);
    font-size: 12px;
    margin-bottom: 0.75rem;
  }

  .author {
    margin-right: 1.5rem;
  }
</style>
