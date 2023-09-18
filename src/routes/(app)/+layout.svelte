<script>
  import Navbar from "$lib/components/Navbar/Navbar.svelte";
</script>

<header>
  <Navbar />
</header>

<slot />

<style lang="scss">
	header {
		color: var(--color-dark);
	}

	:global(*) {
		transition: background-color 200ms ease-in-out;
	}
</style>

