<script lang="ts">
  import { base } from "$app/paths";
	import Carousel from "$lib/components/Carousel/Carousel.svelte";
	import HomePageEvent from "$lib/components/HomePageEvent.svelte";
  	import MediaQuery from "$lib/components/MediaQuery.svelte";
	import Navbar from "$lib/components/Navbar/Navbar.svelte";
	import type { PageServerData } from "./$types";

	export let data: PageServerData;

	$: data.events = data.events.map((event) => ({
		...event,
		startDate: new Date(event.startDate),
		endDate: new Date(event.endDate),
	}));
</script>

<svelte:head>
	<title>RHHS StuCo</title>
	<meta name="description" content="StuCo is a group of students who come together and act as the liason between admin and the student body.">
	{#each data.imageURLs.map(url => `${base}/${url}`) as url}
		<link rel="preload" as="image" href={`${url}.avif`} />
	{/each}
</svelte:head>

<main>
  <div class="hero__navbar">
	<!-- Header -->
    <header>
      <Navbar />
    </header>

    <!-- Hero Section -->
    <div class="vector-container">
      <img class="vector" src="{base}/images/bg-vector.svg" alt=""/>
    </div>
	<div class="hero-image-container">
		<img class="people-laptop" src="{base}/images/home-page-people-laptop.png" alt=""/>
	</div>
    <section class="hero">
      <h1>RHHS STUCO</h1>
    </section>
  </div>

  <!-- Upcoming events -->
  <section class="events">
    <h2>Upcoming Events</h2>
    <div class="events__list">
		{#each data.events as event}
		  <HomePageEvent {event} />
		{/each}
	</div>
  </section>

  <!-- Image Gallery -->
  <section class="gallery">
	<h2>Gallery</h2>
	<MediaQuery query="(max-width: 864px)" let:matches>
		<Carousel imageURLs={data.imageURLs} arrowStyling={matches ? 'inside' : 'outside'}/>
	</MediaQuery>
  </section>
</main>

<style lang="scss">
	@use "../styles/exports.scss" as exports;
	@use "sass:color";

	.vector-container {
		position: absolute;
		top: 0;
		right: 0;
		z-index: 1;
		width: clamp(28rem, 48%, 60rem);
		aspect-ratio: 1 / 1;

		img {
			width: 100%;
			object-fit: cover;
		}
	}

	.hero-image-container {
		position: absolute;
		top: 18%;
		right: 16%;
		z-index: 1;
		width: clamp(14rem, 22%, 24rem);
		aspect-ratio: 1 / 1;

		img {
			width: 100%;
			object-fit: cover;
		}
	}

	.hero__navbar {
		background-color: var(--color-accent);
		height: clamp(20rem, 100vh, 70rem);
		max-width: 160rem;

		header {
			position: relative;
			z-index: 20;

			color: var(--color-accent);
		}
	}

	.hero {
		/* Grid layout to layout the text and image */
		$dimensions: 24;

		--font-size-hero: 12rem;

		display: grid;
		grid-template-columns: repeat($dimensions, calc(100vw / $dimensions));
		grid-template-rows: repeat(
			$dimensions,
			calc(calc(min(100vh, 70rem) - 5.5rem) / $dimensions)
		);

		overflow-x: visible;

		h1 {
			grid-row: 6 / 18;
			grid-column: 4 / 14;

			font-size: var(--font-size-hero);
			font-weight: 900;
			font-family: "Poppins";
			line-height: 0.85;

			background: var(--color-primary);
			background: linear-gradient(
				135deg,
				var(--color-primary) 30%,
				var(--color-gradient-light) 100%
			);
			background-clip: text;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
		}
	}
	h2 {
		@include exports.header();
	}

	.events {
		font-family: 'Poppins', sans-serif;
		
		width: clamp(32rem, 60%, 56rem);
		margin: 0 auto;

		display: flex;
		flex-direction: column;
		gap: 4rem;

		padding: 5rem 0;


		.events__list {
			display: flex;
			flex-direction: column;
			gap: 2rem;
		}
	}

	.gallery {
		font-family: 'Poppins', sans-serif;
		
		width: clamp(48rem, 65%, 64rem);
		margin: 0 auto;

		display: flex;
		flex-direction: column;
		gap: 2rem;

		padding: 5rem 0;
	}

	@include exports.media(1680px, 1712px) {
		.hero h1 {
			--font-size-hero: 11rem;
			grid-column: 3 / 14;
		}
	}

	@include exports.media(1536px, 1680px) {
		.hero h1 {
			--font-size-hero: 11rem;
			grid-column: 3 / 14;
		}
	}
	
	@include exports.media(exports.$breakpoint-largest, 1536px) {
		.hero h1 {
			--font-size-hero: 10rem;
			grid-column: 3 / 14;
		}
	}

	@include exports.media-largest {
		.hero h1 {
			--font-size-hero: 9rem;
			grid-column: 3 / 14;
			grid-row: 8 / 20;
		}
		
		.hero-image-container {
			width: clamp(14rem, 25%, 24rem);
			
			top: 24%;
			right: 12%;
		}
	}
	
	@include exports.media-larger {
		.hero h1 {
			--font-size-hero: 8rem;
		}
	}
	
	@include exports.media-large {
		.hero h1 {
			--font-size-hero: 7rem;
		}

		main {
			--font-size-header: 3.5rem;
		}

		.events {
			--event-day-font-size: 2.5rem;
			--event-month-font-size: 1.125rem;
			--event-title-font-size: 1.75rem;
			--event-description-font-size: 1.05rem;
		}
	}
	
	// Shift layout of hero
	@include exports.media-max(864px) {
		// The top margin from the bottom of the navbar
		$top-margin: 2rem;

		.hero h1 {
			--font-size-hero: 6.5rem;

			grid-column: 7 / 19;
			grid-row: 16 / 22;

			text-align: center;
		}

		.vector-container {
			width: clamp(20rem, 60%, 54rem);
		}

		.hero-image-container {
			width: clamp(14rem, 35%, 30rem);

			top: calc(5.5rem + $top-margin);
			left: 0;
			right: 0;
			margin: 0 auto;
		}

		.gallery {
			font-family: 'Poppins', sans-serif;
			
			width: clamp(20rem, 60%, 54rem);
			margin: 0 auto;

			display: flex;
			flex-direction: column;
			gap: 2rem;

			padding: 5rem 0;
		}
	}

	@include exports.media-medium {
		.hero h1 {
			--font-size-hero: 6rem;

			grid-column: 5 / 21;

			text-align: center;
		}

		main {
			--font-size-header: 3rem;
		}

		.events {
			padding-bottom: 0;
		}
	}

	@include exports.media-small {
		.hero h1 {
			--font-size-hero: 5.5rem;
		}

		.vector-container {
			width: clamp(10rem, 55%, 54rem);
		}

		.events {
			width: clamp(16rem, 80%, 56rem);

			--event-day-font-size: 2.25rem;
			--event-month-font-size: 1rem;
			--event-title-font-size: 1.5rem;
			--event-description-font-size: 0.95rem;
		}

		.gallery {			
			width: clamp(16rem, 75%, 54rem);
		}
	}

	@include exports.media-smallest {
		.hero h1 {
			--font-size-hero: 4.5rem;

			grid-column: 3 / 24;
		}

		main {
			--font-size-header: 2.5rem;
		}

		.vector-container {
			width: clamp(8rem, 45%, 54rem);
		}

		.events {
			--event-day-font-size: 2rem;
			--event-month-font-size: 0.9rem;
			--event-title-font-size: 1.25rem;
			--event-description-font-size: 0.85rem;
		}
	}

	@media screen and (max-width: exports.$breakpoint-medium) and (max-height: exports.$breakpoint-large) {
		.hero h1 {
			grid-row: 13 / 19;
		}

		.events {
			--event-day-font-size: 2rem;
			--event-month-font-size: 0.9rem;
			--event-title-font-size: 1.25rem;
			--event-description-font-size: 0.85rem;
		}
	}

	@media screen and (max-width: exports.$breakpoint-small) and (max-height: 724px) {
		.hero h1 {
			grid-row: 14 / 24;
		}

		.hero-image-container {	
			width: clamp(12rem, 30%, 30rem);

			top: 9rem;
			left: 0;
			right: 0;
			margin: 0 auto;
		}
	}

	@media screen and (max-width: exports.$breakpoint-small) and (max-height: 624px) {
		.hero h1 {
			grid-row: 14 / 24;
		}

		.hero-image-container {	
			width: clamp(11rem, 30%, 30rem);

			top: 6rem;

		}

	}

	@media screen and (max-width: exports.$breakpoint-small) and (max-height: 512px) {
		.hero h1 {
			grid-row: 16 / 24;
		}

		.hero-image-container {	
			width: clamp(11rem, 30%, 30rem);

			top: 5rem;

		}

	}

	@media only screen and (min-width: 1000px) and (min-height: 1200px) and (orientation: landscape) {	
		.hero__navbar {
			height: clamp(20rem, 100vh, 40rem);
		}

		.hero h1 {
			grid-row: 3 / 20;
			grid-column: 2 / 14;
		}

		.hero-image-container {
			right: 4rem;
			margin: 0;
			top: 14%;
			left: auto;
			width: clamp(12rem, 22%, 20rem);
		}

		.vector-container {
			width: clamp(22rem, 45%, 60rem);
		}
	}

	@media only screen and (max-height: 750px) and (orientation: landscape) {	
		.hero h1 {
			grid-row: 1 / -1;
			grid-column: 2 / 14;
			text-align: start;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;

		}

		.hero-image-container {
			right: 4rem;
			margin: 0;
			left: auto;
			width: clamp(12rem, 22%, 20rem);
		}

		.vector-container {
			width: clamp(22rem, 22%, 60rem);
		}
	}

	@media only screen and (max-height: 750px) and (max-width: exports.$breakpoint-medium) and (orientation: landscape) {	
		.hero h1 {
			--font-size-hero: 5rem;
		}

		.hero-image-container {
			top: 22%;
			width: clamp(10rem, 22%, 20rem);
		}

		.vector-container {
			width: clamp(16rem, 22%, 60rem);
		}
	}

	@media only screen and (max-height: 750px) and (max-width: exports.$breakpoint-medium) and (orientation: landscape) {	
		.hero h1 {
			--font-size-hero: 4rem;

			grid-row: 6 / 20;
			grid-column: 2 / 14;
		}

		.hero-image-container {
			right: 4rem;
			top: 22%;
			margin: 0;
			right: 1rem;
			width: clamp(10rem, 20%, 20rem);
		}

		.vector-container {
			width: clamp(14rem, 22%, 60rem);
		}
	}

	@media only screen and (min-height: 70rem) and (orientation: portrait) {
		.hero-image-container {
			top: 15%;
		}
	}

</style>
