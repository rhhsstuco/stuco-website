import getGalleryImages from "$lib/data/images";
import type ImageMeta from "$lib/types/image.types";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
	let imageURLs: ImageMeta[];

	try {
		imageURLs = await getGalleryImages({ useDPR: true });
	} catch (err) {
		console.error(err);
		return {
			imageURLs: []
		}
	}

	return { imageURLs };
};