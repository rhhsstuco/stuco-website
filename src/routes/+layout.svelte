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

    interface Props {
        children: Snippet;
    }

    let { children }: Props = $props();

    $effect(() => {
        return reducedMotion.mount();
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

<!-- <div class="portal">
	<Flash
		closeable={false}
		id={'semi-formal-songs'}
	>
		<em>Suggest a song for Semi-Formal
			<a
				href="https://forms.gle/sks1RppkrrUQn5XAA"
				target="_blank"
				rel="noopener noreferrer"
				on:click|stopPropagation
			>
			here</a>!
		</em>
	</Flash>
</div> -->

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
