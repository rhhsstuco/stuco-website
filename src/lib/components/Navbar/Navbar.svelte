<script lang="ts">
 	import themeStore from "$lib/stores/theme.store";
	import { base } from "$app/paths";
	import { page } from '$app/stores';  
	import MediaQuery from "../MediaQuery.svelte";
	import Hamburger from "./Hamburger.svelte";
	import Menu from "./Menu.svelte";

	let menuIsOpen: boolean = false;

	// Reads theme data from the theme store
	$: icon = $themeStore === "dark" ? "ri-moon-fill" : "ri-moon-line";

	/** 
	 * Updates the theme store with the new theme value once the theme is toggled
	*/
	function onThemeChange() {
		themeStore.update(oldValue => {
			if (oldValue === "dark") {
				return "light";
			}

			return "dark";
		})
	}

	$: url = $page.url.pathname;

	// Close menu when url changes
	$: {
		menuIsOpen = false;
		url = url;
	}
</script>

<nav>
	<div class="nav__logo">
		<a href="{base}/">RHHS STUCO</a>
	</div>
	<div class="nav__links">
		<ul>
			<MediaQuery query="(min-width: 1024px)" let:matches={matches1}>
			<MediaQuery query="(min-height: 577px)" let:matches={matches2}>
				{#if matches1 && matches2}
					<li><a href="{base}/" class:active={url === `${base}/` || url === `${base}`}>Home</a></li>
					<li><a href="{base}/events" class:active={url === `${base}/events`}>Events</a></li>
					<li><a href="{base}/clubs" class:active={url === `${base}/clubs`}>Clubs</a></li>
					<li><a href="{base}/gallery" class:active={url === `${base}/gallery`}>Gallery</a></li>
					<li><a href="{base}/members" class:active={url === `${base}/members`}>Members</a></li>
				{:else}
					<Hamburger bind:open={menuIsOpen}/>
					{#if menuIsOpen}
						<Menu on:menu-close={() => menuIsOpen = false}/>
					{/if}
				{/if}
			</MediaQuery>
			</MediaQuery>
			<button
				class="{icon} change-theme"
				on:click={onThemeChange}
			/>
		</ul>
	</div>
</nav>

<style lang="scss">
	@use "../../../styles/exports.scss" as exports;

	nav {
		--font-size-logo: 1.5rem;
		--font-size-links: 1.125rem;

		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 2rem 3rem;
		font-family: "Inter", sans-serif;
	}

	nav a {
		color: inherit;
		text-decoration: none;

		position: relative;

		box-sizing: border-box;

		&.active {
			border-bottom: 2px solid
		}

	}

	.nav__logo,
	.nav__links > ul {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.nav__logo a {
		font-size: var(--font-size-logo);
		font-weight: 900;
		color: var(--color-primary);
	}

	.nav__links > ul {
		gap: 3.125rem;

		a {
			font-size: var(--font-size-links);
			font-weight: lighter;
			color: inherit;
		}
	}

	.change-theme {
		all: unset;
		display: inline-block;
		color: inherit;
		font-size: var(--font-size-logo);

		&:hover {
			cursor: pointer;
		}
	}

	@include exports.media-largest {
		nav {
			--font-size-links: 1rem;
		}
		.nav__links > ul {
			gap: 2.5rem;
		}
	}
	

	@include exports.media-larger {
		.nav__links > ul {
			gap: 1.5rem;
		}
	}
	
	@include exports.media-max(calc(exports.$breakpoint-large - 1px)) {
		.nav__links > ul {
			gap: 1rem;
			flex-direction: row-reverse;
		}
	}

	@include exports.media-small {
		nav {
			padding-left: 2rem;
			padding-right: 2rem;
		}
	}

	@include exports.media-smallest {
		nav {
			--font-size-logo: 1.25rem;
		}
	}
</style>
