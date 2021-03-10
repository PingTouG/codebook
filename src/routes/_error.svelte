<script lang="ts">
  export let status: number
  export let error: Error

  const dev = process.env.NODE_ENV === 'development'
</script>

<svelte:head>
  <title>CODE BOOK | {status}</title>
</svelte:head>

<div class="container">
  {#if status === 404}
    <img
      class="not-found__icon"
      src="/assets/images/404.png"
      alt={error.message}
    />
  {/if}
  <p>{error.message}</p>

  {#if dev && error.stack}
    <pre>{error.stack}</pre>
  {/if}
</div>

<style>
  .container {
    text-align: center;
    margin-top: 3rem;
  }
</style>
