<script lang="ts">
  	import { dev } from "$app/environment";
  	import MemberCard from "$lib/components/MemberCard.svelte";
  import { DOMAIN } from "$lib/constants";
  	import { mediaMaxLarge } from "$lib/stores/maxScreenWidth.store";
  	import type { PageServerData } from "./$types";

	export let data: PageServerData;

	$: gridOffset = $mediaMaxLarge ? 0 : 3; 
	
	const TITLE = "About Us | RHHS StuCo";
	const DESCRIPTION = "Meet the members of our the 2023-2024 Student Council!";
</script>

<svelte:head>
	<title>{TITLE}</title>
	<meta name="description" content={DESCRIPTION}>
	<meta property="og:title" content={TITLE}>
	<meta property="og:description" content={DESCRIPTION}>
	<meta property="og:type" content="website">
	<meta property="og:image" content={`${DOMAIN}${data.members[1].imageURL.img.src}`}>
	<meta property="thumbnail" content={`${DOMAIN}${data.members[1].imageURL.img.src}`}>
	{#if !dev}
		<meta property="og:url" content="https://rhhsstuco.ca/about-us">
	{/if}
</svelte:head>

<main class="about-us">
	<h1>About Us</h1>

	<section class="members">
		<h2>Members</h2>
		<div class="members__display">
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
		</div>	
	</section>

	<section class="constitution">
		<h2><a href="https://docs.google.com/document/d/e/2PACX-1vQb_xmB3PHRb04KgONGDNKJXQOYpmS1fTwMoTvlSS90-4ShiNTttbWVlKm2sBjT2J5xZUsb7_zMjUEy/pub" target="_blank" rel="noopener noreferrer">Constitution</a></h2>
	</section>
</main>


<style lang="scss">
	@use "../../../styles/exports.scss" as exports;

	.about-us {
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

		h2 {
			margin-bottom: 1.5rem;
			@include exports.header($font-size: calc(var(--font-size-header) - 1rem));
		}

		h2 a {
			color: inherit
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
		.about-us {
			width: clamp(18rem, 80%, 80rem);
		}

		.members__display__grid {
			gap: 1rem;
		}
	}

	@include exports.media-smallest {
		.about-us {
			width: clamp(16rem, 75%, 80rem);
		}

		.members__display__grid {
			grid-template-columns: repeat(1, 1fr);
		}
	}
</style>