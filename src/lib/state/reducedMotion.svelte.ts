import { onMount } from "svelte";
import { readable } from "svelte/store"

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';


/** If the user prefers reduced motion  */
function createReducedMotionState() {
    let reducedMotionState = $state(false);

    return {
        get value() {
            return reducedMotionState;
        },
        mount() {
            const initialMotionPreference = window.matchMedia(REDUCED_MOTION_QUERY).matches;

            reducedMotionState = initialMotionPreference;
    
            const updateMotionPreference = (event: MediaQueryListEvent) => reducedMotionState = event.matches;
        
            const mediaQueryList = window.matchMedia(REDUCED_MOTION_QUERY);
            mediaQueryList.addEventListener('change', updateMotionPreference);
        
            return () => {
                mediaQueryList.removeEventListener('change', updateMotionPreference);
            }
        }
    }
}

const reducedMotion = createReducedMotionState();

export default reducedMotion;