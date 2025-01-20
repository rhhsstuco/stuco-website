import getEvents from '$lib/data/events';
import { computeStandings } from "$lib/data/points";
import type { PageServerLoad } from './$types';


export const load: PageServerLoad = async () => {
	let spreadsheetData: SchoolEvent[];

	try {
		spreadsheetData = await getEvents();
	} catch (err) {
		console.error(err);
		spreadsheetData = [];
	}

    let standingsData: Awaited<ReturnType<typeof computeStandings>>;

    try {
        standingsData = await computeStandings();
    } catch (err) {
		console.error(err);
		standingsData = { gradePoints: [], rankings: [] };
	}
    

	return { events: spreadsheetData, standings: standingsData };
};