<!-- @migration-task Error while migrating Svelte code: Unexpected token -->
<script lang="ts">
	// Global Styling
	import '../app.scss';
	import '../fonts.scss';
	import 'remixicon/fonts/remixicon.css';

	import { onNavigate } from '$app/navigation';
	import theme from '$lib/state/theme.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import Flash from '$lib/components/Flash.svelte';
    import type { Snippet } from 'svelte';
    import { base } from '$app/paths';
    import Confetti from 'svelte-confetti';
    import { prefersReducedMotion } from 'svelte/motion';

    interface Props {
        children: Snippet;
    }

    let { children }: Props = $props();

	$effect(() => {
        theme.mount();
    })

    $effect(() => {
        theme.mountEffects();
	});

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

{@render children?.()}

<Footer />

<!-- <div class="portal">
	<Flash
		closeable={false}
		id={'grade-wars'}
	>
		<em>Check out the
			<a
				href="{base}/grade-wars"
				onclick={e => e.stopPropagation()}
			>
			Grade Wars leaderboard</a>!
		</em>
	</Flash>
</div> -->

{#if !prefersReducedMotion.current}
	<div class="confetti">
		<Confetti
            x={[-6, 6]}
            y={[-0.1, 0.8]}
            delay={[0, 7000]}
            infinite
            rounded
            duration={20000}
            amount={100}
            size={25}
            fallDistance="100vh"
            colorArray={[
                `url("${base}/images/snowflake-line.png")`
            ]}/>
	</div>
{/if}

<style lang="scss">
    div.confetti {
		position: absolute;
        z-index: 10000;
		top: -50px;
		left: 0;
		height: 150vh;
		width: 100vw;
		display: flex;
		justify-content: center;
		overflow: hidden;
		pointer-events: none;
	}

    @keyframes fade-in {
        from {
            opacity: 0;
        }
    }

    @keyframes fade-out {
        to {
            opacity: 0;
        }
    }

    @keyframes slide-from-right {
        from {
            transform: translateX(20px);
        }
    }

    @keyframes slide-to-left {
        to {
            transform: translateX(-20px);
        }
    }

    :root::view-transition-old(root) {
        animation:
            50ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
            150ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
    }

    :root::view-transition-new(root) {
        animation:
            120ms cubic-bezier(0, 0, 0.2, 1) 50ms both fade-in,
            150ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
    }

    .portal {
        position: relative;
    }

    em {
        font-weight: bold;
    }
</style>
