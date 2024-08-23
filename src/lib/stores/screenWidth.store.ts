import { onMount } from "svelte";
import { readable } from "svelte/store";

/** A width media query with a lower and upper bound  */
export const screenWidthQuery = (minWidth: number, maxWidth: number) => readable<boolean>(false, set => {

	const query = `(max-width: ${maxWidth}px) and (min-width: ${minWidth}px) `;

	onMount(() => {
		const initialMatch = window.matchMedia(query).matches;
		
		set(initialMatch)

		const updateMatch = (event: MediaQueryListEvent) => {

			set(event.matches);
		}
	
		const mediaQueryList = window.matchMedia(query);
		mediaQueryList.addEventListener('change', updateMatch);
	
		return () => {
			mediaQueryList.removeEventListener('change', updateMatch);
		}
	})
});

export const mediaSmallest = screenWidthQuery(0, 480);
export const mediaSmaller = screenWidthQuery(480, 640);
export const mediaSmall = screenWidthQuery(640, 768);
export const mediaMobile = screenWidthQuery(0, 768);
export const mediaMedium = screenWidthQuery(768, 1024);
export const mediaLarge = screenWidthQuery(1024, 1152);
export const mediaLarger = screenWidthQuery(1152, 1280);
export const mediaLargest = screenWidthQuery(1280, 100000000000000);
