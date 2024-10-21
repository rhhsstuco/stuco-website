<script lang="ts">
	/** Generic dialog styling*/
	
	export let dialog: HTMLDialogElement;
</script>

<dialog bind:this={dialog} on:close>
	<slot class="test"/>
</dialog>

<style lang="scss">
	dialog {
		border: none;
		padding: 0.5rem;
		overflow-y: hidden;
		background-color: var(--color-light);
	}

	dialog::backdrop {
		background-color: rgba(0, 0, 0, 0.5);
	}

	:global(body:has(dialog[open])) {
		overflow-y: hidden;
	}
</style>