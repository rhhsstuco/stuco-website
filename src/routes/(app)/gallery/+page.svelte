<script lang="ts">
  	import ImageGrid from "$lib/components/ImageGrid.svelte";
  	import type { PageServerData } from "./$types";
  	import { mediaSmallest, mediaSmall, mediaMedium, mediaLarge, mediaLarger, mediaLargest, mediaSmaller } from "$lib/state/screenWidth.svelte";
  	
  	import Metadata from "$lib/components/Metadata.svelte";

	interface Props {
		data: PageServerData;
	}

	let { data }: Props = $props();

	let columns = $state(4);

	function changeColumns(numColumns: number) {
		return (matches: boolean) => {
			if (matches) {
				columns = numColumns;
			}
		}
	}

    const COLUMN_COUNTS: [
        { readonly value: boolean },
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
            media.value;

            changeColumns(count);
        })
    })

	const TITLE = "Gallery | RHHS StuCo";
	const DESCRIPTION = "A look into our 2024-2025 school year.";
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

	@media (max-width: 1280px) {
		main {
			--columns: 4;
		}
	}

	@media (max-width: 1152px) {
		main {
			--columns: 3;
		}
	}

	@media (max-width: 1024px) {
		main {
			--columns: 3;
		}
	}

	@media (max-width: 768px) {
		main {
			--columns: 2;
		}
	}

	@media (max-width: 640px) {
		main {
			--columns: 2;
		}
	}
	@media (max-width: 480px) {
		main {
			--columns: 1;
		}
	}




</style>