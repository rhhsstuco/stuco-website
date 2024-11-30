import getPoints from "$lib/data/points";
import type { PageServerLoad } from "./$types";


export const load: PageServerLoad = async () => {

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
};