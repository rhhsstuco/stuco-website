<script lang="ts">
  	import { dev } from "$app/environment";
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

	const TITLE = "Clubs | RHHS StuCo";
	const DESCRIPTION = "Want to find a club? You came to the right place! Here you can search for clubs that fit your interests.";
</script>

<svelte:head>
	<title>{TITLE}</title>
	<meta name="description" content={DESCRIPTION}>
	<meta property="og:title" content={TITLE}>
	<meta property="og:description" content={DESCRIPTION}>
	<meta property="og:type" content="website">
	<meta property="og:image" content={data.clubs[0].imageURL.img.src}>
	<meta property="thumbnail" content={data.clubs[0].imageURL.img.src}>
	{#if !dev}
		<meta property="og:url" content="https://rhhsstuco.ca/clubs">
	{/if}
</svelte:head>

<main class="clubs">
	<h1>Clubs</h1>
	<div class="clubs__search">
		<SearchBar on:value-change={onValueChange} placeholder="Search by club name, location, or time"/>
		<p class="clubs_new">Want to create a new club? Use this <a href="https://docs.google.com/forms/d/e/1FAIpQLSc78K3iBYlg9bXtkh3sqePokGIELF9WQKUX833hdEb8qdHl-A/viewform?usp=sf_link">Google Form</a>!</p>
	</div>
	{#if filteredClubs.length}
		<div class="clubs__grid">
			{#each filteredClubs as club (club)}
				<ClubDetail {club}/>
			{/each}
		</div>
	{:else} 
		<p class="clubs__grid__not-found">No clubs found :(</p>
	{/if}
</main>

<style lang="scss">
	@use '../../../styles/exports.scss' as exports;

	h1 {
		margin-top: 2rem;
		@include exports.header;
	}

	.clubs {
		--club-title-font-size: 2rem;
		--club-subtitle-font-size: 1.25rem;

		font-family: 'Poppins', sans-serif;

		display: flex;
		flex-direction: column;
		gap: 2.75rem;

		min-height: 100vh;

		margin-bottom: 8rem;
	}

	.clubs_new {
		--font-size: 1rem;
		width: fit-content;
		margin: 0 auto;
		color: var(--color-darker-2);

		font-size: var(--font-size);
		text-align: center;
	}

	.clubs__search {
		width: clamp(16rem, 60%, 48rem);
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}


	.clubs__grid {
		--columns: 5;
		display: grid;
		grid-template-columns: repeat(var(--columns), minmax(0, 1fr));
		grid-auto-flow: row;

		gap: 3rem 5%;

		margin: 2rem 7rem;
	}

	.clubs__grid__not-found {
		color: var(--color-dark);
		
		margin: 4rem auto;

		width: fit-content;

		font-size: 2rem;
	}

	@include exports.media-max(1760px) {
		.clubs__grid {
			--columns: 4;
		}
	}

	@include exports.media-max(1536px) {
		.clubs__grid {
			--columns: 3;

			--margin-horizontal: 15rem;
			
			margin-left: var(--margin-horizontal);
			margin-right: var(--margin-horizontal);
		}

		.clubs_new {
			--font-size: 0.9rem;
		}
	}
	
	@include exports.media-largest {
		.clubs__grid {
			--columns: 2;
			
			column-gap: 10%;
		}
	}

	@include exports.media-large {
		.clubs {
			--club-title-font-size: 1.5rem;
			--club-subtitle-font-size: 1.125rem;
		}

		.clubs__grid {
			--columns: 2;

			--margin-horizontal: 10rem;
			
			column-gap: 12%;
		}
	}

	@include exports.media-max(864px) {
		.clubs__grid {
			--columns: 2;

			--margin-horizontal: auto;
			
			max-width: 32rem;
		}

		.clubs__search {
			width: clamp(12rem, 80%, 32rem);
			margin: 0 auto;
		}
	}

	@include exports.media-small {
		.clubs__grid {
			--columns: 1;

			--margin-horizontal: auto;
			
			max-width: 16rem;
		}
	}

	@include exports.media-max(360px) {
		.clubs__grid {
			max-width: 14rem;
		}
	}
</style>