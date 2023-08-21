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
	const range = maxResults === undefined ? "A:D" : `A1:D${(+maxResults) + 1}`;

	// Grab the 2D array of cells from the Google Sheet
	const values = <string[][]> (await getSpreadSheetValues(PUBLIC_SPREADSHEET_ID, "Events", range)).data.values || [];

	// Remove metadata row and transform the values
	const transformedValues = values.slice(1).map(row => {

		const splitStartDate = row[2].split('/');
		const splitEndDate = row[2].split('/');

		return {
			name: row[0],
			description: row[1],
			startDate: new Date(+splitStartDate[2], +splitStartDate[0] - 1, +splitStartDate[1]),
			endDate: new Date(+splitEndDate[2], +splitEndDate[0] - 1, +splitEndDate[1]),
		} as SchoolEvent
	});

	return transformedValues;
};

export default getEvents;