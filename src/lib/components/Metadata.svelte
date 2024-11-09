<script lang="ts">
  	import { dev } from "$app/environment";
  	import { DOMAIN } from "$lib/constants";
  	import type { ImageMeta } from "$lib/types/image.types";
    import type { Snippet } from "svelte";

	interface Props {
		title: string;
		description: string;
		url: string;
		image?: ImageMeta;
		children?: Snippet;
	}

	let {
		title,
		description,
		url,
		image,
		children
	}: Props = $props();
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description}>
	<meta property="og:title" content={title}>
	<meta property="og:description" content={description}>
	<meta property="og:type" content="website">
	{#if image}
		<meta property="og:image" content={`${DOMAIN}${image.img.src}`}>
		<meta property="thumbnail" content={`${DOMAIN}${image.img.src}`}>
	{/if}
	{#if !dev}
		<meta property="og:url" content={url}>
	{/if}

	{@render children?.()}
</svelte:head>