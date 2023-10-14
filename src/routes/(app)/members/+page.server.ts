import getMembers from "$lib/data/members";
import type StucoMember from "$lib/models/StucoMember.model";
import type { PageServerLoad } from "./$types";



export const load: PageServerLoad = async () => {
	const images = await getMembers();

	return { members: <StucoMember[]> [
		{
			name: "Mikkel Canivel",
			position: "Co-President",
			imageURL: images["mikkel_canivel"],
		},
		{
			name: "Harold Zhang",
			position: "Co-President",
			imageURL: images["harold_zhang"],
		},
		{
			name: "Farooq Umar",
			position: "Vice President",
			imageURL: images["farooq_umar"],
		},
		{
			name: "Rianna Zhu",
			position: "Secretary",
			imageURL: images["rianna_zhu"],
		},
		{
			name: "Rachel Fernandes",
			position: "Secretary",
			imageURL: images["rachel_fernandes"],
		},
		{
			name: "Rachel Wu",
			position: "Treasurer",
			imageURL: images["rachel_wu"],
		},
		{
			name: "Ashika Akilan",
			position: "Treasurer",
			imageURL: images["ashika_akilan"],
		},
		{
			name: "Ronan Hasan",
			position: "Social Convenor",
			imageURL: images["ronan_hasan"],
		},
		{
			name: "Jin Lu Yu",
			position: "Social Convener",
			imageURL: images["jin_lu_yu"],
		},
		{
			name: "Viona Abbasian",
			position: "External Affairs",
			imageURL: images["viona_abbasian"],
		},
		{
			name: "Joey Chen",
			position: "External Affairs",
			imageURL: images["joey_chen"],
		},
		{
			name: "Ashley Moon",
			position: "Publicity",
			imageURL: images["ashley_moon"],
		},
		{
			name: "Jessie Chen",
			position: "Publicity",
			imageURL: images["jessie_chen"],
		},
		{
			name: "Joy Li",
			position: "Media Affairs",
			imageURL: images["joy_li"],
		},
		{
			name: "Erin Chen",
			position: "Media Affairs",
			imageURL: images["erin_chen"],
		},
		{
			name: "Harry Xu",
			position: "Webmaster",
			imageURL: images["harry_xu"],
		},
		{
			name: "Tommy Shan",
			position: "Webmaster",
			imageURL: images["tommy_shan"],
		},
		{
			name: "Yass Lotfali-Zadeh",
			position: "Equity Rep",
			imageURL: images["yass_lotfali-zadeh"],
		},
		{
			name: "Joy Kim",
			position: "Equity Rep",
			imageURL: images["joy_kim"],
		},
		{
			name: "Huzaifa Safri",
			position: "Grade 12 Rep",
			imageURL: images["huzaifa_safri"],
		},
		{
			name: "Matthew Ye",
			position: "Grade 12 Rep",
			imageURL: images["matthew_ye"],
		},
		{
			name: "Joshua Dong",
			position: "Grade 11 Rep",
			imageURL: images["joshua_dong"],
		},
		{
			name: "Egor Dvornitsyn",
			position: "Grade 11 Rep",
			imageURL: images["egor_dvornitsyn"],
		},
		{
			name: "Jayden Park",
			position: "Grade 10 Rep",
			imageURL: images["jayden_park"],
		},
		{
			name: "Shawn Liang",
			position: "Grade 10 Rep",
			imageURL: images["ronan_hasan"],
		},
		{
			name: "Elspeth Attwood",
			position: "Grade 9 Rep",
			imageURL: images["elspeth_attwood"],
		},
		{
			name: "Salar Ahmad Khanlou",
			position: "Grade 9 Rep",
			imageURL: images["salar_ahmad_khanlou"],
		},
		{
			name: "Alvin Chen",
			position: "Grade 9 Rep",
			imageURL: images["alvin_chen"],
		},
		{
			name: "Victor Mancas",
			position: "Grade 9 Rep",
			imageURL: images["victor_mancas"],
		},
		{
			name: "Rain Jing",
			position: "Mascot",
			imageURL: images["rain_jing"],
		},
		{
			name: "Cecily Chen",
			position: "Mascot",
			imageURL: images["cecily_chen"],
		},
	]};
};