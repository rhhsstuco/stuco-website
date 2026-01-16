import getEvents from '$lib/data/events';
import getGalleryImages from '$lib/data/images';
import { computeStandings } from '$lib/data/points';
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
	const spreadsheetDataPromise = getEvents({
		maxResults: 3,
		minDate: new Date(),
		removeDuplicates: true,
	});
	
	const imageURLsPromise = getGalleryImages({
		maxResults: 12,
		orientation: 'horizontal',
		useDPR: false,
		reverse: true,
	});

    const standingsPromise = computeStandings()

	const [spreadsheetData, imageURLs, standings] = await Promise.all([spreadsheetDataPromise, imageURLsPromise, standingsPromise]);

	return {
		events: spreadsheetData,
		imageURLs: imageURLs,
        standings,
	};
};