<script>
  import Navbar from "$lib/components/Navbar.svelte";
</script>

<header>
  <Navbar />
</header>

<slot />

<footer />

<style lang="scss">
  header {
    color: var(--color-text);
  }
</style>
