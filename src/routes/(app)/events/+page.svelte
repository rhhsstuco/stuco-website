<script lang="ts">
  	import Calendar from "$lib/components/Calendar/Calendar.svelte";
  	import HomePageEvent from "$lib/components/HomePageEvent.svelte";
  	import Metadata from "$lib/components/Metadata.svelte";
	import type { PageServerData } from "./$types";

	export let data: PageServerData;

	let monthEvents: SchoolEvent[];

	$: {
		const duplicateEvents = new Set<string>();

		monthEvents = data.events
			.filter(event => event.startDate.getMonth() == new Date().getMonth())
			.filter(event => {
				if (duplicateEvents.has(event.name)) {
					return false;
				}

				duplicateEvents.add(event.name);
				return true;
			})
	}

	const TITLE = "Events | RHHS StuCo";
	const DESCRIPTION = "Stay up to date on all school events here!";
</script>

<Metadata
	title={TITLE}
	description={DESCRIPTION}
	url="https://rhhsstuco.ca/events"
/>

<main>
	<h1>Events</h1>
	<Calendar events={data.events}/>
	<section class="month-events">
		<h2>Events This Month</h2>
		<div class="events__list">
			{#if monthEvents.length === 0}
				<h3 class="events__list-no-events">No Events This Month</h3>
			{/if}
			{#each monthEvents as event}
				<HomePageEvent event={event}/>
			{/each}
		</div>
	</section>
</main>

<style lang="scss">
	@use "../../../styles/exports.scss" as exports;

	
	main {
		min-height: calc(100vh - 5.5rem);
		margin-bottom: 8rem;
	}
	
	h1 {
		margin-top: 2rem;
		@include exports.header;
	}
	
	h2 {
		margin-top: 3rem;
		@include exports.header($font-size: calc(var(--font-size-header) - 1rem));
	}

	.events__list-no-events {
		@include exports.not-found-message
	}
	
	.month-events {
		font-family: 'Poppins', sans-serif;
		
		width: clamp(32rem, 60%, 48rem);
		margin: 0 auto;

		display: flex;
		flex-direction: column;
		gap: 4rem;

		padding: 5rem 0;


		.events__list {
			display: flex;
			flex-direction: column;
			gap: 2rem;
		}
	}

	@include exports.media-large {
		.month-events {
			--event-day-font-size: 2.5rem;
			--event-month-font-size: 1.125rem;
			--event-title-font-size: 1.75rem;
			--event-description-font-size: 1.05rem;
		}
	}

	@include exports.media-small {
		.month-events {
			width: clamp(16rem, 80%, 42rem);

			--event-day-font-size: 2.25rem;
			--event-month-font-size: 1rem;
			--event-title-font-size: 1.5rem;
			--event-description-font-size: 0.95rem;
		}

		h2 {
			margin-top: 1rem;
			@include exports.header($font-size: calc(var(--font-size-header) - 0.75rem));
		}
	}

	@include exports.media-smallest {
		.month-events {
			--event-day-font-size: 2rem;
			--event-month-font-size: 0.9rem;
			--event-title-font-size: 1.25rem;
			--event-description-font-size: 0.85rem;
		}
	}
</style>