<script lang="ts">
  	import Leaderboard from "$lib/components/Leaderboard/Leaderboard.svelte";
  	import type { PageServerData } from "./$types";

	export let data: PageServerData;
</script>

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