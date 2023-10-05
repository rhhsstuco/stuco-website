<script lang="ts">
  	import { base } from "$app/paths";
  	import ImageGrid from "$lib/components/ImageGrid.svelte";
  	import type { PageServerData } from "./$types";
  	import { mediaSmallest, mediaSmall, mediaMedium, mediaLarge, mediaLarger, mediaLargest, mediaSmaller } from "$lib/stores/screenWidth.store";
  	
	import { onDestroy } from "svelte";
	import type { Unsubscriber } from "svelte/store";

	export let data: PageServerData;

	let columns = 5;

	function changeColumns(numColumns: number) {
		return (matches: boolean) => {
			if (matches) {
				columns = numColumns;
			}
		}
	}

	const mediaUnsubscribe: Unsubscriber[] = [];

	mediaUnsubscribe.push(mediaLargest.subscribe(changeColumns(4)));
	mediaUnsubscribe.push(mediaLarger.subscribe(changeColumns(4)));
	mediaUnsubscribe.push(mediaLarge.subscribe(changeColumns(3)));
	mediaUnsubscribe.push(mediaMedium.subscribe(changeColumns(3)));
	mediaUnsubscribe.push(mediaSmall.subscribe(changeColumns(2)));
	mediaUnsubscribe.push(mediaSmaller.subscribe(changeColumns(2)));
	mediaUnsubscribe.push(mediaSmallest.subscribe(changeColumns(1)));

	onDestroy(() => {
		mediaUnsubscribe.forEach(fn => fn())
	})

</script>

<svelte:head>
	<title>Gallery</title>
	<meta name="description" content="A look into our 2022-2023 school year.">
</svelte:head>

<main class="gallery">
	<h1>Gallery</h1>
	<div class="gallery__image-grid">
		<ImageGrid imageURLs={data.imageURLs} {columns}/>
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
			margin-top: 2rem;
			@include exports.header;
		}
	}

	.gallery__image-grid {
		margin: 0 auto;
	}
</style>