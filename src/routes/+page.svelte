<script lang="ts">
  import Carousel from "$lib/components/Carousel/Carousel.svelte";
  import HomePageEvent from "$lib/components/HomePageEvent.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import type { PageServerData } from "./$types";

  export let data: PageServerData;

  $: console.log(data)

  $: data.events = data.events.map((event) => ({
    ...event,
    startDate: new Date(event.startDate),
	endDate: new Date(event.endDate),
  }));
</script>

<svelte:head>
	<link rel="preconnect" href="https://drive.google.com">
</svelte:head>

<main>
  <div class="hero__navbar">
	<!-- Header -->
    <header>
      <Navbar />
    </header>

    <!-- Hero Section -->
    <div class="vector-container">
      <img src="images/bg-vector.svg" />
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

  <section class="gallery">
	<h2>Gallery</h2>
	{#await Promise.all(data.imageURLs)}
		<p>waiting...</p>
	{:then urls}
		<Carousel imageURLs={urls}/>
	{/await}
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
  }

  .hero__navbar {
    background-color: var(--color-accent);

    header {
      position: relative;
      z-index: 20;

      color: var(--color-accent);
    }
  }

  .hero {
    /* Grid layout to layout the text and image */
    $dimensions: 24;

    display: grid;
    grid-template-columns: repeat($dimensions, calc(100vw / $dimensions));
    grid-template-rows: repeat(
      $dimensions,
      calc(calc(100vh - 6rem) / $dimensions)
    );

    max-height: calc(100vh - 6rem);

    h1 {
      grid-row: 7 / 16;
      grid-column: 4 / 12;

      font-size: 10rem;
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

  .events {
	font-family: 'Poppins', sans-serif;
	
	width: clamp(32rem, 60%, 56rem);
	margin: 0 auto;

	display: flex;
	flex-direction: column;
	gap: 4rem;

	padding: 5rem 0;

	h2 {
		text-transform: uppercase;
		font-size: 4rem;
		font-weight: 900;
		color: var(--color-primary);
		text-align: center;
	}

	.events__list {
	  display: flex;
	  flex-direction: column;
	  gap: 2rem;
	}
  }

  .gallery {
	font-family: 'Poppins', sans-serif;
	
	width: clamp(32rem, 60%, 56rem);
	margin: 0 auto;
  }

</style>
