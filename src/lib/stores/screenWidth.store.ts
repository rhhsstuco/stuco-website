import { onMount } from "svelte";
import { readable } from "svelte/store";


const maxWidthQuery = (minWidth: number, maxWidth: number) => readable<boolean>(false, set => {

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

export const mediaSmallest = maxWidthQuery(0, 480);
export const mediaSmaller = maxWidthQuery(480, 640);
export const mediaSmall = maxWidthQuery(640, 768);
export const mediaMedium = maxWidthQuery(768, 1024);
export const mediaLarge = maxWidthQuery(1024, 1152);
export const mediaLarger = maxWidthQuery(1152, 1280);
export const mediaLargest = maxWidthQuery(1280, 100000000000000);
