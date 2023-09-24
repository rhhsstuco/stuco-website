<script lang="ts">
  	import { base } from "$app/paths";
  	import Image from "$lib/components/Image.svelte";
  import ImageGrid from "$lib/components/ImageGrid.svelte";
  	import type { PageServerData } from "./$types";

	export let data: PageServerData;

	let columns = 5;

	$: imageLength = data.imageURLs.length;

	const splitImages = (imageURLS: string[]) => {
		const imagesPerColumn = imageLength / columns;
		const remainderImages = imageLength % columns;
	}
	

</script>

<svelte:head>
	<title>Gallery</title>
	<meta name="description" content="A look into our 2022-2023 school year.">
</svelte:head>

<main class="gallery">
	<h1>Gallery</h1>
	<div class="gallery__image-grid">
		<ImageGrid imageURLs={data.imageURLs}/>
	</div>
</main>

<style lang="scss">
	@use "../../../styles/exports.scss" as exports;

	main {
		display: flex;
		flex-direction: column;
		gap: 2.5rem;

		width: clamp(18rem, 90%, 1000rem);

		margin: 0 auto;

		margin-bottom: 8rem;
		
		h1 {
			@include exports.header;
		}
	}

	.gallery__image-grid {
		margin: 0 auto;
	}

</style>