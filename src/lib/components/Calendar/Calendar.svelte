<script lang="ts">
  	import CalendarDay from "./CalendarDay.svelte";
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
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
		"Sunday",
	];

	export let date: Date = new Date();
	$: month = date.getMonth();
	$: year = date.getFullYear();
	$: daysInMonth = [
		31, getFebruaryDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
	]
	$: firstDayOffset = new Date(year, month, 1).getDay();
	$: rows = Math.ceil((firstDayOffset + daysInMonth[month]) / 7);
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
				<CalendarDay events={eventsMap.get(new Date(year, month, ((i * DAYS_IN_WEEK) + j) - firstDayOffset + 1).toISOString())}>
					{#if (!((i === 0) && (j < firstDayOffset))) }
						{ ((i * DAYS_IN_WEEK) + j) - firstDayOffset + 1 }
					{/if}
				</CalendarDay>
			{/each}
		{/each}
	</div>
</div>
{#each eventsMap.entries() as entry}
	{entry[0]}: {JSON.stringify(entry[1])} <br>
{/each}

<style lang="scss">
	@use "../../../styles/exports.scss" as exports;

	.calendar {
		font-family: 'Poppins', sans-serif;

		width: clamp(48rem, 50%, 18rem);
		margin: 0 auto;

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
		display: grid;
		grid-template-columns: repeat(7, calc(100% / 7));
	}
</style>



