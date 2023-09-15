<script lang="ts">
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
	]

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
		<div class="calendar__header__month">
			<h2>{MONTHS[month]}</h2>
		</div>
	</div>
	<div class="calendar__body">
		{#each { length: rows } as _, i}
			{#each { length: DAYS_IN_WEEK} as _, j}
				<div class="calendar__body__day">
					{#if (!((i === 0) && (j < firstDayOffset))) }
						{ ((i * DAYS_IN_WEEK) + j) - firstDayOffset + 1 }
					{/if}
				</div>
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

		width: clamp(64rem, 60%, 10rem);
		margin: 0 auto;

		background-color: var(--color-light);

		box-shadow: exports.$box-shadow;
	}

	.calendar__header {
		background-color: var(--color-primary);

		height: 4rem;
	}

	.calendar__body {
		display: grid;
		grid-template-columns: repeat(7, calc(100% / 7));
	}

	.calendar__body__day {
		font-size: 1.25rem;
		padding: 0.5rem;

		display: flex;
		justify-content: center;
		align-items: center;

		aspect-ratio: 4 / 3;
	}
</style>



