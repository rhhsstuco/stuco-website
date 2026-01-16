import type { Attachment } from 'svelte/attachments';

/** Dispatch event on click outside of node */

const clickOutside = (onClickOutside: () => void): Attachment<HTMLElement> => {
    return (node: HTMLElement) => {
        const handleClick = (event : MouseEvent) => {
            if (node && !node.contains(event.target as Node) && !event.defaultPrevented) {
                onClickOutside();
            }
        }
    
        document.addEventListener('click', handleClick, true);
        
        return () => document.removeEventListener('click', handleClick, true);
    }
}

export default clickOutside;