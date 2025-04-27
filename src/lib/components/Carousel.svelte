<script lang="ts">
	/** The gallery iamge carousel */

	import { mediaMobile } from "$lib/state/screenWidth.svelte";
	import Picture from "./Picture.svelte";
  	import { register } from 'swiper/element/bundle';
  	import type { ImageMeta } from "$lib/types/image.types";

	register();

	interface Props {
		imageURLs: ImageMeta[];
		initialSlide?: number;
	}

	let { imageURLs, initialSlide = 0 }: Props = $props();

	let showNavigation = $derived(!mediaMobile.current);
</script>

<div class="gallery">	
	<swiper-container
		class="carousel"
		slides-per-view={1}
		space-between={4}
		speed={300}
		initial-slide={initialSlide}
		loop={true}
		grab-cursor={true}
		autoplay={{
			delay: 3000,
		}}
		navigation={showNavigation}
	>
		{#if imageURLs.length === 0}
			<div class="gallery__placeholder">
				<h3 class="gallery__placeholder__text">No Images Yet</h3>
			</div>
		{/if}
		{#each imageURLs as src}
			<swiper-slide class="carousel__image">
				<div class="swiper-zoom-container">
					<Picture meta={src} loading="lazy"/>
				</div>
			</swiper-slide>
		{/each}
		<!-- </div> -->
	
	</swiper-container>

</div>

<style lang="scss">
	@use '../../styles/exports.scss' as exports;

	.gallery {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		--swiper-navigation-sides-offset: 1.5rem;
		--swiper-navigation-color: white;
	}
	
	.carousel {
		display: flex;
		flex-direction: row;
		position: relative;
		width: 100%;
		background-color: var(--color-light);

		box-shadow: exports.$box-shadow;
		border: 4px solid var(--color-light);
	}

	.carousel__image, .gallery__placeholder {
		position: relative;

		overflow: hidden;

		display: flex;
		flex-direction: row;

		flex-grow: 1;
		width: 100%;
		height: 100%;
		aspect-ratio: 16 / 9;

		background-color: var(--color-lighter-1);
	}

	.gallery__placeholder__text {
		width: 100%;
		height: 100%;

		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		@include exports.not-found-message;
	}
</style>
