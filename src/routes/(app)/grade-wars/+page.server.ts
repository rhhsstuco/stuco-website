import { computeStandings } from "$lib/data/points";
import type { PageServerLoad } from "./$types";


export const load: PageServerLoad = async () => {
	return computeStandings();
};