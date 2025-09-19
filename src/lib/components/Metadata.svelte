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
		<meta property="og:image" content={`${dev ? DOMAIN : ''}${image.img.src}`}>
		<meta property="thumbnail" content={`${dev ? DOMAIN : ''}${image.img.src}`}>
	{/if}
	{#if !dev}
		<meta property="og:url" content={url}>
	{/if}

	<script type="application/ld+json">
        {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Richmond Hill High School Student Council",
            "alternateName": "RHHS StuCo",
            "url": DOMAIN,
            "sameAs": [
				"https://richmondhill-hs.yrdsb.ca/",
				"https://en.wikipedia.org/wiki/Richmond_Hill_High_School_(Ontario)",
                "https://www.instagram.com/rhhs_stuco/",
                "https://www.linkedin.com/company/rhhs-stuco/",
				"https://github.com/rhhsstuco"
            ]
        })}
    </script>

	{@render children?.()}
</svelte:head>