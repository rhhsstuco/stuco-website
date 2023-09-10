<script lang="ts">

  import Image from "../Image.svelte";

  type CarouselArrowStyling = 'outside' | 'inside';

  export let imageURLs: string[];
  export let arrowStyling: CarouselArrowStyling = 'outside';


  let currentIndex = 0;

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
	<button
		class="carousel__left-arrow"
		class:inside={arrowStyling === 'inside'}
		on:click={prevImage}
	>
		<i class="ri-arrow-left-s-line" />
	</button>
	<div class="carousel__image">
		{#each [imageURLs[currentIndex]] as src (currentIndex)}
			<Image src={src}/>
		{/each}
	</div>

	<button
		class="carousel__right-arrow"
		class:inside={arrowStyling === 'inside'}
		on:click={nextImage}
	>
		<i class="ri-arrow-right-s-line" />
	</button>
</div>

<style lang="scss">
	@use '../../../styles/exports.scss' as exports;
	
	.carousel {
		display: flex;
		flex-direction: row;
		position: relative;
	}

	.carousel__left-arrow,
	.carousel__right-arrow {
		all: unset;
		min-width: 10rem;

		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		font-size: 400%;
	}

	.carousel__left-arrow.inside,
	.carousel__right-arrow.inside {
		position: absolute;
		z-index: 10;
	}

	.carousel__left-arrow.inside {
		top: 50%;
		left: -2%;
		transform: translateY(-50%);
	}
	
	.carousel__right-arrow.inside {
		top: 50%;
		right: -2%;
		transform: translateY(-50%);
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

	:is(.carousel__left-arrow.inside, .carousel__right-arrow.inside) i {

		&::after {
			content: '';

			inset: 0;

			width: 100%;
			height: 100%;

			position: absolute;

			background-color: rgba(0, 0, 0, 0.5);

			border-radius: 50%;
		}

		&:hover::after {
			background-color: rgba(0, 0, 0, 0.75);
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
