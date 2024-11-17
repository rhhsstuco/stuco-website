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
    import Card from "./Card.svelte";
  	import Page from "../../routes/+page.svelte";
  import { SvelteMap } from "svelte/reactivity";
  import Carousel from "./Carousel.svelte";

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
	let imageURLMap = $derived(new SvelteMap(indexedImageURLs.map((({ url, index }) => [index, url]))))
	let imageLength = $derived(imageURLs.length);
	let prevMouseOver = $state(false);
	let nextMouseOver = $state(false);

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
	let selectedImageURL = $derived.by(() => {
		if (selectedImageIndex === null) {
			return null;
		}

		return imageURLMap.get(selectedImageIndex) || null;
	});

	let dialog = $state<HTMLDialogElement>();

	function onImageClick(index: number) {
        return (e: Event) => {
            selectedImageIndex = index;
            
            if (!dialog) {
                return;
            }
            
            dialog.showModal();
        }
	}

	function onDialogClose() {
		selectedImageIndex = null;
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
			{#each imageColumn as image, i (image.url.img.src)}
			<button class="gallery__column__image" onclick={onImageClick(image.index)} aria-label="Select this image">
				<Picture meta={image.url} loading={i < 3 ? "eager" : "lazy"}/>
			</button>
			{/each}
		</div>
		{/each}
		<Dialog bind:dialog={dialog!} onClose={onDialogClose}>
			{#key selectedImageURL}
				{#if selectedImageIndex !== null && selectedImageURL != null}
                <Card>
					<div class="dialog__image" use:clickOutside onclick_outside={() => dialog!.close()} use:fitImageToWindow>
						{#if selectedImageIndex != 0}
							<button
								aria-label="view previous image"
								class="nav-button prev-nav-button"
								class:button-below={columns < 4}
								onclick={() => {
									if (selectedImageIndex !== null && selectedImageIndex > 0) {
										selectedImageIndex--;
									}
								}}
								onmouseenter={() => prevMouseOver = true}
								onmouseleave={() => prevMouseOver = false}
							>
								<i class="ri-arrow-left-circle-{prevMouseOver ? 'fill' : 'line'}"></i>
							</button>
						{/if}
                        <Picture meta={selectedImageURL}/>
						{#if selectedImageIndex != imageLength - 1}
							<button
								aria-label="view next image"
								class="nav-button next-nav-button"
								onclick={() => {
									if (selectedImageIndex !== null && selectedImageIndex < imageLength - 1) {
										selectedImageIndex++;
									}
								}}
								class:button-below={columns < 4}
								onmouseenter={() => nextMouseOver = true}
								onmouseleave={() => nextMouseOver = false}
							>
								<i class="ri-arrow-right-circle-{nextMouseOver ? 'fill' : 'line'}"></i>
							</button>
						{/if}
                    </div>
                </Card>
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
		position: relative;
	}

	:global(.dialog__image img) {
		display: block;
	}

	.nav-button {
		all: unset;

		position: absolute;
		top: 50%;
		translate: 0 -50%;

		&.button-below {
			top: auto;
			bottom: -1rem;
		}

		i {
			font-size: 6rem;
			color: var(--light-theme-color-light);
		}

		&:hover {
			cursor: pointer;
		}
	}

	.prev-nav-button {
		left: 0;
		translate: calc(-1 * (100% + 4rem)) -50%;

		&.button-below {
			translate: 0 100%;
			left: 4rem;
		}
	}

	.next-nav-button {
		right: 0;
		translate: calc(100% + 4rem) -50%;

		&.button-below {
			translate: 0 100%;
			right: 4rem;
		}
	}

	@include exports.media-small {
		.nav-button i {
			font-size: 5rem;
		}
		.prev-nav-button.button-below {
			left: 2.5rem;
		}

		.next-nav-button.button-below {
			right: 2.5rem;
		}
	}

	@include exports.media-smallest {
		.nav-button i {
			font-size: 4rem;
		}
		.prev-nav-button.button-below {
			left: 2rem;
		}

		.next-nav-button.button-below {
			right: 2rem;
		}
	}
</style>
