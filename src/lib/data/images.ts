import type { ImageProps, ImagePropsWithHeight } from "$lib/types/image.types";
import type ImageMeta from "$lib/types/image.types";

const files = import.meta.glob("$images/gallery/*.jpg", {
	query: {
		format: 'avif;webp;jpg',
		w: '600;800;1200',
		as: 'picture',
	}
})

type Orientation = 'horizontal' | 'vertical';

interface GetGalleryImagesParams {
	maxResults?: number;
	orientation?: Orientation;
	useDPR?: boolean;
	reverse?: boolean;
}

/**
 * Reads image names from static folder and transformes them into image URLs
 * @param {number?} maxResults the maximum size of the response set or undefined if no limit is specified.
 * @param {Orientation} orientation allows filtering my image orientation
 * @param {boolean} useDPR use DPR for responsive images.
 * @returns an array of ImageMeta objects
 */
const getGalleryImages = async ({ maxResults, orientation, useDPR, reverse }: GetGalleryImagesParams = {}) => {

	const filepaths = (await Promise.all(
			Object.entries(files).map(async ([_, value]) => (await value() as any))
		))
		.map(image => {
			const sources = (image.sources as ({
				[key: string]: ImageProps[];
			}));


			if (useDPR) {
				Object.entries(sources).forEach(props => {
					props[1].forEach((prop, i) => prop.dpr = (i + 1));
				});
			}

			return {
				img: (image.img as ImagePropsWithHeight),
				sources: sources,
				
			} as unknown as ImageMeta
		});

	let filteredFilepaths = filepaths;

	if (reverse) {
		filteredFilepaths.reverse();
	}
	
	filteredFilepaths = filteredFilepaths.slice(0, maxResults)

	if (orientation === 'horizontal') {
		filteredFilepaths = filteredFilepaths.filter(img => img.img.w > img.img.h);
	}

	if (orientation === 'vertical') {
		filteredFilepaths = filteredFilepaths.filter(img => img.img.h > img.img.w);
	}
	
	return filteredFilepaths;
}

export default getGalleryImages;