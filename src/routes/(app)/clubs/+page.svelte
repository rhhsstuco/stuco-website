<script lang="ts">
	import ClubDetail from "$lib/components/ClubDetail.svelte";
  	import SearchBar from "$lib/components/SearchBar.svelte";
  	import type { PageServerData } from "./$types";

	export let data: PageServerData;

	let value: string = '';
	
	function onValueChange(v: CustomEvent<string>) {
		value = v.detail.toLowerCase();
	}

	$: filteredClubs = data.clubs.filter(club => 
		club.meetingTime.toLowerCase().includes(value) ||
		club.name.toLowerCase().includes(value) ||
		club.room.toLowerCase().includes(value)
	);
</script>


<main class="clubs">
	<h1>Find a Club</h1>
	<div class="clubs__search">

			<SearchBar on:value-change={onValueChange}/>

	</div>
	{#if filteredClubs.length}
		<div class="clubs__grid">
			{#each filteredClubs as club}
				<ClubDetail {club}/>
			{/each}
		</div>
	{:else} 
		<p class="clubs__grid__not-found">No Clubs Found :(</p>
	{/if}
</main>

<style lang="scss">
	@use '../../../styles/exports.scss' as exports;

	h1 {
		@include exports.header;
	}

	.clubs {
		font-family: 'Poppins', sans-serif;

		display: flex;
		flex-direction: column;
		gap: 3rem;

		min-height: 100vh;
	}

	.clubs__search {
		width: clamp(32rem, 50%, 46rem);
		margin: 0 auto;
	}


	.clubs__grid {
		display: grid;
		grid-template-columns: repeat(5, minmax(0, 1fr));
		grid-auto-flow: row;

		gap: 3rem 5%;

		margin: 2rem 7rem;
	}

	.clubs__grid__not-found {
		margin: 4rem auto;

		width: fit-content;

		font-size: 2rem;
	}

	@include exports.media(1536px, 1760px) {
		.clubs__grid {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}
	}

	@include exports.media(exports.$breakpoint-largest, 1536px) {
		.clubs__grid {
			grid-template-columns: repeat(3, minmax(0, 1fr));

			$margin-horizontal: 15rem;

			margin-left: $margin-horizontal;
			margin-right: $margin-horizontal;
		}
	}
</style>