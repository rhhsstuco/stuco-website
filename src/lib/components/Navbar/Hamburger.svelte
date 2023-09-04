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

		width: 1rem;

		display: flex;
		flex-direction: column;
		gap: 0.25rem;

		i {
			font-size: 1.5rem;
		}
	}
</style>