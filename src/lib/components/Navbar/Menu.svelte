<script lang="ts">
	import { base } from "$app/paths";
	import { page } from "$app/stores";
  	import { createEventDispatcher } from "svelte";
  	import { fly } from "svelte/transition";

	const dispatch = createEventDispatcher();

	function onClose() {
		dispatch('menu-close');
	}

	$: url = $page.url.pathname;
</script>


<div class="menu" transition:fly={{ x: 500, duration: 600 }}>
	<div class="menu__top">
		<button on:click={onClose}>
			<i class="ri-close-line"></i>
		</button>
	</div>
	<div class="menu__content">
		<ul class="menu__content__links">
			<li><a href="{base}/" class:active={url === `${base}/` || url === `${base}`}>Home</a></li>
			<li><a href="{base}/events" class:active={url === `${base}/events`}>Events</a></li>
			<li><a href="{base}/clubs" class:active={url === `${base}/clubs`}>Clubs</a></li>
			<li><a href="{base}/gallery" class:active={url === `${base}/gallery`}>Gallery</a></li>
			<li><a href="{base}/members" class:active={url === `${base}/members`}>Members</a></li>
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
			color: var(--color-text);
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