const HORIZONTAL_INSET_REM = 4;
const VERTICAL_INSET_REM = 6;

/** Fit image to screen size without changing the aspect ratio */
export default function fitImageToWindow(node: HTMLElement) {
	const onResize = () => {
		const picture = node.children[0] as HTMLPictureElement;
		const image = picture.lastElementChild as HTMLImageElement;
		const nodeAspectRatio = +image.getAttribute("width")! / +image.getAttribute("height")!;
		const windowAspectRatio = window.innerWidth / window.innerHeight;

		// picture.style.aspectRatio = nodeAspectRatio.toString();
	
		if (nodeAspectRatio > windowAspectRatio) {
			picture.style.width = `min(calc(100vw - ${HORIZONTAL_INSET_REM}rem), 48rem)`;
			picture.style.height = "";
		}
		
		if (nodeAspectRatio < windowAspectRatio) {
			picture.style.height = `min(calc(100vh - ${VERTICAL_INSET_REM}rem), 40rem)`;
			picture.style.width = "";
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