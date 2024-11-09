<script lang="ts">
	/** Flash dialog message to display information */

  	import { onMount } from "svelte";

	const FLASH_TOKEN = "flash";

	interface Props {
		closeable?: boolean;
		id: string;
		children?: import('svelte').Snippet;
	}

	let { closeable = true, id, children }: Props = $props();

	let showFlash = $state(true);

	const onFlashClose = () => {
		showFlash = false;

		localStorage.setItem(FLASH_TOKEN, id)
	}

	onMount(() => {
		showFlash = localStorage.getItem(FLASH_TOKEN) !== id
	})
</script>

{#if showFlash}
	<section class="flash" class:extra-padding={!closeable}>
		{#if closeable}
			<button onclick={onFlashClose} aria-label="close the flash message">
				<i class="ri-close-line"></i>
			</button>
		{/if}
		<p>{@render children?.()}</p>
	</section>
{/if}

<style lang="scss">
	@use "../../styles/exports.scss" as exports;

	.flash {
		position: fixed;
		bottom: 1rem;
		right: 1rem;
		width: fit-content;
		padding: 1rem;
		border-radius: 4px;
		box-shadow: exports.$box-shadow;
		background-color: var(--color-light);
		color: var(--color-dark);
		z-index: 1000;

		display: flex;
		flex-direction: row;
		gap: 0.5rem;
		align-items: center;
	}

	.extra-padding {
		padding: 1.25rem 1.5rem;
	}

	.flash p {
		font-family: "Poppins", sans-serif;
		font-size: 1rem;
	}

	button {
		all: unset;

		&:hover {
			cursor: pointer;
		}
	}


	i {
		color: var(--color-darker-2);
		font-size: 1.5rem;
	}

	@include exports.media-medium {
		.flash {
			bottom: 0.5rem;
			right: 0.5rem;
			padding: 0.75rem;
		}

		.flash p {
			font-size: 1rem;
		}
	}

	@include exports.media-smallest {
		.flash {
			width: auto;
			left: 0.5rem;
			padding: 1.5rem 0.75rem;
		}

		.flash p {
			text-align: center;
		}
	}
</style>