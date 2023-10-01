<script lang="ts">
  	import MemberCard from "$lib/components/MemberCard.svelte";
  	import type { PageServerData } from "./$types";

	export let data: PageServerData;
	
</script>

<svelte:head>
	<title>Members</title>
	<meta name="description" content="Meet the members of our the 2023-2024 Student Council!">
</svelte:head>

<main class="members">
	<h1>Members</h1>
	<section class="members__display">
		<div class="members__display__row">
			{#each data.members.slice(0, 3) as member}
				<MemberCard {member}/>
			{/each}
		</div>
		<div class="members__display__grid">
			{#each data.members.slice(3) as member}
				<MemberCard {member}/>
			{/each}
		</div>
	</section>
</main>


<style lang="scss">
	@use "../../../styles/exports.scss" as exports;

	.members {
		width: clamp(18rem, 70%, 80rem);
		margin: 0 auto;
		font-family: 'Poppins', sans-serif;

		display: flex;
		flex-direction: column;
		gap: 3rem;

		h1 {
			margin-top: 2rem;
			@include exports.header;
		}
	}

	.members__display {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.members__display__row {
		display: flex;
		flex-direction: row;
		gap: 2rem;
		justify-content: center;
		align-items: center;
	}

	.members__display__grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);

		gap: 2rem;
	}
</style>