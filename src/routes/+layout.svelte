<script lang="ts">
	// Global Styling
	import '../app.scss';

 	import { onMount } from 'svelte';
	import themeStore, { type Theme } from '$lib/stores/theme.store';

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

	});
	

</script>

<slot/>