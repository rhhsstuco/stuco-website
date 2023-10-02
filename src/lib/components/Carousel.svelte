<script lang="ts">
	import { mediaMobile } from "$lib/stores/screenWidth.store";
	import { onDestroy } from "svelte";
	import Image from "./Image.svelte";
  	import { register } from 'swiper/element/bundle';

	register();

	export let imageURLs: string[];

	let showNavigation = true;

	const unsubscribe = mediaMobile.subscribe(matches => {
		showNavigation = !matches;
	})

	onDestroy(unsubscribe)
</script>

<div class="gallery">	
	<swiper-container
		class="carousel"
		slides-per-view={1}
		space-between={4}
		speed={300}
		loop={true}
		grab-cursor={true}
		autoplay={{
			delay: 3000,
		}}
		navigation={showNavigation}
	>
		<!-- <div class="carousel__image"> -->
		{#each imageURLs as src}
			<swiper-slide class="carousel__image">
				<div class="swiper-zoom-container">
					<Image src={src} loading="lazy"/>
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

	.carousel__image {
		position: relative;

		overflow: hidden;

		display: flex;
		flex-direction: row;

		flex-grow: 1;
		width: 100%;
		height: 100%;
		aspect-ratio: 16 / 9;

		background-color: var(--color-lighter-2);
	}
</style>
