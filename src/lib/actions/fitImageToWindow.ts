/** Fit image to screen size without changing the aspect ratio */
export default function fitImageToWindow(node: HTMLElement) {
	const picture = node.children[0] as HTMLElement;
	
	const onResize = () => {
		const nodeAspectRatio = picture.clientWidth / picture.clientHeight;
		const windowAspectRatio = window.innerWidth / window.innerHeight

		node.parentElement!.style.aspectRatio = nodeAspectRatio.toString();
	
		if (nodeAspectRatio > windowAspectRatio) {
			node.parentElement!.style.width = "calc(100% - 2rem)";
			node.parentElement!.style.height = "";
		}
		
		if (nodeAspectRatio < windowAspectRatio) {
			node.parentElement!.style.height = "calc(100% - 4rem)";
			node.parentElement!.style.width = "";
		}
	}

	onResize()

	window.addEventListener("resize", onResize);

	return {
		destroy() {
			window.removeEventListener("resize", onResize)
		}
	}
}