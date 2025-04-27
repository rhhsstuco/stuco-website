<script lang="ts">
  import type { Snippet } from "svelte";

	/** Generic card component */

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="card">
	{@render children()}
</div>

<style lang="scss">
	@use "../../styles/exports.scss" as exports;

	.card {
		--max-padding: 0.5rem;
        --box-shadow: #{exports.$box-shadow};

		box-shadow: var(--box-shadow);
		background-color: var(--color-light);
		padding: min(var(--max-padding), 5%);
	}
</style>