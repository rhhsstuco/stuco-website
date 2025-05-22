<script lang="ts">
	// @ts-ignore
	import DefaultProfilePicture from "$lib/images/default_pfp.png?format=avif;webp;png&w=400;800&as=picture";
	import CarouselModal from "$lib/components/CarouselModal.svelte";
	import MemberCard from "$lib/components/MemberCard.svelte";
	import Metadata from "$lib/components/Metadata.svelte";
	import type StucoMember from "$lib/models/StucoMember.model";
	import { createScreenWidthQuery } from "$lib/state/screenWidth.svelte";
	import type { ImageMeta } from "$lib/types/image.types";
	import type { PageServerData } from "./$types";

	interface Props {
		data: PageServerData;
	}

	let { data }: Props = $props();
    let selectedImageIndex = $state<number | null>(null);

    let memberImageUrls = $derived(data.members.map(member => member.imageURL || (DefaultProfilePicture as ImageMeta)));

    let mediaMaxLarge = createScreenWidthQuery(0, 1024);

    // Create derived value that defaults to false on the server to prevent
    // hydration_attribute_changed errors on the picture elements
    let mediaMaxLargeDefaultNull = $derived.by(() => {
        if (typeof window === 'undefined') {
            return null;
        }

        mediaMaxLarge.current;

        return mediaMaxLarge.current; 
    });


    // Force an update to refetch changed image urls and prevent a hydration_attribute_changed error
    if (typeof window !== 'undefined') {
		// stash the value...
		const initial = mediaMaxLargeDefaultNull;

		// unset it...
        // svelte-ignore
		mediaMaxLargeDefaultNull = null;

		$effect(() => {
			// ...and reset after we've mounted
			mediaMaxLargeDefaultNull = initial;
		});
	}

	let gridOffset = $derived.by(() => {
        // Currently on server -> no grid offset
        if (mediaMaxLargeDefaultNull === null) {
            return 0;
        }

        return mediaMaxLargeDefaultNull ? 0 : 3;
    }); 
	
	const TITLE = "About Us | RHHS StuCo";
	const DESCRIPTION = "Meet the members of the 2024-2025 Student Council!";
</script>

<Metadata
	title={TITLE}
	description={DESCRIPTION}
	url="https://rhhsstuco.ca/about-us"
	image={data.members[1].imageURL || DefaultProfilePicture}
/>

{#snippet clickableCard(member: StucoMember, index: number)}
    <button class="card-button" onclick={() => selectedImageIndex = index}>
        <MemberCard {member} loading={(mediaMaxLargeDefaultNull && index < 3) ? "eager" : "lazy" }/>
    </button>
{/snippet}

<main class="about-us">
	<h1>About Us</h1>

	<section class="members">
		<h2>Members</h2>
		<div class="members__display">
            {#key mediaMaxLargeDefaultNull}
			{#if !mediaMaxLargeDefaultNull}
				<div class="members__display__row">
					{#each data.members.slice(0, gridOffset) as member, index (member.id)}
                        {@render clickableCard(member, index)}
					{/each}
				</div>
            {/if}
			<div class="members__display__grid">
				{#each data.members.slice(gridOffset) as member, index (member.id)}
                    {@render clickableCard(member, index + gridOffset)}
				{/each}
			</div>
            {/key}
		</div>	
	</section>

    <CarouselModal imageURLs={memberImageUrls} bind:selectedImageIndex={selectedImageIndex}/>

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

    .card-button {
        all: unset;

        &:hover {
            cursor: pointer;
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