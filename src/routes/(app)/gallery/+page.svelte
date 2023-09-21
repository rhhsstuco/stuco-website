<script lang="ts">
  	import { base } from "$app/paths";
  	import Image from "$lib/components/Image.svelte";
  	import type { PageServerData } from "./$types";

	export let data: PageServerData;

</script>

<svelte:head>
	<title>Gallery</title>
	<meta name="description" content="A look into our 2022-2023 school year.">
</svelte:head>

<main>
	{#each data.imageURLs as imageURL}
		<Image src="{base}/{imageURL}"/>
	{/each}
</main>