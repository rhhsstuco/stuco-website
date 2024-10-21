/** Fit image to screen size without changing the aspect ratio */
export default function fitImageToWindow(node: HTMLElement) {
	const onResize = () => {
		const picture = node.children[0] as HTMLPictureElement;
		const image = picture.lastElementChild as HTMLImageElement;
		const nodeAspectRatio = +image.getAttribute("width")! / +image.getAttribute("height")!;
		const windowAspectRatio = window.innerWidth / window.innerHeight;

		console.dir(image)
		console.log(`${+image.getAttribute('width')!} / ${+image.getAttribute('height')!} = ${nodeAspectRatio}`)

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