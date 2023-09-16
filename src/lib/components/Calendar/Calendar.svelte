<script lang="ts">
  	import CalendarDay from "./CalendarDay.svelte";
  import CalendarDetail from "./CalendarDetail.svelte";
	export let events: SchoolEvent[];

	/** 
	 * Represents a mapping of a key to all entries which have this key
	*/
	type Grouping<K, T> = Map<K, T[]>;

	/**
	 * Groups the entries in the array using the keyMapper function
	 * 
	*/
	function groupBy<K, T>(array: T[], keyMapper: (obj: T) => K): Grouping<K, T> {
		const map: Grouping<K, T> = new Map();

		array.forEach(item => {
			const key = keyMapper(item);
			const collection = map.get(key) || [];
			collection.push(item);

			map.set(key, collection);
		})

		return map;
	}

	$: eventsMap = groupBy(events, event => event.startDate.toISOString());

	function isLeapYear(year: number): boolean {
		return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 === 0);
	}

	function getFebruaryDays(year: number): number {
		return isLeapYear(year) ? 29 : 28;
	}

	const DAYS_IN_WEEK = 7;
	const MONTHS = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	const DAYS = [
		"Mon",
		"Tue",
		"Wed",
		"Thu",
		"Fri",
		"Sat",
		"Sun",
	];

	export let date: Date = new Date();

	$: month = date.getMonth();
	$: year = date.getFullYear();
	$: daysInMonth = [
		31, getFebruaryDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
	];
	$: firstDayOffset = new Date(year, month, 1).getDay();
	$: rows = Math.ceil((firstDayOffset + daysInMonth[month]) / 7);

	let selectedDate: Date | null = null;

	const selectDate = (date: Date) => () => selectedDate = date;
</script>

<div class="calendar">
	<div class="calendar__header">
		<div class="calendar__header__date">
			<h2>{MONTHS[month]} {year}</h2>
		</div>
		<div class="calendar__header__days">
			{#each DAYS as day}
				<div>{day}</div>
			{/each}
		</div>
	</div>
	<div class="calendar__body">
		{#each { length: rows } as _, i}
			{#each { length: DAYS_IN_WEEK} as _, j}
				{@const currentDate = new Date(year, month, ((i * DAYS_IN_WEEK) + j) - firstDayOffset + 1)}
				{@const validDate = !((i === 0) && (j < firstDayOffset))}

				<CalendarDay
					events={eventsMap.get(currentDate.toISOString())}
					clickable={validDate}
					on:click={selectDate(currentDate)}
				>
					{#if validDate}
						{ ((i * DAYS_IN_WEEK) + j) - firstDayOffset + 1 }
					{/if}
				</CalendarDay>
			{/each}
		{/each}
		{#each events as event}
			<div
				class="calendar__body__event"
				style={`
					grid-row: ${Math.ceil(event.startDate.getDate() / 7) + 1} / ${Math.ceil(event.endDate.getDate() / 7) + 2};
					grid-column: ${event.startDate.getDay() + 1} / ${event.endDate.getDay()+ 2};
				`}
				>
				{event.name}
			</div>
		{/each}
		{#if selectedDate}
			<CalendarDetail date={selectedDate}/>
		{/if}
	</div>
</div>
{#each eventsMap.entries() as entry}
	{entry[0]}: {JSON.stringify(entry[1])} <br>
{/each}

<style lang="scss">
	@use "../../../styles/exports.scss" as exports;

	.calendar {
		--body-events-font-size: 0.7rem;

		font-family: 'Poppins', sans-serif;

		width: clamp(18rem, 50%, 52rem);
		margin: 0 auto;
		margin-top: 3rem;

		color: var(--color-dark);
		background-color: var(--color-light);

		box-shadow: exports.$box-shadow;

	}

	.calendar__header {
		background-color: var(--color-primary);
		color: var(--color-light);

		padding: 0.5rem 0;

		height: 4rem;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;

		h2 {
			text-transform: uppercase;
			font-size: 1.5rem;
			width: fit-content;

			font-weight: bold;
		}
	}

	.calendar__body__event {
		
		position: absolute;

		bottom: 0;
		left: 0;
		right: 0;
	}

	.calendar__header__days {
		display: grid;
		width: 100%;
		grid-template-columns: repeat(7, calc(100% / 7));

		> div {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
		}
	}

	.calendar__body {
		position: relative;
		display: grid;
		grid-template-columns: repeat(7, calc(100% / 7));
	}

	.calendar__body__event {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		text-align: center;

		border-radius: 4rem;
		padding: 0.125rem;
		margin: 0 0.25rem 0.25rem 0.25rem;

		font-size: var(--body-events-font-size);

		background-color: var(--color-accent);
	}
</style>



