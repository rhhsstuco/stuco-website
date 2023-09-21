
import getGalleryImages from "$lib/data/images";
import type { PageServerLoad } from "./$types";


export const load: PageServerLoad = async () => {
	let imageURLs: string[];

	try {
		imageURLs = await getGalleryImages();
	} catch (err) {
		console.error(err);
		return {
			imageURLs: []
		}
	}

	return { imageURLs };
};