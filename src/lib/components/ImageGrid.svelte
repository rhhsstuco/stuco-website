<script lang="ts">
	/** 
	 * Image display in the gallery. The layout is created by a row of column flexboxes.
	 * The challenge is to then distribute images across the columns such that the vertical progression in images
	 * roughly matches their input order.
	 */

	import clickOutside from "$lib/actions/clickOutside";
  	import Dialog from "./Dialog.svelte";
  	import type { ImageMeta } from "$lib/types/image.types";
  	import Picture from "./Picture.svelte";
  	import flatPartitions from "$lib/util/flatPartitions";
    import fitImageToWindow from "$lib/actions/fitImageToWindow";

	interface Props {
		imageURLs: ImageMeta[];
		columns?: number;
	}

	let { imageURLs, columns = 5 }: Props = $props();

	let imageLength = $derived(imageURLs.length);

	/** 
	 * Splits in images into columns so the vertical progression in images roughly matches their input order.
	 * @param imageURLs the images to distribute
	 * @param columns the number of columns
	 */
	const splitImages = (imageURLS: ImageMeta[], columns: number) => {
		const imagesPerColumn = Math.floor(imageLength / columns);
		const remainderImages = imageLength % columns;

		const images: ImageMeta[][] = [];
		imageURLS = flatPartitions(imageURLS, columns);
		
		// Slice each partition into its own column
		for (let i = 0; i < columns; i++) {
			images[i] = imageURLS.slice(i * imagesPerColumn, (i + 1) * imagesPerColumn);
		}

		// Add remainder images
		for (let i = 0; i < remainderImages; i++) {
			images[i].push(imageURLS[(imagesPerColumn * columns) + i]);
		}

		return images;
	}

	let imageGrid = $derived(splitImages(imageURLs, columns));

	let selectedImageURL = $state<ImageMeta>();
	let dialog = $state<HTMLDialogElement>();

	function onImageClick(url: ImageMeta) {
        return (e: Event) => {

            selectedImageURL = url;
            
            if (!dialog) {
                return;
            }
            
            dialog.showModal();
        }
	}
</script>

{#if imageLength === 0}
	<div class="gallery__no-images">
		<h3 class="gallery__no-images__message">No Images Yet</h3>
	</div>
{:else}
	<section class="gallery">
		{#each imageGrid as imageColumn}
		<div class="gallery__column">
			{#each imageColumn as image (image.img.src)}
			<button class="gallery__column__image" onclick={onImageClick(image)} aria-label="Select this image">
				<Picture meta={image}/>
			</button>
			{/each}
		</div>
		{/each}
		<Dialog bind:dialog={dialog!}>
			{#key selectedImageURL}
				{#if selectedImageURL}
				<div class="dialog__image" use:clickOutside onclick_outside={dialog!.close()} use:fitImageToWindow>
					<Picture meta={selectedImageURL}/>
				</div>
				{/if}
			{/key}
		</Dialog>
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

	.dialog__image {
		display: flex;
	} 

	:global(.dialog__image img) {
		display: block;
	}
</style>
