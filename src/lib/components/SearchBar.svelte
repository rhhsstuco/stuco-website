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
	@use "../../styles/exports.scss" as exports;

	.search {
		display: flex;
		flex-direction: row;
		align-items: center;

		background-color: var(--color-light);
		color: var(--color-dark);

		box-shadow: 0 4px 4px var(--color-box-shadow);
		padding: 1rem 0.75rem 1rem 1rem;
		gap: 0.75rem;
	}

	.search__icon, .close__icon i {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		font-size: 1.25rem;
		color: var(--color-dark);
	}
	

	.search__input {
		all: unset;
		flex-grow: 1;
	}

	.close__icon {
		all: unset;
		/* padding: 0.75rem; */

		i {
			font-size: 1.5rem;
		}

		&:hover {
			cursor: pointer;
		}
	}
	
	@include exports.media-small {
		.search {
			font-size: 0.9rem;
			padding: 0.75rem 0.5rem 0.75rem 0.75rem;
			gap: 0.5rem;
		}

		.search__icon, .close__icon i {
			font-size: 1.25rem;
		}
	}
</style>
