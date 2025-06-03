<script lang="ts">
	/** The menu that pops from the side in mobile UIs */

	import { base } from "$app/paths";
    import { page } from "$app/state";
 	import clickOutside from "$lib/attachments/clickOutside";
  	import { fly } from "svelte/transition";

    interface Props {
        onclose: () => void;
    }

    let pathname = $derived(page.url.pathname);

    let { onclose }: Props = $props();
</script>


<div class="menu" transition:fly={{ x: 500, duration: 600 }} {@attach clickOutside(onclose)}>
	<div class="menu__top">
		<button onclick={onclose} aria-label="closes the hamburger menu">
			<i class="ri-close-line"></i>
		</button>
	</div>
	<div class="menu__content">
		<ul class="menu__content__links">
			<li><a href="{base}/" class:active={pathname === `${base}/` || pathname === `${base}`}>Home</a></li>
			<li><a href="{base}/events" class:active={pathname === `${base}/events`}>Events</a></li>
			<li><a href="{base}/clubs" class:active={pathname === `${base}/clubs`}>Clubs</a></li>
			<li><a href="{base}/gallery" class:active={pathname === `${base}/gallery`}>Gallery</a></li>
			<li><a href="{base}/about-us" class:active={pathname === `${base}/about-us`}>About Us</a></li>
		</ul>
	</div>
</div>


<style lang="scss">
	@use '../../../styles/exports.scss' as exports;

	.menu {
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		background-color: var(--color-background);
		box-shadow: exports.$box-shadow;
		
		width: 30%;

		padding: 2rem;

		z-index: 9999999;
	}

	.menu__top {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;

		button {
			all: unset;
		}

		i {
			color: var(--color-dark);
			font-size: 2rem;
		}
	}

	.menu__content__links {
		font-size: var(--font-size-links);
		display: flex;
		flex-direction: column;
		gap: 1rem;
		

		a {
			font-size: var(--font-size-links);
			font-weight: lighter;
			color: var(--color-dark);
			text-decoration: none;
		}

		a.active {
			border-bottom: 2px solid
		}
	}

	@include exports.media-small {
		.menu {
			width: 60%;
		}
	}
</style>