<script context="module">
  export async function preload({ params: { book } }) {
    const res = await this.fetch(`book/${book}.json`)

    if (res.status === 200) {
      const { articles } = await res.json()
      return { category: book, articles }
    } else {
      this.error(404, 'Not Found')
    }
  }
</script>

<script>
  export let category
  export let articles
</script>

<svelte:head>
  <title>CODE BOOK | {category}</title>
</svelte:head>

<h1 class="category">{category}</h1>
<ul class="list">
  {#each articles as art (art.id)}
    <li>
      <a class="link" href={`article/${category}/${art.id}`}>{art.title}</a>
    </li>
  {/each}
</ul>

<style lang="scss">
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
    margin-top: 0.875rem;
    background-color: #fff;
    border-radius: 6px;
    padding: 1.5rem;
  }

  .link {
    display: inline-block;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 0.875rem;
    color: var(--c-gray-7);

    &:hover {
      text-decoration: underline;
      color: var(--tc-primary);
    }
  }
</style>
