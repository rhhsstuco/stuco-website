<script lang="ts">
  	import Calendar from "$lib/components/Calendar/Calendar.svelte";
	import HomePageEvent from "$lib/components/HomePageEvent.svelte";
	import type { PageServerData } from "./$types";

	export let data: PageServerData;

</script>

<svelte:head>
	<title>Events</title>
	<meta name="description" content="Stay up to date on all school events here!">
</svelte:head>

<div>
	<Calendar events={data.events}/>
	<!-- {#each data.events as event}
		<HomePageEvent event={event}/>
	{/each} -->
</div>