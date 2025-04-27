<script lang="ts">
	/** 
	 * A component that allows for images to be viewed in a modal and traversed through with buttons
	 */

	import clickOutside from "$lib/actions/clickOutside";
	import fitImageToWindow from "$lib/actions/fitImageToWindow";
	import type { ImageMeta } from "$lib/types/image.types";
	import { SvelteMap } from "svelte/reactivity";
	import Card from "./Card.svelte";
	import Modal from "./Modal.svelte";
	import Picture from "./Picture.svelte";

	interface Props {
		imageURLs: ImageMeta[];
        selectedImageIndex: number | null;
	}

	interface IndexedImageMeta {
		url: ImageMeta;
		index: number;
	}

	let { imageURLs, selectedImageIndex = $bindable() }: Props = $props();

	let indexedImageURLs = $derived<IndexedImageMeta[]>(imageURLs.map((url, index) => ({ index, url })))
	let imageURLMap = $derived(new SvelteMap(indexedImageURLs.map((({ url, index }) => [index, url]))))
	let imageLength = $derived(imageURLs.length);
	let prevMouseOver = $state(false);
	let nextMouseOver = $state(false);

	let selectedImageURL = $derived.by(() => {
		if (selectedImageIndex === null) {
			return null;
		}

		return imageURLMap.get(selectedImageIndex) || null;
	});

	let dialog = $state<HTMLDialogElement>();

    // Resets the next and previous button hover states when the image changed
    $effect(() => {
        selectedImageIndex;

        nextMouseOver = false;
        prevMouseOver = false;
    })

    $effect(() => {
        selectedImageIndex;
            
        if (!dialog || selectedImageIndex === null) {
            return;
        }
        
        dialog.showModal();
    })

	function onModalClose() {
		selectedImageIndex = null;
	}
</script>

<Modal bind:dialog={dialog!} onclose={onModalClose}>
    {#key selectedImageURL}
        {#if selectedImageIndex !== null && selectedImageURL !== null}
        <Card>
            <div class="dialog__image" use:clickOutside onclick_outside={() => dialog!.close()} use:fitImageToWindow>
                {#if selectedImageIndex !== 0}
                    <button
                        aria-label="view previous image"
                        class="nav-button prev-nav-button"
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
                {#if selectedImageIndex !== imageLength - 1}
                    <button
                        aria-label="view next image"
                        class="nav-button next-nav-button"
                        onclick={() => {
                            if (selectedImageIndex !== null && selectedImageIndex < imageLength - 1) {
                                selectedImageIndex++;
                            }
                        }}
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
</Modal>

<style lang="scss">
	@use "../../styles/exports.scss" as exports;

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
	}

	.next-nav-button {
		right: 0;
		translate: calc(100% + 4rem) -50%;
	}

	@include exports.media-larger {
        .nav-button {
			top: auto;
			bottom: -1rem;
        }

        .prev-nav-button {
			translate: 0 100%;
			left: 4rem;
		}

		.next-nav-button {
			translate: 0 100%;
			right: 2rem;
		}
    }

	@include exports.media-small {
		.nav-button i {
			font-size: 5rem;
		}
		.prev-nav-button {
			left: 2.5rem;
		}

		.next-nav-button {
			right: 2.5rem;
		}
	}

	@include exports.media-smallest {
		.nav-button i {
			font-size: 4rem;
		}

		.prev-nav-button {
			left: 2rem;
		}

		.next-nav-button {
			right: 2rem;
		}
	}
</style>
