<script lang="ts">
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

	function addNewListener(query: string) {
		mediaQuery = window.matchMedia(query);

		queryListener = v => matches = v.matches;
		mediaQuery.addEventListener("change", queryListener);

		matches = mediaQuery.matches;
	}

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