<script lang="ts">
	import ClubDetail from "$lib/components/ClubDetail.svelte";
  	import type { PageServerData } from "./$types";

	export let data: PageServerData
</script>


<div class="club__grid">
	{#each data.clubs as club}
		<ClubDetail {club}/>
	{/each}
</div>

<style lang="scss">
	.club__grid {
		display: grid;
		grid-template-columns: repeat(
			auto-fit,
			minmax(
				min(10rem, 100%),
				1fr
			)
		);

		gap: 1rem 6rem;

		margin: 0 4rem;
	}
</style>