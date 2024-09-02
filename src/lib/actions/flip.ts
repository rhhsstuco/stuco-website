import { linear } from "svelte/easing";

export default function flip(
	node: HTMLElement,
	params: { delay?: number; duration?: number; easing?: (t: number) => number },
) {
	return {
		delay: params.delay || 0,
		duration: params.duration || 400,
		easing: params.easing || linear,
		css: (t: number, u: number) => `
			transform: rotateY(${1 - (u * 180)}deg);
			opacity: ${1 - u};
		`
	};
}