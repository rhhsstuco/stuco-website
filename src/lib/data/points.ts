import { PUBLIC_SPREADSHEET_ID } from '$env/static/public';
import type GradePoint from '$lib/models/GradePoints.model';
import { getSpreadSheetValues, initSheetsAuth } from './spreadsheet';

const getPoints = async () => {
	// Initialize service account connection with Google Sheet
	await initSheetsAuth();

	// Grab the 2D array of cells from the Google Sheet
	const values = <string[][]> (await getSpreadSheetValues(PUBLIC_SPREADSHEET_ID, "Grade Wars", "A:B")).data.values || [];

	// Remove metadata row and transform the values
	const transformedValues = values.slice(1).map(row =>  {
		return {
			grade: +row[0],
			points: +row[1],
		} as GradePoint
	});

	return transformedValues;
};

export default getPoints;