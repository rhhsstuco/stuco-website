import { PUBLIC_SPREADSHEET_ID } from '$env/static/public';
import { initAuth, getSpreadSheetValues } from './spreadsheet';


/**
 * Gets events from the Google spreadsheet
 * @param {number?} maxResults the maximum size of the response set or undefined if no limit is specified.
 * @returns an array of SchoolEvents
 */
const getEvents = async (maxResults?: number) => {
	// Initialize service account connection with Google Sheet
	await initAuth();

	// Optionally limit size of result set
	const range = maxResults === undefined ? "A:C" : `A1:C${(+maxResults) + 1}`;

	// Grab the 2D array of cells from the Google Sheet
	const values = <string[][]> (await getSpreadSheetValues(PUBLIC_SPREADSHEET_ID, "Events", range)).data.values || [];

	// Remove metadata row and transform the values
	const transformedValues = values.slice(1).map(row => {

		const splitDate = row[2].split('/');

		return {
			name: row[0],
			description: row[1],
			date: new Date(+splitDate[0], +splitDate[1] + 1, +splitDate[2]),
		} as SchoolEvent
	});

	return transformedValues;
};

export default getEvents;