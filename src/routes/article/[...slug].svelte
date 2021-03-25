<script context="module">
  export async function preload({
    params: {
      slug: [category, id],
    },
  }) {
    const res = await this.fetch(`article/${category}/${id}.json`)

    if (res.status === 200) {
      const data = await res.json()
      return { page: data }
    } else {
      this.error(404, 'Not Found')
    }
  }
</script>

<script>
  import { dateFormat } from '../../utils'
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

<style lang="scss">
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
