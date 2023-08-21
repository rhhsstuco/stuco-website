import getEvents from '$lib/data/events';
import type { PageServerLoad } from "./$types";


export const load: PageServerLoad = async () => {
	let spreadsheetData: SchoolEvent[];

	try {
		spreadsheetData = await getEvents();
	} catch (err) {
		console.error(err);
		return {
			events: []
		}
	}

	return { events: spreadsheetData };
};