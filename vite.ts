/*
 AVIF and WEBP don't provide the same support for the EXIF orientation header tag that JPG does.
 Due to this, the generated AVIF and WEBP files have the wrong orientation when the orientation of the image is portrait.
 To fix this, I have manually compiled a list of images and the amount by which they need to be rotated :).
 I've spent like 5 hours trying to resolve this issue and I cannot find a better solution right now.
*/
const rotateMap = new Map<string, string>([
	['01.jpg', "90"],
	['04.jpg', "90"],
	['20.jpg', "90"],
	['21.jpg', "90"],
	['22.jpg', "90"],
	['23.jpg', "90"],
	['32.jpg', "90"],
]);

export { rotateMap };

const defaultDirectives = (url: URL) => {
	const pathname = url.pathname;
	const filename = pathname.substring(pathname.lastIndexOf('/') + 1);
	
	if (rotateMap.has(filename)) {
		return new URLSearchParams({
			rotate: rotateMap.get(filename)!,
			fit: "outside"
		});
	}

	return new URLSearchParams();
}

export default defaultDirectives;