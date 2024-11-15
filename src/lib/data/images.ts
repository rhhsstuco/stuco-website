import type { ImageProps, ImagePropsWithHeight } from "$lib/types/image.types";
import type { ImageMeta } from "$lib/types/image.types";
import * as path from 'path';
import { rotateMap } from "../../../vite";

const files = import.meta.glob("$images/gallery/*.{jpg,png,webp,avif}", {
	query: {
		format: 'avif;webp;jpg',
		w: '800;1600;2400',
		as: 'picture',
	}
})

type Orientation = 'horizontal' | 'vertical';

/** 
 * Determines if the image has been rotated by a multiple of 90 degrees 
 * such that the orientation of the image has changed.
 * i.e. it has been rotated by 90 + 180n degrees, where n is an integer.
 * @param img the image to determine correct orientation for.
 * @returns if the image is rotated such that its orientation has changed
 */
function mismatchedOrientation(img: ImageMeta & { filename: string }) {
	return rotateMap.has(img.filename) && (+rotateMap.get(img.filename)!) - 90 % 180 === 0
}

/** 
 * Filters if an images orientation is correct, taking into account the rotations.
 * @param orientationCorrect a function that determines if an orientation is correct or not for a non-rotated image
 * @returns a filter function (predicate) to filter out incorrectly oriented images
 */
function filterOrientation(orientationCorrect: (img: ImageMeta & { filename: string }) => boolean) {
	return (img: ImageMeta & { filename: string }) => {
		const correctOrientation = orientationCorrect(img);
		const isMismatched = mismatchedOrientation(img);
		const correctOriginal = correctOrientation && !isMismatched;
		const correctRotated = !correctOrientation && isMismatched;
		
		return correctOriginal || correctRotated;
	}
}

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
			Object.entries(files).map(async ([filepath, value]) => ([path.basename(filepath), await value() as any]))
		))
		.map(([filename, image]) => {

			const sources = (image.sources as ({
				[key: string]: ImageProps[];
			}));


			if (params.useDPR) {
				Object.entries(sources).forEach(props => {
					props[1].forEach((prop, i) => prop.dpr = (i + 1));
				});
			}

			return {
				filename: filename,
				img: {...(image.img as ImagePropsWithHeight)}, // Make copy bc the dimensions of this object are somehow stateful?? Maybe the file objects are cached.
				sources: sources,
				
			} as unknown as ImageMeta & { filename: string }
		});

	let filteredFilepaths = filepaths;

	if (params.reverse) {
		filteredFilepaths.reverse();
	}
	
	filteredFilepaths = filteredFilepaths.slice(0, params.maxResults);

	filteredFilepaths.forEach(img => {
		if (mismatchedOrientation(img)) {
			const temp = img.img.w;
			img.img.w = img.img.h;
			img.img.h = temp;
		}
	});

	if (params.orientation === 'horizontal') {
		filteredFilepaths = filteredFilepaths.filter(img => img.img.w > img.img.h);
	}

	if (params.orientation === 'vertical') {
		filteredFilepaths = filteredFilepaths.filter(img => img.img.h > img.img.w);
	}
	
	return filteredFilepaths;
}

export default getGalleryImages;