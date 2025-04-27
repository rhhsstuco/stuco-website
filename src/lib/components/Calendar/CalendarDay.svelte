<script lang="ts">
  import type { Snippet } from "svelte";

    /** The individual button representing a day on the Calendar component */

    interface Props {
		events: SchoolEvent[] | undefined;
		children?: Snippet;
        onclick?: () => void; 
	}

	let { events, onclick, children }: Props = $props();

	function calculateEventTypes(events: SchoolEvent[] | undefined): [number, number] {
		if (!events) {
			return [0, 0];
		}

		let numSchoolEvents = 0;
		let numClubEvents = 0;

		for (const event of events) {
			if (event.type === 'school') {
				numSchoolEvents++;
			} else {
				numClubEvents++;
			}
		}

		return [numSchoolEvents, numClubEvents];
	}

	let [numSchoolEvents, numClubEvents] = $derived(calculateEventTypes(events));
</script>

<button class="calendar-day" disabled={!onclick} onclick={onclick}>
	{#if onclick}
		<div class="calendar-day__event-count" >
			{#if numSchoolEvents != 0}
				<div style={`--color-badge: var(--color-badge-school);`}>{numSchoolEvents}</div>
			{/if}
			{#if numClubEvents != 0}
				<div style={`--color-badge: var(--color-badge-club);`}>{numClubEvents}</div>
			{/if}
		</div>
	{/if}
	{@render children?.()}
</button>

<style lang="scss">
	@use "../../../styles/exports.scss" as exports;
	@use "sass:color";

	.calendar-day {		
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
		justify-content: flex-end;
		align-items: center;
		gap: 0.25rem;

		position: absolute;
		font-size: var(--calendar-events-font-size, 0.6rem);

		
		top: 0.125rem;
		right: 0.125rem;
		left: 0.125rem;
		
		div {
			background-color: var(--color-badge);
			border-radius: 50%;
			aspect-ratio: 1 / 1;
			width: max(1.25vw, 1.25rem);

			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			text-align: center;
		}
	}

	@include exports.media-medium {
		.calendar-day__event-count div {
			width: max(1.25vw, 1rem);
		}
	}

	@include exports.media-small {
		.calendar-day__event-count {
			flex-direction: row-reverse;
			justify-content: space-between;
		}
	}
</style>