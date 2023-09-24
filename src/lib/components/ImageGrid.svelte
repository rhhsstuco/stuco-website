<script lang="ts">
	import { base } from "$app/paths";
	import Image from "$lib/components/Image.svelte";

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



	

</script>

<section class="gallery" style:--columns={columns}>
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
</style>
