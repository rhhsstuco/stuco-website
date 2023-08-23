import getEvents from '$lib/data/events';
import getImages from '$lib/data/images';
import type { PageServerLoad } from "./$types";


export const load: PageServerLoad = async () => {

	const spreadsheetDataPromise = getEvents(3);
	const imageURLsPromise = getImages(6);

	const [spreadsheetData, imageURLs] = await Promise.all([spreadsheetDataPromise, imageURLsPromise]);

	return {
		events: spreadsheetData,
		imageURLs: imageURLs,
	};
};