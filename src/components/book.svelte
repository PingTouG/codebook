<script lang="ts">
  import { onMount } from 'svelte'

  export let title: string
  export let author: string = 'PingTouG'
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
<div class="book" bind:this={book} {style}>
  <h1 class="title">{title}</h1>
  <h5 class="author">By @ {author}</h5>
</div>

<style>
  .book {
    height: 100%;
    width: 100%;
    background: var(--c-gray-10);
    border-radius: 0px 0.5rem 0.5rem 0;
    color: var(--c-gray-2);
    font-family: 'Montserrat', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
