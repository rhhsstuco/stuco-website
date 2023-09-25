<script lang="ts"> 
	export let src: string;
	export let alt: string = "";
	export let fallbackExtension: string = 'jpg';
	export let loading: "lazy" | "eager" | undefined = undefined;
</script>

<picture {...$$restProps}>
	<source srcset="{src}.avif" type="image/avif">
	<img
	src="{src}.{fallbackExtension}"
	{alt}
	{loading}
	/>
</picture>

<style lang="scss">
	picture {
		width: 100%;
		height: 100%;
		object-fit: contain;
		display: inline-block;
		
	}

    img, source {
		/* position: absolute; */

		width: 100%;
		height: 100%; 
		object-fit: cover;
    }
</style>