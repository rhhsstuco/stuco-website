<script lang="ts">
    /** The hamburger menu in mobile UIs */

	interface Props {
		open: boolean;
	}

	let { open = $bindable() }: Props = $props();

	function onClick() {
		open = !open;
	}
</script>

<button class="hamburger" onclick={onClick} aria-label="Open hamburger menu">
	<i class="ri-menu-line"></i>
</button>

<style lang="scss">
	.hamburger {
		all: unset;


		display: flex;
		flex-direction: column;
		gap: 0.25rem;

		i {
			width: 24px;
			font-size: var(--font-size-logo, 1.5rem);
		}

		&:hover {
			cursor: pointer;
		}
	}
</style>