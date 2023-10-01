<script lang="ts"> 
	export let src: string;
	export let alt: string = "";
	export let fallbackExtension: string = 'jpg';
	export let loading: "lazy" | "eager" | undefined = undefined;
</script>

<picture>
	<source srcset="{src}.avif" type="image/avif">
	<img
		{...$$restProps}
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
		width: 100%;
		height: 100%; 
		object-fit: cover;
		overflow: hidden;
    }
</style>