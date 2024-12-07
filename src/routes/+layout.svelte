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
    import reducedMotion from '$lib/state/reducedMotion.svelte';
    import { mediaLarge, mediaLarger, mediaLargest, mediaMedium, mediaSmall, mediaSmaller, mediaSmallest, type createScreenWidthQuery } from '$lib/state/screenWidth.svelte';
  import { base } from '$app/paths';

    interface Props {
        children: Snippet;
    }

    let { children }: Props = $props();

    $effect(() => {
        return reducedMotion.mount();
    });

    const SCREEN_WIDTH_QUERIES: ReturnType<typeof createScreenWidthQuery>[] = [
        mediaLargest,
        mediaLarger,
        mediaLarge,
        mediaMedium,
        mediaSmall,
        mediaSmaller,
        mediaSmallest,
    ];

    SCREEN_WIDTH_QUERIES.forEach(query => {
        $effect(() => {
            return query.init();
        })
    })

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

<div class="portal">
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
</div>

<style lang="scss">
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
