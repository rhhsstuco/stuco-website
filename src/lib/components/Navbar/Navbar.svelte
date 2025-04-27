<script lang="ts">
	/** The navigation bar */
 	import { base } from "$app/paths";
 	import { page } from '$app/state';
 	import theme from "$lib/state/theme.svelte";
 	import { MediaQuery } from 'svelte/reactivity';
 	import Hamburger from "./Hamburger.svelte";
 	import Menu from "./Menu.svelte";

	// Reads theme data from the theme store
	let icon = $derived(theme.value === "dark" ? "ri-moon-fill" : "ri-moon-line");

    let pathname = $derived(page.url.pathname);

    $effect(() => {
        pathname;

        menuIsOpen = false;
    })

    // Close menu when url changes
    let menuIsOpen = $state(false);

    const mediaQuery = new MediaQuery('(min-width: 1024px) and (min-height: 577px)');
</script>

<nav>
	<div class="nav__logo">
		<a href="{base}/">RHHS STUCO</a>
	</div>
	<div class="nav__links">
		<ul>
            {#if mediaQuery.current}
                <li><a href="{base}/" class:active={pathname === `${base}/` || pathname === `${base}`}>Home</a></li>
                <li><a href="{base}/events" class:active={pathname === `${base}/events`}>Events</a></li>
                <li><a href="{base}/clubs" class:active={pathname === `${base}/clubs`}>Clubs</a></li>
                <li><a href="{base}/gallery" class:active={pathname === `${base}/gallery`}>Gallery</a></li>
                <li><a href="{base}/about-us" class:active={pathname === `${base}/about-us`}>About Us</a></li>
            {:else}
                <li>
                    <Hamburger bind:open={menuIsOpen}/>
                </li>
                {#if menuIsOpen}
                    <Menu onclose={() => menuIsOpen = false}/>
                {/if}
            {/if}
			<li>
				<button
					class="{icon} change-theme"
					aria-label="Change theme"
					onclick={theme.toggle}
				></button>
			</li>
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

		&.active::before {
			content: '';
			position: absolute;
			inset: 0;
			margin-bottom: -2px;
			border-bottom: 2px solid;
		}
	}

	nav li:hover {
		color: var(--color-nav-hover);
	}

	.nav__logo,
	.nav__links > ul {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.nav__logo {
		font-family: "Poppins";
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

	@include exports.media-max(1536px) {
		.nav__links > ul {
			gap: 2.5rem;
		}
	}
	

	@include exports.media-largest {
		nav {
			--font-size-links: 1rem;
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
