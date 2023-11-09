export function portal(node: HTMLElement, name = 'portal') {
	let teleportContainer = document.getElementById(name);
	teleportContainer?.appendChild(node);
	teleportContainer?.focus(); // optional
}