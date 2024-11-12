import type { ActionReturn } from 'svelte/action';


interface Attributes {
    'onclick_outside': (e: CustomEvent) => void;
}

/** Dispatch event on click outside of node */
export default function clickOutside(node: HTMLElement): ActionReturn<undefined, Attributes> {
	const handleClick = (event : MouseEvent) => {
	  if (node && !node.contains(event.target as Node) && !event.defaultPrevented) {
		node.dispatchEvent(
		  new CustomEvent('click_outside')
		)
	  }
	}
  
	document.addEventListener('click', handleClick, true);
	
	return {
	  destroy() {
		document.removeEventListener('click', handleClick, true);
	  }
	}
}