<script lang="ts">
    /** Generic dialog styling */
    
    import type { Snippet } from "svelte";

	interface Props {
		dialog: HTMLDialogElement;
		children?: Snippet;
	}

	let { dialog = $bindable(), children }: Props = $props();
</script>

<dialog bind:this={dialog}>
	{@render children?.()}
</dialog>

<style lang="scss">
	dialog {
		border: none;
		padding: 0;
		overflow: visible;
		background-color: var(--color-light);
	}

	dialog::backdrop {
		background-color: rgba(0, 0, 0, 0.5);
	}

	:global(body:has(:global(dialog[open]))) {
		overflow-y: hidden;
	}
</style>