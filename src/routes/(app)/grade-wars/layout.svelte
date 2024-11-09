<script lang="ts">
  	import reducedMotion from "$lib/state/reducedMotion.svelte";
  	import Confetti from "svelte-confetti";
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

{#if !reducedMotion.value}
	<div class="confetti">
		<Confetti x={[-6, 6]} y={[0, 0.4]} delay={[0, 4000]} infinite duration={5000} amount={400} fallDistance="100vh" />
	</div>
{/if}

{@render children?.()}

<style lang="scss">
	div.confetti {
		position: fixed;
		top: -50px;
		left: 0;
		height: 100vh;
		width: 100vw;
		display: flex;
		justify-content: center;
		overflow: hidden;
		pointer-events: none;
	}
</style>