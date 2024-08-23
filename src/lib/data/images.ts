import type { ImageProps, ImagePropsWithHeight } from "$lib/types/image.types";
import type { ImageMeta } from "$lib/types/image.types";

const files = import.meta.glob("$images/gallery/*.{jpg,png,webp,avif}", {
	query: {
		format: 'avif;webp;jpg',
		w: '600;800;1200',
		as: 'picture',
	}
})

type Orientation = 'horizontal' | 'vertical';

/**
 * @param maxResults the maximum size of the response set or undefined if no limit is specified
 * @param orientation allows filtering my image orientation
 * @param useDPR use DPR for responsive images
 * @param reverse if the result order should be reversed
 */
interface GetGalleryImagesParams {
	maxResults?: number;
	orientation?: Orientation;
	useDPR?: boolean;
	reverse?: boolean;
}

/**
 * Reads image names from static folder and transforms them into image URLs
 * @param params parameters that can be used to modify this function's behaviour
 * @returns an array of ImageMeta objects
 */
const getGalleryImages = async (params: GetGalleryImagesParams = {}) => {

	const filepaths = (await Promise.all(
			Object.entries(files).map(async ([_, value]) => (await value() as any))
		))
		.map(image => {
			const sources = (image.sources as ({
				[key: string]: ImageProps[];
			}));


			if (params.useDPR) {
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

	if (params.reverse) {
		filteredFilepaths.reverse();
	}
	
	filteredFilepaths = filteredFilepaths.slice(0, params.maxResults)

	if (params.orientation === 'horizontal') {
		filteredFilepaths = filteredFilepaths.filter(img => img.img.w > img.img.h);
	}

	if (params.orientation === 'vertical') {
		filteredFilepaths = filteredFilepaths.filter(img => img.img.h > img.img.w);
	}
	
	return filteredFilepaths;
}

export default getGalleryImages;