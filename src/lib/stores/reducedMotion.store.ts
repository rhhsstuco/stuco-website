import { onMount } from "svelte";
import { readable, type Readable } from "svelte/store"

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)' 

let reducedMotion = readable(false, set => {
	onMount(() => {
		const initialMotionPreference = window.matchMedia(REDUCED_MOTION_QUERY).matches;

		set(initialMotionPreference)

		const updateMotionPreference = (event: MediaQueryListEvent) => {
			set(event.matches);
		}
	
		const mediaQueryList = window.matchMedia(REDUCED_MOTION_QUERY);
		mediaQueryList.addEventListener('change', updateMotionPreference);
	
		return () => {
			mediaQueryList.removeEventListener('change', updateMotionPreference);
		}
	})
});



export default reducedMotion;