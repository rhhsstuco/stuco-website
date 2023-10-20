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

		view-transition-name: header;
	}

	@media (max-width: 1024px) {
		header {
			view-transition-name: none;
		}
	}

	@media (max-height: 577px) {
		header {
			view-transition-name: none;
		}
	}
</style>

