<script lang="ts">
  import { base } from "$app/paths";
  import { slide } from "svelte/transition";
  import Image from "../Image.svelte";

  export let imageURLs: string[];


  let currentIndex = 0;
  $: nextIndex = mod(currentIndex + 1, imageURLs.length);
  $: prevIndex = mod(currentIndex - 1, imageURLs.length);

  /**
   * Modulo function which wraps around negative numbers to the divisor
   * @param n the divident
   * @param m the divisor
   */
  function mod(n: number, m: number) {
    return ((n % m) + m) % m;
  }

  /**
   * Increments the current image index, looping around if necessary
   */
  function nextImage() {
    currentIndex = mod(currentIndex + 1, imageURLs.length);
  }

  /**
   * Decrements the current image index, looping around if necessary
   */
  function prevImage() {
    currentIndex = mod(currentIndex - 1, imageURLs.length);
  }
</script>

<div class="carousel">
  <button class="carousel__left-arrow" on:click={prevImage}>
    <i class="ri-arrow-left-s-line" />
  </button>
  <div class="carousel__image">
    {#each [imageURLs[currentIndex]] as src (currentIndex)}
		<Image src={src}/>



    {/each}
  </div>
  <button class="carousel__right-arrow" on:click={nextImage}>
    <i class="ri-arrow-right-s-line" />
  </button>
</div>

<style lang="scss">
	@use '../../../styles/exports.scss' as exports;

	.hidden {
		display: none;
	}

	.carousel {
		display: flex;
		flex-direction: row;
	}

	.carousel__left-arrow,
	.carousel__right-arrow {
		all: unset;
		min-width: 10rem;

		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		font-size: 5rem;
	}

	:is(.carousel__left-arrow, .carousel__right-arrow) i {
		position: relative;

		&:hover {
			cursor: pointer;
		}

		&:hover::after {
			content: "";

			inset: 0;

			width: 100%;
			height: 100%;

			position: absolute;

			background-color: rgba(0, 0, 0, 0.125);

			border-radius: 50%;
		}
	}

	.carousel__image {
		position: relative;

		box-shadow: exports.$box-shadow;
		border: 4px solid var(--color-light);

		overflow: hidden;

		display: flex;
		flex-direction: row;

		flex-grow: 1;
		aspect-ratio: 16 / 9;

		background-color: var(--color-lighter-2);
	}
</style>
