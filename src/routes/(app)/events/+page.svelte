<script lang="ts">
	import HomePageEvent from "$lib/components/HomePageEvent.svelte";
	import type { PageServerData } from "./$types";

	export let data: PageServerData;

</script>

<div>
	{#each data.events as event}
		<HomePageEvent event={event}/>
	{/each}
</div>