<script lang="ts">
	/** The detail component which appears from the side of the Calendar component */

  	import { createEventDispatcher } from "svelte";

	export let date: Date;
	export let events: SchoolEvent[]

	const dispatch = createEventDispatcher();

	function onClose() {
		dispatch('close');
	}
</script>

<div class="calendar-detail">
	<div class="calendar-detail__content">
		<div class="calendar-detail__content__heading">
			<button on:click={onClose}>
				&times;
			</button>
			<h3>
				{date.toLocaleDateString('en-us', {
					year: 'numeric',
					month: 'long',
					day: 'numeric',
				})}
			</h3>
		</div>
		<div class="calendar-detail__content__events">
			{#each events as event}
				<div class="calendar-detail__content__events__event">
					<h4 style={`--color-badge: var(--color-badge-${event.type})`}>{event.name}</h4>
					<p>
						{#if !event.useHTML}
							{event.description}
						{:else}
							{@html event.description}
						{/if}
					</p>
				</div>
			{:else}
				<div class="calendar-detail__no-events">
					No events on this day.
				</div>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	.calendar-detail {
		background-color: var(--color-light);
		width: 100%;
		height: 100%;
		overflow-y: auto;

	}

	.calendar-detail__content {
		padding: 0.5rem 1rem;

		display: flex;
		flex-direction: column;
		gap: var(--calendar-detail-heading-gap, 0.75rem);
	}

	.calendar-detail__content__heading {
		button {
			all: unset;
			font-size: 2rem;
			margin-bottom: 0.5rem;

			&:hover {
				cursor:pointer
			}
		}

		h3 {
			font-weight: bold;
			font-size: var(--calendar-detail-date-font-size, 1.25rem);
		}
	}
	
	.calendar-detail__content__events {
		display: flex;
		flex-direction: column;
		gap: var(--calendar-detail-events-gap, 0.25rem);
	}

	.calendar-detail__content__events__event {
		display: flex;
		flex-direction: column;
		gap: var(--calendar-detail-events-info-gap, 0.25rem);

	}

	.calendar-detail__content__events__event h4 {
		font-weight: 600;
		text-transform: uppercase;
		position: relative;
		font-size: var(--calendar-detail-event-font-size, 1rem);
		margin-bottom: 0.25rem;

		&::before {
			content: '';
			position: absolute;
			left: 0;
			right: 0;
			bottom: -0.2rem;
			border-radius: 5rem;
			height: 0.2rem;


			background-color: var(--color-badge);
		}
	}

	.calendar-detail__content__events__event p, .calendar-detail__no-events {
		font-size: var(--calendar-detail-description-font-size, 0.9rem);
		line-height: 1.15;
	}
</style>