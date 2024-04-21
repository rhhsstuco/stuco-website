<script lang="ts">
  	import { dev } from "$app/environment";
  	import Leaderboard from "$lib/components/Leaderboard/Leaderboard.svelte";
  	import type { PageServerData } from "./$types";

	export let data: PageServerData;
	const TITLE = "Grade Wars | RHHS StuCo";
	const DESCRIPTION = "Check out the Grade Wars leaderboard";
</script>

<!-- svelte-ignore missing-declaration -->
<svelte:head>
	<title>{TITLE}</title>
	<meta name="description" content={DESCRIPTION}>
	<meta property="og:title" content={TITLE}>
	<meta property="og:description" content={DESCRIPTION}>
	<meta property="og:type" content="website">
	{#if !dev}
		<meta property="og:url" content="https://rhhsstuco.ca/grade-wars">
	{/if}
</svelte:head>

<main>
	<h1>Leaderboard</h1>
	<Leaderboard gradePoints={data.gradePoints} gradeColors={data.rankings}/>
</main>

<style lang="scss">
	@use "../../../styles/exports" as exports;

	h1 {
		margin-top: 2rem;
		@include exports.header;
	}

	main {
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
		width: clamp(18rem, 85%, 52rem);
		margin: 0 auto;

		min-height: calc(100vh - 5.5rem);
		margin-bottom: 4rem;
	}

	@include exports.media-smallest {
		h1 {
			--font-size-header: 2.5rem;
		}
	}

	@include exports.media-max(400px) {
		h1 {
			--font-size-header: 2.25rem;
		}
	}
</style>