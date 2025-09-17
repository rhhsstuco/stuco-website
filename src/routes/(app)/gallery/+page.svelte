<script lang="ts">
  	import ImageGrid from "$lib/components/ImageGrid.svelte";
  	import type { PageServerData } from "./$types";
  	import { mediaSmallest, mediaSmall, mediaMedium, mediaLarge, mediaLarger, mediaLargest, mediaSmaller, createScreenWidthQuery } from "$lib/state/screenWidth.svelte";
  	
  	import Metadata from "$lib/components/Metadata.svelte";

	interface Props {
		data: PageServerData;
	}

	let { data }: Props = $props();

	let columns = $state(4);

    const COLUMN_COUNTS: [
        ReturnType<typeof createScreenWidthQuery>,
        number
    ][] = [
        [mediaLargest, 4],
        [mediaLarger, 4],
        [mediaLarge, 3],
        [mediaMedium, 3],
        [mediaSmall, 2],
        [mediaSmaller, 2],
        [mediaSmallest, 1],
    ];

    COLUMN_COUNTS.map(([media, count]) => {
        $effect(() => {
            if (media.current) {   
                columns = count;
            }
        })
    })

	const TITLE = "Gallery | RHHS StuCo";
	const DESCRIPTION = "A look into our 2025-2026 school year.";
</script>

<Metadata
	title={TITLE}
	description={DESCRIPTION}
	url="https://rhhsstuco.ca/gallery"
	image={data.imageURLs[0]}
/>

<main class="gallery">
	<h1>Gallery</h1>
	<div class="gallery__image-grid">
		<ImageGrid imageURLs={data.imageURLs} {columns}/>
	</div>
</main>

<style lang="scss">
	@use "../../../styles/exports.scss" as exports;

	main {
		--columns: 4;

		display: flex;
		flex-direction: column;
		gap: 2.5rem;

		width: clamp(18rem, 90%, 1000rem);

		margin: 0 auto;

		margin-bottom: 8rem;
		
		h1 {
			margin-top: 2rem;
			@include exports.header;
		}
	}

	.gallery__image-grid {
		width: clamp(16rem, 75%, 84rem);
		margin: 0 auto;
	}

    @include exports.media-largest {
		main {
			--columns: 4;
		}
	}

    @include exports.media-larger {
		main {
			--columns: 3;
		}
	}

    @include exports.media-large {
		main {
			--columns: 3;
		}
	}

    @include exports.media-medium {
		main {
			--columns: 2;
		}
	}

    @include exports.media-small {
		main {
			--columns: 2;
		}
	}

    @include exports.media-smallest {
		main {
			--columns: 1;
		}
	}




</style>