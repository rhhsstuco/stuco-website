<script lang="ts">
	import { base } from "$app/paths";
	import Image from "$lib/components/Image.svelte";

	export let imageURLs: string[];

	let columns = 5;

	$: imageLength = imageURLs.length;

	const splitImages = (imageURLS: string[]) => {
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

	$: imageGrid = splitImages(imageURLs);


	

</script>

<section class="gallery">
	{#each imageGrid as imageColumn}
		<div class="gallery__column">
			{#each imageColumn as image}
				<div class="gallery__column__image">
					<Image src="{base}/{image}"/>
				</div>
			{/each}
		</div>
	{/each}
</section>

<style lang="scss">
	.gallery {
		display: flex;
		flex-direction: row;
		gap: 0.25rem;
	}

	.gallery__column {
		display: flex;
		flex-direction: column;
	
		gap: 0.25rem;
	}
</style>
