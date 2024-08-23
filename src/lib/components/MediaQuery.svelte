<script lang="ts">
	/** 
	 * Utility component which allows for reactive media queries in the markup 
	*/

  	import { onDestroy, onMount } from "svelte";

	export let query: string;

	let mediaQuery: MediaQueryList;
	let queryListener: (res: MediaQueryListEvent) => void;
	let wasMounted = false;
	let matches = false;

	$: {
		if (wasMounted) {
			removeActiveListener();
			addNewListener(query);
		}
	}

	/** 
	 * Adds a new media query change listener
	 */
	function addNewListener(query: string) {
		mediaQuery = window.matchMedia(query);

		queryListener = v => matches = v.matches;
		mediaQuery.addEventListener("change", queryListener);

		matches = mediaQuery.matches;
	}

	/** 
	 * Removes the current medai query change listener
	 */
	function removeActiveListener() {
		if (mediaQuery && queryListener) {
			mediaQuery.removeEventListener("change", queryListener);
		}
	}

	onMount(() => {
		wasMounted = true;
	})

	onDestroy(() => {
		removeActiveListener()
	})
</script>

<slot {matches}/>