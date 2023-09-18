<script lang="ts">
	export let open: boolean;

	function onClick() {
		open = !open;
	}
</script>

<button class="hamburger" on:click={onClick}>
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