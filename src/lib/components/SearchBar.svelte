<script lang="ts">
  	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher<{ 'value-change': string }>();

	let value: string = '';

	$: dispatch('value-change', value);

	$: showClose = value.trim().length != 0;

	function clearSearch() {
		value = '';
	}
</script>

<div class="search">
	<span class="search__icon">
		<i class="ri-search-line"></i>
	</span>
	<input
	type="text"
	aria-label="Search clubs"
	class="search__input"
	bind:value
	>
	{#if showClose}
		<button class="close__icon" on:click={clearSearch}>
			<i class="ri-close-line"></i>
		</button>
	{/if}
</div>

<style lang="scss">
	.search {
		display: flex;
		flex-direction: row;
		background-color: var(--color-light);
		color: var(--color-dark);

		display: flex;
		flex-direction: row;
		align-items: center;

		box-shadow: 0 4px 4px var(--color-box-shadow);
	}

	.search__icon, .close__icon {
		padding: 1rem;
		
		i {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			font-size: 1.25rem;
			color: var(--color-dark);
		}
	}

	.search__input {
		all: unset;
		flex-grow: 1;
	}

	.close__icon {
		all: unset;
		padding: 0.75rem;

		i {
			font-size: 1.5rem;
		}

		&:hover {
			cursor: pointer;
		}
	}
	
</style>
