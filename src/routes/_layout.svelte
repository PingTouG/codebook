<script lang="ts">
</script>

<section>
  <header>
    <a href="./">
      <img class="logo" src="/assets/images/logo.png" alt="code book logo" />
    </a>
    <a class="github" href="https://github.com/PingTouG" target="_blank">
      <i class="iconfont icon-github" />
    </a>
    <i class="iconfont icon-menu" />
  </header>
  <main>
    <slot />
  </main>
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

  .icon-menu {
    display: none;
    font-size: 1.25rem;
  }

  @media only screen and (max-width: 600px) {
    section {
      width: 100%;
    }

    .logo {
      width: 6rem;
    }

    .icon-menu {
      display: block;
    }

    .icon-github {
      display: none;
    }
  }
</style>
