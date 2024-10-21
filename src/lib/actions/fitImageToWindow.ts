const HORIZONTAL_INSET_REM = 4;
const VERTICAL_INSET_REM = 6;

/** Fit image to screen size without changing the aspect ratio */
export default function fitImageToWindow(node: HTMLElement) {
	const onResize = () => {
		const picture = node.children[0] as HTMLPictureElement;
		const image = picture.lastElementChild as HTMLImageElement;
		const nodeAspectRatio = +image.getAttribute("width")! / +image.getAttribute("height")!;
		const windowAspectRatio = window.innerWidth / window.innerHeight;

		node.parentElement!.style.aspectRatio = nodeAspectRatio.toString();
	
		if (nodeAspectRatio > windowAspectRatio) {
			node.parentElement!.style.width = `calc(100% - ${HORIZONTAL_INSET_REM}rem)`;
			node.parentElement!.style.height = "";
		}
		
		if (nodeAspectRatio < windowAspectRatio) {
			node.parentElement!.style.height = `calc(100% - ${VERTICAL_INSET_REM}rem)`;
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