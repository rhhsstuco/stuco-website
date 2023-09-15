<script lang="ts">
	export let events: SchoolEvent[] | undefined;
</script>

<div class="calendar-day">
	{#if events}
		<div class="calendar-day__event-count">{events.length}</div>
	{/if}
	<slot/>
</div>

<style lang="scss">
	@use "sass:color";

	.calendar-day {
		position: relative;

		font-size: 1rem;
		padding: 0.5rem;

		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		aspect-ratio: 4 / 3;
	}

	.calendar-day__event-count {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		position: absolute;
		background-color: var(--color-accent);
		border-radius: 50%;
		width: 1.25rem;
		aspect-ratio: 1 / 1;
		
		top: 0.125rem;
		right: 0.125rem;
	}
</style>