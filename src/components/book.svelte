<script lang="ts">
  import { onMount } from 'svelte'
  import { goto } from '@sapper/app'

  export let title: string
  export let author: string = 'CodeBook'
  export let url: string
  let book: Element
  let style: string

  function resetSize() {
    //   书本比例为18.4*26
    const ratio = 18.4 / 26
    const height = book.clientWidth / ratio
    style = `height: ${height}px`
  }

  onMount(resetSize)
</script>

<svelte:body onresize={resetSize} />
<div class="book" bind:this={book} {style} on:click={() => goto(url)}>
  <h1 class="title">{title}</h1>
  <h5 class="author">By @ {author}</h5>
</div>

<style>
  .book {
    height: 100%;
    width: 100%;
    background: var(--c-white);
    border-left: 5px solid var(--c-black);
    border-top: 6px double var(--c-black);
    border-right: 4px double var(--c-black);
    border-bottom: 6px double var(--c-black);
    border-radius: 0px 0.5rem 0.5rem 0;
    font-family: 'Montserrat', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    transition: all 0.3s;
  }

  .book:hover {
    transform: scale(1.05);
  }

  .title {
    padding: 0 0.75rem;
    word-break: break-all;
    flex: 1 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .author {
    margin: 10% 0;
  }
</style>
