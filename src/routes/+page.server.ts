import getEvents from '$lib/data/events';
import getGalleryImages from '$lib/data/images';
import type { PageServerLoad } from "./$types";


export const load: PageServerLoad = async () => {

	const spreadsheetDataPromise = getEvents(3);
	const imageURLsPromise = getGalleryImages(6);

	return {
		events: spreadsheetDataPromise,
		imageURLs: imageURLsPromise,
	};
};