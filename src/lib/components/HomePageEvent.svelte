<script lang="ts">
	export let event: SchoolEvent;
</script>

<div class="event">
	<div class="event__date">
		<span class="event__date__day">
			{event.date.getDate()}
		</span>
		<span class="event__date__month">
			{event.date.toLocaleString('default', { month: 'short' })}
		</span>
	</div>
	<div class="event__info">
		<h3 class="event__info__title">
			{event.name}
		</h3>
		<p class="event__info__description">
			{event.description}
		</p>
	</div>
</div>

<style lang="scss">
	.event {
		background-color: var(--color-light);
		font-family: 'Poppins', sans-serif; 

		display: flex;
		flex-direction: row;

		gap: 0.5rem;

		border-radius: 1.6rem;
		overflow: hidden;
		box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
	}

	.event__date {
		display: flex;
		flex-direction: column;
		align-items: center;

		color: var(--color-light);
		background-color: var(--color-primary);

		padding: 0.75rem;
		gap: 0.5rem;

		flex-basis: 10%;

		.event__date__day {
			font-size: 3rem;
			font-weight: 900;
		}

		.event__date__month {
			font-size: 1.25rem;
			font-weight: 900;
		}
	}

	.event__info {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;

		padding: 0.75rem;

		.event__info__title {
			font-weight: 700;
			font-size: 2rem;
			color: var(--color-primary)
		}
	}
	
</style>