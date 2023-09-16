<script lang="ts">
 	import { fly } from "svelte/transition";
  	import CalendarDay from "./CalendarDay.svelte";
	import CalendarDetail from "./CalendarDetail.svelte";
	import { quadInOut } from "svelte/easing";
  	import reducedMotion from "$lib/stores/reducedMotion.store";
	export let events: SchoolEvent[];

	/** 
	 * Represents a mapping of a key to all entries which have this key
	*/
	type Grouping<K, T> = Map<K, T[]>;

	/**
	 * Groups the entries in the array using the keyMapper function
	 * 
	*/
	function groupBy<K, T>(array: T[], keyMapper: (obj: T) => K[]): Grouping<K, T> {
		const map: Grouping<K, T> = new Map();

		array.forEach(item => {
			const keys = keyMapper(item);
			console.log(keys)
			for (const key of keys) {
				const collection = map.get(key) || [];

				collection.push(item);
				map.set(key, collection);
			}

		})

		return map;
	}

	const MS_IN_DAY = 1000 * 60 * 60 * 24;

	function numDays(date1: Date, date2: Date) {
		return (date2.getTime() - date1.getTime()) / (MS_IN_DAY);
	}

	$: eventsMap = groupBy(events, event => {
		const days = Array(numDays(event.startDate, event.endDate) + 1).fill(0);

		const startYear = event.startDate.getFullYear();
		const startMonth = event.startDate.getMonth();
		const startDate = event.startDate.getDate();


		return days.map((_, i) => new Date(startYear, startMonth, startDate + i).toDateString());;
	});

	$: console.log(eventsMap)

	// Calculations to render calendar
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

	// Date and date derived properties
	export let date: Date = new Date();

	$: month = date.getMonth();
	$: year = date.getFullYear();
	$: daysInMonth = [
		31, getFebruaryDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
	];
	$: firstDayOffset = ((((new Date(year, month, 1).getDay()) % 7) - 1) + 7) % 7;
	$: rows = Math.ceil((firstDayOffset + daysInMonth[month]) / 7);

	// Selecting date for detail
	let selectedDate: Date | null = null;

	const selectDate = (date: Date) => () => selectedDate = date;
</script>

<div class="calendar">
	<div class="calendar__header">
		<div class="calendar__header__date">
			<button on:click={() => date = new Date(year, month - 1, 1)}>
				<i class="ri-arrow-left-s-line"></i>
			</button>
			<h2>{MONTHS[month]} {year}</h2>
			<button on:click={() => date = new Date(year, month + 1, 1)}>
				<i class="ri-arrow-right-s-line"></i>
			</button>
		</div>
		<div class="calendar__header__days">
			{#each DAYS as day}
				<div>{day}</div>
			{/each}
		</div>
	</div>
	<div class="calendar__body" class:selected-date={selectedDate}>
		{#each { length: rows } as _, i}
			{#each { length: DAYS_IN_WEEK} as _, j}
				{@const dayCount = ((i * DAYS_IN_WEEK) + j) - firstDayOffset + 1}
				{@const currentDate = new Date(year, month, dayCount)}
				{@const validDate = (dayCount > 0) && (dayCount <= daysInMonth[month])}

				<CalendarDay
					events={eventsMap.get(currentDate.toDateString())}
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
			{#if ((event.startDate.getMonth() === month) && (event.startDate.getFullYear() === year))}
				<div
					class="calendar__body__event"
					style={`
						grid-row: ${Math.ceil((event.startDate.getDate() + firstDayOffset) / 7)} / ${Math.ceil((event.endDate.getDate() + firstDayOffset) / 7)};
						grid-column: ${event.startDate.getDay()} / ${event.endDate.getDay() + 1};
					`}
					>
					{event.name}
				</div>
			{/if}
		{/each}
		<!-- Calender detail that slides in from the right -->
		<!-- Does not transitions if the user preferes reduced motion -->
		{#if selectedDate}
			<div class="calendar-detail" transition:fly={{ x: 200, duration: $reducedMotion ? 0: 300, easing: quadInOut }}>
				<CalendarDetail
					date={selectedDate}
					events={eventsMap.get(selectedDate.toDateString()) || []}
					on:close={() => selectedDate = null}
				/>
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	@use "../../../styles/exports.scss" as exports;

	.calendar {
		--body-events-font-size: 0.7rem;

		overflow: hidden;

		position: relative;

		font-family: 'Poppins', sans-serif;

		width: clamp(18rem, 70%, 52rem);
		margin: 0 auto;
		margin-top: 3rem;

		color: var(--color-dark);
		background-color: var(--color-light);

		box-shadow: exports.$box-shadow;
		z-index: 1;
	}

	.calendar__header {
		background-color: var(--color-primary);
		color: var(--color-light);

		padding: 1rem 0;

		min-height: 4rem;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1.5rem;

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

	.calendar__header__date {
		display: flex;
		flex-direction: row;
		gap: 0.5rem;
		justify-content: center;
		align-items: center;

		button {
			all: unset;
		}

		h2, button {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-self: center;
			text-align: center;
		}

		i {
			position: relative;
			font-size: 2rem;
			z-index: 20;
			
			&:hover {
				cursor: pointer;
			}
			
			&:hover::before {
				background-color: var(--color-box-shadow);
				border-radius: 50%;
			}
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
		position: relative;
		display: grid;
		grid-template-columns: repeat(7, calc(100% / 7));

		transition: background-color 300ms ease-in-out;

		&.selected-date {
			background-color: var(--color-box-shadow);
		}
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

	.calendar-detail {
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;

		width: 30%;

		z-index: 3;
	}
</style>



