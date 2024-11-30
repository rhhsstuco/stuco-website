import { PUBLIC_SPREADSHEET_ID } from '$env/static/public';
import type GradePoint from '$lib/models/GradePoints.model';
import { getSpreadSheetValues, initSheetsAuth } from './spreadsheet';

/** 
 * Gets the points for each grade from the Google spreadsheet
 * @return an array of {@link GradePoint} objects
 */
const getPoints = async () => {
	// Initialize service account connection with Google Sheet
	await initSheetsAuth();

	// Grab the 2D array of cells from the Google Sheet
	const values = <string[][]> (await getSpreadSheetValues(PUBLIC_SPREADSHEET_ID, "Grade Wars", "A:B")) || [];

	// Remove metadata row and transform the values
	const transformedValues = values.slice(1).map(row =>  {
		return {
			grade: +row[0],
			points: +row[1],
		} as GradePoint
	});

	return transformedValues;
};

const computeStandings = async () => {
	const spreadsheetData = await getPoints();

	const gradePoints = spreadsheetData.toSorted((a, b) => {
		const pointRanking = b.points - a.points;

		if (pointRanking === 0) {
			return b.grade - a.grade;
		} 

		return pointRanking;
	})

	const rankings = [0];

	for (let i = 1; i < gradePoints.length; i++) {
		const curr = gradePoints[i];
		const prev = gradePoints[i - 1];

		if (curr.points === prev.points) {
			rankings.push(rankings[i - 1]);
		} else {
			rankings.push(rankings[i - 1] + 1);
		}
	}

	const rankColors = rankings.map(rank => {
		if (rank === 0) {
			return "gold";
		} else if (rank === 1) {
			return "silver";
		} else if (rank === 2) {
			return "bronze";
		} else {
			return "none";
		}
	});

	return {
		gradePoints,
		rankings: rankColors,
	};
}

export { computeStandings };
export default getPoints;