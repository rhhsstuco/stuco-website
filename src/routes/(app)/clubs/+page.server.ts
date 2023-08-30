
import getClubs from "$lib/data/clubs";
import type { PageServerLoad } from "./$types";


export const load: PageServerLoad = async () => {

	const spreadsheetDataPromise = getClubs();

	return {
		clubs: spreadsheetDataPromise
	};
};