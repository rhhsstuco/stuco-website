import { base } from "$app/paths";
import type { ImageProps, ImagePropsWithHeight } from "$lib/types/image.types";
import type ImageMeta from "$lib/types/image.types";

const coolFiles = import.meta.glob("../../../static/images/gallery/*.jpg", {
	query: {
		w: '200;400;800',
		format: 'jpg;webp;avif',
		meta: true,
		as: 'picture',
	}
})

/**
 * Reads image names from static folder and transformes them into image URLs
 * @param {number?} maxResults the maximum size of the response set or undefined if no limit is specified.
 * @returns an array of image URL strings
 */
const getGalleryImages = async (maxResults?: number) => {

	const filepaths = (await Promise.all(
			Object.entries(coolFiles).map(async ([_, value]) => (await value() as any))
		))
		.map(image => ({
			img: (image.img as ImagePropsWithHeight),
			sources: (image.sources as ImageProps[])
			
		} as unknown as ImageMeta))
		.slice(0, maxResults)
		
	
	filepaths.forEach(filepath => filepath.img.src = `${base}${filepath.img.src}`)
		
	
	return filepaths;
}

export default getGalleryImages;