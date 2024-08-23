import getEvents from '$lib/data/events';
import getGalleryImages from '$lib/data/images';
import type { PageServerLoad } from "./$types";


export const load: PageServerLoad = async () => {
	const spreadsheetDataPromise = getEvents({
		maxResults: 3,
		minDate: new Date(),
		removeDuplicates: true,
	});
	
	const imageURLsPromise = getGalleryImages({
		maxResults: 8,
		orientation: 'horizontal',
		useDPR: false,
		reverse: true,
	});

	const [spreadsheetData, imageURLS] = await Promise.all([spreadsheetDataPromise, imageURLsPromise]);

	return {
		events: spreadsheetData,
		imageURLs: imageURLS,
	};
};