<script lang="ts">
  	import { createEventDispatcher } from "svelte";

	export let text: string;

	const dispatch = createEventDispatcher();

	const onClick = (e: MouseEvent) => {
		dispatch('close');
	}

</script>

<section class="flash">
	<button on:click={onClick}>
		<i class="ri-close-line"></i>
	</button>
	<p>{@html text}</p>
</section>

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
		z-index: 1000;

		display: flex;
		flex-direction: row;
		gap: 0.5rem;
		align-items: center;
	}

	.flash p {
		font-family: "Poppins", sans-serif;
		font-size: 1rem;
	}

	button {
		all: unset;
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
		}

		.flash p {
			text-align: center;
		}
	}
</style>