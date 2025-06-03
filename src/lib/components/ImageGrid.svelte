<script lang="ts">
	/** 
	 * Image display in the gallery. The layout is created by a row of column flexboxes.
	 * The challenge is to then distribute images across the columns such that the vertical progression in images
	 * roughly matches their input order.
	 */

	import type { ImageMeta } from "$lib/types/image.types";
	import flatPartitions from "$lib/util/flatPartitions";
	import { SvelteMap } from "svelte/reactivity";
	import Picture from "./Picture.svelte";
    import CarouselModal from "./CarouselModal.svelte";

	interface Props {
		imageURLs: ImageMeta[];
		columns?: number;
	}

	interface IndexedImageMeta {
		url: ImageMeta;
		index: number;
	}

	let { imageURLs, columns = 4 }: Props = $props();

	let indexedImageURLs = $derived<IndexedImageMeta[]>(imageURLs.map((url, index) => ({ index, url })))
	let imageLength = $derived(imageURLs.length);

	/** 
	 * Splits in images into columns so the vertical progression in images roughly matches their input order.
	 * @param indexedImageURLs the images to distribute
	 * @param columns the number of columns
	 */
	const splitImages = (indexedImageURLs: IndexedImageMeta[], columns: number) => {
		const imagesPerColumn = Math.floor(imageLength / columns);
		const remainderImages = imageLength % columns;

		const images: IndexedImageMeta[][] = [];
		indexedImageURLs = flatPartitions(indexedImageURLs, columns);
		
		// Slice each partition into its own column
		for (let i = 0; i < columns; i++) {
			images[i] = indexedImageURLs.slice(i * imagesPerColumn, (i + 1) * imagesPerColumn);
		}

		// Add remainder images
		for (let i = 0; i < remainderImages; i++) {
			images[i].push(indexedImageURLs[(imagesPerColumn * columns) + i]);
		}

		return images;
	}

	let imageGrid = $derived(splitImages(indexedImageURLs, columns));

	let selectedImageIndex = $state<number | null>(null);
</script>

{#if imageLength === 0}
	<div class="gallery__no-images">
		<h3 class="gallery__no-images__message">No Images Yet</h3>
	</div>
{:else}
	<section class="gallery">
		{#each imageGrid as imageColumn}
		<div class="gallery__column">
			{#each imageColumn as image, i (image.url.img.src)}
			<button class="gallery__column__image" onclick={() => selectedImageIndex = image.index} aria-label="Select this image">
				<Picture meta={image.url} loading={i < 3 ? "eager" : "lazy"}/>
			</button>
			{/each}
		</div>
		{/each}
		<CarouselModal imageURLs={imageURLs} bind:selectedImageIndex={selectedImageIndex}/>
	</section>
{/if} 

<style lang="scss">
	@use "../../styles/exports.scss" as exports;

	.gallery {
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 0.25rem;
		margin: 0 auto;
		width: 100%
	}

	.gallery__column {
		display: flex;
		flex-direction: column;
		flex-basis: calc(100% / var(--columns));
	
		gap: 0.25rem;
	}

	.gallery__no-images {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		min-height: 100lvh;
	}

	.gallery__no-images__message {
		@include exports.not-found-message;
		margin-top: 1rem;
	}

	.gallery__column__image {
		all: unset;

		&:hover {
			cursor: pointer;
		}
	}
</style>
