<script lang="ts">
	// @ts-ignore
	import DefaultProfilePicture from "$lib/images/default_pfp.png?format=avif;webp;png&w=400;800&as=picture";
  	import MemberCard from "$lib/components/MemberCard.svelte";;
  	import type { PageServerData } from "./$types";
  	import Metadata from "$lib/components/Metadata.svelte";
    import { createScreenWidthQuery } from "$lib/state/screenWidth.svelte";

	interface Props {
		data: PageServerData;
	}

	let { data }: Props = $props();

    let mediaMaxLarge = createScreenWidthQuery(0, 1024);

    // Create derived value that defaults to false on the server to prevent
    // hydration_attribute_changed errors on the picture elements
    let mediaMaxLargeDefaultFalse = $derived.by(() => {
        if (typeof window === 'undefined') {
            console.log("window is defined")
            return false;
        }

        return mediaMaxLarge.current; 
    });

	let gridOffset = $derived(mediaMaxLargeDefaultFalse ? 0 : 3); 
	
	const TITLE = "About Us | RHHS StuCo";
	const DESCRIPTION = "Meet the members of our the 2023-2024 Student Council!";
</script>

<Metadata
	title={TITLE}
	description={DESCRIPTION}
	url="https://rhhsstuco.ca/about-us"
	image={data.members[1].imageURL || DefaultProfilePicture}
/>

<main class="about-us">
	<h1>About Us</h1>

	<section class="members">
		<h2>Members</h2>
		<div class="members__display">
			{#if !mediaMaxLargeDefaultFalse}
				<div class="members__display__row">
					{#each data.members.slice(0, gridOffset) as member (member.id)}
						<MemberCard {member}/>
					{/each}
				</div>
            {/if}
			<div class="members__display__grid">
				{#each data.members.slice(gridOffset) as member, index (member.id)}
					<MemberCard {member} loading={(mediaMaxLargeDefaultFalse && index < 3) ? "eager" : "lazy" }/>
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