<script lang="ts">
  	import MemberCard from "$lib/components/MemberCard.svelte";
  	import { mediaMaxLarge } from "$lib/stores/maxScreenWidth.store";
  	import type { PageServerData } from "./$types";

	export let data: PageServerData;

	$: gridOffset = $mediaMaxLarge ? 0 : 3; 
	
</script>

<svelte:head>
	<title>Members</title>
	<meta name="description" content="Meet the members of our the 2023-2024 Student Council!">
</svelte:head>

<main class="members">
	<h1>Members</h1>
	<section class="members__display">
		{#if !$mediaMaxLarge}
			<div class="members__display__row">
				{#each data.members.slice(0, 3) as member (member.name)}
					<MemberCard {member}/>
				{/each}
			</div>
		{/if}
		<div class="members__display__grid">
			{#each data.members.slice(gridOffset) as member, index (member.name)}
				<MemberCard {member} loading={($mediaMaxLarge && index < 3) ? "eager" : "lazy" }/>
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
		margin-bottom: 8rem;

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
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
	}

	.members__display__grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);

		gap: 2rem;
	}

	@include exports.media-largest {
		.members__display__grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@include exports.media-large {
		.members__display__grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@include exports.media-small {
		.members {
			width: clamp(18rem, 80%, 80rem);
		}

		.members__display__grid {
			gap: 1rem;
		}
	}

	@include exports.media-smallest {
		.members {
			width: clamp(16rem, 75%, 80rem);
		}

		.members__display__grid {
			grid-template-columns: repeat(1, 1fr);
		}
	}
</style>