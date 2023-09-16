<script lang="ts">
	export let events: SchoolEvent[] | undefined;
	export let clickable: boolean = false;
</script>

<button class="calendar-day" disabled={!clickable} on:click>
	{#if events && clickable}
		<div class="calendar-day__event-count">{events.length}</div>
	{/if}
	<slot/>
</button>

<style lang="scss">
	@use "sass:color";

	.calendar-day {
		--color-event-marker: var(--color-marker, var(--color-accent));
		
		all: unset;
		position: relative;

		font-size: 1rem;
		padding: 0.5rem;

		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		aspect-ratio: 4 / 3;

		&:not(:disabled):hover {
			background-color: var(--color-lighter-2);
			cursor: pointer;
		}
	}

	.calendar-day__event-count {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		text-align: center;

		position: absolute;
		background-color: var(--color-event-marker);
		border-radius: 50%;
		width: 1.25rem;
		aspect-ratio: 1 / 1;

		font-size: var(--body-events-font-size, 0.6rem);
		
		top: 0.125rem;
		right: 0.125rem;
	}
</style>