<script lang="ts">
  export let event: SchoolEvent;
</script>

<div class="event">
  <div class="event__date">
    <span class="event__date__day">
      {event.startDate.getDate()}
    </span>
    <span class="event__date__month">
      {event.startDate.toLocaleString("default", { month: "short" })}
    </span>
  </div>
  <div class="event__info">
    <h3 class="event__info__title">
      {event.name}
    </h3>
    <p class="event__info__description">
		{#if !event.useHTML}
      		{event.description}
	  	{:else}
		  	{@html event.description}
		{/if}
    </p>
  </div>
</div>

<style lang="scss">
	@use '../../styles/exports.scss' as exports;

	.event {
		background-color: var(--color-light);
		font-family: "Poppins", sans-serif;

		display: flex;
		flex-direction: row;

		gap: 0.5rem;

		border-radius: 1.6rem;
		overflow: hidden;
		box-shadow: exports.$box-shadow;
	}

	.event__date {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		color: var(--color-light);
		background-color: var(--color-primary);

		padding: 0.75rem;
		gap: 0.5rem;

		width: 5rem;

		.event__date__day {
			font-size: var(--event-day-font-size, 3rem);
			font-weight: 900;
		}

		.event__date__month {
			font-size: var(--event-month-font-size, 1.25rem);
			font-weight: 900;
		}
	}

	.event__info {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;

		padding: 0.75rem;
		flex-basis: 90%;

		.event__info__title {
			font-weight: 900;
			font-size: var(--event-title-font-size, 2rem);
			color: var(--color-primary);
		}

		.event__info__description {
			font-size: var(--event-description-font-size, 1.125rem);
			color: var(--color-darker-1);
		}
	}

	@include exports.media-medium {
		.event__date {
			width: 4rem;
		}
	}

	@include exports.media-small {
		.event__info {
			gap: 0.25rem;
		}
	}
</style>
