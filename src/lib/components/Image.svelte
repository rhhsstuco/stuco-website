<script lang="ts"> 
	export let src: string;
	export let alt: string = "";
</script>

<picture>
	<source srcset="{src}.avif" type="image/avif">
	<img
	src="{src}.jpg"
	alt="{alt}"
	/>
</picture>

<style lang="scss">
	picture {
		width: 100%;
	}

    img, source {
		/* position: absolute; */

		width: 100%;
		height: 100%; 
		object-fit: cover;
    }
</style>