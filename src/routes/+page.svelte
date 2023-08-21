<script lang="ts">
  import HomePageEvent from "$lib/components/HomePageEvent.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import type { PageServerData } from "./$types";

  export let data: PageServerData;

  $: data.events = data.events.map((event) => ({
    ...event,
    date: new Date(event.date),
  }));
</script>

<main>
  <div class="hero__navbar">
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
    <h2>Events</h2>
    {#each data.events as event}
      <HomePageEvent {event} />
    {/each}
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
	
	width: clamp(52rem, 40%, 32rem);
	margin: 0 auto;

	display: flex;
	flex-direction: column;
	gap: 1rem;
  }
</style>
