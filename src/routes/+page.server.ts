import getEvents from '$lib/data/events';
import getGalleryImages from '$lib/data/images';
import type { PageServerLoad } from "./$types";


export const load: PageServerLoad = async () => {

	const spreadsheetDataPromise = getEvents({
		maxResults: 3,
		minDate: new Date(),
	});
	
	const imageURLsPromise = getGalleryImages({
		maxResults: 5,
		orientation: 'horizontal',
		useDPR: false
	});

	return {
		events: spreadsheetDataPromise,
		imageURLs: imageURLsPromise,
	};
};