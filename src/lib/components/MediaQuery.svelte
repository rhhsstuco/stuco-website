<script lang="ts">
  import type { Snippet } from "svelte";

	/** 
	 * Utility component which allows for reactive media queries in the markup 
	*/

	interface Props {
		query: string;
		children?: Snippet<[boolean]>;
	}

	let { query, children }: Props = $props();

	let mediaQuery: MediaQueryList;
	let queryListener: (res: MediaQueryListEvent) => void;
	let wasMounted = $state(false);
	let matches = $state(false);


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

    $effect(() => {
        wasMounted = true;

        return removeActiveListener;
    })

	$effect(() => {
		if (wasMounted) {
			removeActiveListener();
			addNewListener(query);
		}
	});
</script>

{@render children?.(matches)}