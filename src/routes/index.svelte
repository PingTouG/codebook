<script lang="ts">
  import Book from '../components/book.svelte'
</script>

<svelte:head>
  <title>CodeBook | 有质感的编程</title>
</svelte:head>

<div class="home">
  <div class="book__list">
    <div class="book__item">
      <Book a-item title="JavaScript" />
    </div>
    <div class="book__item">
      <Book a-item title="Vue" />
    </div>
    <div class="book__item">
      <Book a-item title="React" />
    </div>
    <div class="book__item">
      <Book a-item title="Svelte" />
    </div>
    <div class="book__item">
      <Book a-item title="Deno" />
    </div>
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

  .book__item {
    transition: all 0.3s;
    cursor: pointer;
  }
  .book__item:hover {
    transform: scale(1.05);
  }

  @media only screen and (max-width: 600px) {
    .book__list {
      grid-template-columns: repeat(2, calc(calc(100% - var(--gap)) / 2));
      padding: 0.75rem;
    }
  }
</style>
