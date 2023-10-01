<script lang="ts">
  	import Calendar from "$lib/components/Calendar/Calendar.svelte";
	import type { PageServerData } from "./$types";

	export let data: PageServerData;

</script>

<svelte:head>
	<title>Events</title>
	<meta name="description" content="Stay up to date on all school events here!">
</svelte:head>

<main>
	<h1>Events</h1>
	<Calendar events={data.events}/>
</main>

<style lang="scss">
	@use "../../../styles/exports.scss" as exports;

	main {
		min-height: calc(100vh - 5.5rem);
	}

	h1 {
		margin-top: 2rem;
		@include exports.header;
	}
</style>