<script lang="ts">
	/** <picture> wrapper for images processed by vite-imagetools */

	import type { ImageMeta } from '../types/image.types';

	interface Props {
		meta: ImageMeta;
		sizes?: string;
		alt?: string;
		loading?: 'lazy' | 'eager' | null | undefined;
	}

	let {
		meta,
		sizes = '(max-width: 600px) 400px, (max-width: 1200px) 800px, 1600px',
		alt = '',
		loading = 'eager'
	}: Props = $props();
	let sources = $derived(meta.sources);
	let fallback = $derived(meta.img);
</script>

<picture>
	{#each Object.entries(sources) as [type, srcMeta]}
		<source
			type="image/{type}"
			{sizes}
			srcset={srcMeta.map((meta) => {
				if (meta.dpr) {
					return `${meta.src} ${meta.dpr}x`
				}
				
				return `${meta.src} ${meta.w}w`
			}).join(', ')}
		/>
	{/each}
	<img src={fallback.src} {alt} {loading} width={fallback.w} height={fallback.h}/>
</picture>

<style lang="scss">
	picture {
		width: 100%;
		height: 100%;
		object-fit: contain;
		display: inline-block;		
	}

    img, source {
		width: 100%;
		height: 100%; 
		object-fit: cover;
		overflow: hidden;
    }
</style>