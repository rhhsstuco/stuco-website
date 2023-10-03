<script lang="ts">
	import Image from "$lib/components/Image.svelte";
	import clickOutside from "$lib/actions/clickOutside";
  	import Dialog from "./Dialog.svelte";

	export let imageURLs: string[];
	export let columns = 5;

	$: imageLength = imageURLs.length;

	const splitImages = (imageURLS: string[], columns: number) => {
		const imagesPerColumn = Math.floor(imageLength / columns);
		const remainderImages = imageLength % columns;

		const images: string[][] = [];

		for (let i = 0; i < columns; i++) {
			images[i] = imageURLS.slice(i * imagesPerColumn, (i + 1) * imagesPerColumn);
		}

		for (let i = 0; i < remainderImages; i++) {
			images[i].push(imageURLS[(imagesPerColumn * columns) + i]);
		}

		return images;
	}

	$: imageGrid = splitImages(imageURLs, columns);

	let selectedImageURL: string;
	let dialog: HTMLDialogElement;

	function onImageClick(url: string) {
		selectedImageURL = url;

		return (e: Event) => dialog.showModal();
	}

	
	

</script>

<section class="gallery" style:--columns={columns}>
	{#each imageGrid as imageColumn}
		<div class="gallery__column">
			{#each imageColumn as image, index}
				<button class="gallery__column__image" on:click={onImageClick(image)}>
					<Image src={image} loading={index < 2 ? "eager" : "lazy"}/>
				</button>
			{/each}
		</div>
	{/each}
	<Dialog bind:dialog>
		{#if selectedImageURL}
			<div class="dialog__image" use:clickOutside on:click_outside={dialog.close()}>
				<Image src={selectedImageURL}/>
			</div>
		{/if}
	</Dialog>
</section>

<style lang="scss">
	@use "../../styles/exports.scss" as exports;

	.gallery {
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 0.25rem;
		margin: 0 auto;
	}

	.gallery__column {
		display: flex;
		flex-direction: column;
		flex-basis: calc(100% / var(--columns));
	
		gap: 0.25rem;
	}

	.gallery__column__image {
		all: unset;

		&:hover {
			cursor: pointer;
		}
	}

	.dialog__image {
		max-width: 34rem;
		height: auto;
		
		object-fit: cover;
	}
</style>
