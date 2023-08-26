import { PUBLIC_SPREADSHEET_ID } from '$env/static/public';
import path from 'path';
import { getSpreadSheetValues, initSheetsAuth } from './spreadsheet';


/**
 * Gets events from the Google spreadsheet
 * @param {number?} maxResults the maximum size of the response set or undefined if no limit is specified.
 * @returns an array of SchoolEvents
 */
const getClubs = async (maxResults?: number) => {
	// Initialize service account connection with Google Sheet
	await initSheetsAuth();

	// Optionally limit size of result set
	const range = maxResults === undefined ? "A:E" : `A1:E${(+maxResults) + 1}`;

	// Grab the 2D array of cells from the Google Sheet
	const values = <string[][]> (await getSpreadSheetValues(PUBLIC_SPREADSHEET_ID, "Clubs", range)).data.values || [];


	// Remove metadata row and transform the values
	const transformedValues = values.slice(1).map(row => {

		console.log(row)

		return {
			name: row[0],
			room: row[1],
			meetingTime: row[2],
			bannerColor: row[3],
			imageURL: `images/club_logos/${row[4]}`,
		} as SchoolClub
	});

	return transformedValues;
};

export default getClubs;