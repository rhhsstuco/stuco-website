<script lang="ts">
	// Global Styling
	import '../app.scss';
	import '../fonts.scss';
	import 'remixicon/fonts/remixicon.css';

 	import { onMount } from 'svelte';
	import { onNavigate } from '$app/navigation';
	import themeStore, { type Theme } from '$lib/stores/theme.store';
  	import Footer from '$lib/components/Footer.svelte';
  	import Flash from '$lib/components/Flash.svelte';

	let showFlash = false;

	const onFlashClose = () => {
		showFlash = false;

		localStorage.setItem("showFlashOpenHouse", "0")
	}

	onMount(() => {
		let theme = <Theme> localStorage.getItem("theme") ?? "light";

		if ("matchMedia" in window) {
			if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
				theme = "dark"
			}
		}

		themeStore.set(theme)

		themeStore.subscribe(value => {
			localStorage.setItem("theme", value)

			document.documentElement.setAttribute("data-theme", value);
		})

		// Flash
		showFlash = localStorage.getItem("showFlashOpenHouse") != "0";
	});
	
	onNavigate((navigation) => {
		// @ts-ignore
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			// @ts-ignore
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<slot/>

<Footer/>

<div class="portal">
	{#if showFlash}
		<Flash
			text={'Welcome Grade Eights!!!!'}
			on:close={onFlashClose}
		/>
	{/if}
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
		animation: 50ms cubic-bezier(0.4, 0, 1, 1) both fade-out, 150ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
	}

	:root::view-transition-new(root) {
		animation: 120ms cubic-bezier(0, 0, 0.2, 1) 50ms both fade-in, 150ms cubic-bezier(0.4, 0, 0.2, 1) both
				slide-from-right;
	}

	.portal {
		position: relative;
	}
</style>