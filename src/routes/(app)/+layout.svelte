<script lang="ts">
  import Navbar from "$lib/components/Navbar/Navbar.svelte";
  import type { Snippet } from "svelte";
  
  interface Props {
    children?: Snippet;
  }

  let { children }: Props = $props();
</script>

<header>
  <Navbar />
</header>

{@render children?.()}

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

