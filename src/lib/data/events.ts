import { PUBLIC_SPREADSHEET_ID } from '$env/static/public';
import { getSpreadSheetValues, initSheetsAuth } from './spreadsheet';

interface GetEventsParams {
	maxResults?: number;
	minDate?: Date;
}


/**
 * Gets events from the Google spreadsheet
 * @param {number?} maxResults the maximum size of the response set or undefined if no limit is specified.
 * @returns an array of SchoolEvents
 */
const getEvents = async (params?: GetEventsParams): Promise<SchoolEvent[]> => {
	const maxResults = params?.maxResults;
	const minDate = params?.minDate;
	
	// Initialize service account connection with Google Sheet
	await initSheetsAuth();

	// Grab the 2D array of cells from the Google Sheet
	const values = <string[][]> (await getSpreadSheetValues(PUBLIC_SPREADSHEET_ID, "Events", "A:D")).data.values || [];

	// Remove metadata row and transform the values
	const transformedValues = values.slice(1).map(row => {

		const splitStartDate = row[2].split('/');
		const splitEndDate = row[3].split('/');


		return {
			name: row[0],
			description: row[1],
			startDate: new Date(+splitStartDate[2], +splitStartDate[0] - 1, +splitStartDate[1]),
			endDate: new Date(+splitEndDate[2], +splitEndDate[0] - 1, +splitEndDate[1]),
		} as SchoolEvent
	}).filter(schoolEvent => {
		
		if (minDate) {
			return schoolEvent.startDate > minDate;
		}

		return true;
	}).slice(0, maxResults);

	return transformedValues;
};

export default getEvents;