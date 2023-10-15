import type { ImageProps, ImagePropsWithHeight } from "$lib/types/image.types";
import type ImageMeta from "$lib/types/image.types";

const files = import.meta.glob("$images/gallery/*.jpg", {
	query: {
		format: 'avif;webp;jpg',
		w: '400;800;1600',
		as: 'picture',
	}
})

type Orientation = 'horizontal' | 'vertical';

/**
 * Reads image names from static folder and transformes them into image URLs
 * @param {number?} maxResults the maximum size of the response set or undefined if no limit is specified.
 * @param {Orientation} orientation allows filtering my image orientation
 * @returns an array of ImageMeta objects
 */
const getGalleryImages = async (maxResults?: number, orientation?: Orientation) => {

	const filepaths = (await Promise.all(
			Object.entries(files).map(async ([_, value]) => (await value() as any))
		))
		.map(image => ({
			img: (image.img as ImagePropsWithHeight),
			sources: (image.sources as ImageProps[])
			
		} as unknown as ImageMeta))
		.slice(0, maxResults)

	let filteredFilepaths = filepaths;

	if (orientation === 'horizontal') {
		filteredFilepaths = filepaths.filter(img => img.img.w > img.img.h);
	}

	if (orientation === 'vertical') {
		filteredFilepaths = filepaths.filter(img => img.img.h > img.img.w);
	}
	
	
	return filteredFilepaths;
}

export default getGalleryImages;