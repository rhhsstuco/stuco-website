<script lang="ts">
  	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher<{ 'value-change': string }>();

	let value: string = '';

	$: dispatch('value-change', value);
</script>

<div class="search">
	<span class="search__icon">
		<i class="ri-search-line"></i>
	</span>
	<input
		type="text"
		class="search__input"
		bind:value
	>
</div>

<style lang="scss">
	.search {
		display: flex;
		flex-direction: row;
		background-color: var(--color-light);

		display: flex;
		flex-direction: row;
		align-items: center;

		box-shadow: 0 4px 4px var(--color-box-shadow);
	}

	.search__icon {
		padding: 1rem;

		i {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			font-size: 1.25rem;
		}
	}

	.search__input {
		all: unset;
		flex-grow: 1;
	}
	
</style>
