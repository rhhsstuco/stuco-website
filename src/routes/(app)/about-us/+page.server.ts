import getMembers from "$lib/data/members";
import type StucoMember from "$lib/models/StucoMember.model";
import type { PageServerLoad } from "./$types";


export const load: PageServerLoad = async () => {
	const images = await getMembers();

	return {
		members: <StucoMember[]> [
			{
				name: "Joshua Dong",
				position: "Co-President",
				imageURL: images["joshua_dong"],
			},
			{
				name: "Farooq Umar",
				position: "Co-President",
				imageURL: images["farooq_umar"],
			},
			{
				name: "Jin Lu Yu",
				position: "Vice President",
				imageURL: images["jin_lu_yu"],
			},
			{
				name: "Flora Yi",
				position: "Secretary",
				imageURL: images["flora_yi"],
			},
			{
				name: "Gordon Wang",
				position: "Treasurer",
				imageURL: images["gordon_wang"],
			},
			{
				name: "Eevie Lin",
				position: "Social Convenor",
				imageURL: images["eevie_lin"],
			},
			{
				name: "Shawn Xiao",
				position: "Social Convenor",
				imageURL: images["shawn_xiao"],
			},
			{
				name: "Oscar Zhao",
				position: "External Affairs",
				imageURL: images["oscar_zhao"],
			},
			{
				name: "Jessie Chen",
				position: "Publicity",
				imageURL: images["jessie_chen"],
			},
			{
				name: "Melissa Zhang",
				position: "Media Affairs",
				imageURL: images["melissa_zhang"],
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
				name: "Sarah Cui",
				position: "Equity Rep",
				imageURL: images["sarah_cui"],
			},
			{
				name: "You?",
				position: "Grade 12 Rep",
				imageURL: images["?"],
			},
			{
				name: "You?",
				position: "Grade 12 Rep",
				imageURL: images["?"],
			},
			{
				name: "You?",
				position: "Grade 11 Rep",
				imageURL: images["?"],
			},
			{
				name: "You?",
				position: "Grade 11 Rep",
				imageURL: images["?"],
			},
			{
				name: "You?",
				position: "Grade 10 Rep",
				imageURL: images["?"],
			},
			{
				name: "You?",
				position: "Grade 10 Rep",
				imageURL: images["?"],
			},
			{
				name: "You?",
				position: "Grade 9 Rep",
				imageURL: images["?"],
			},
			{
				name: "You?",
				position: "Grade 9 Rep",
				imageURL: images["?"],
			},
			{
				name: "You?",
				position: "Mascot",
				imageURL: images["?"],
			},
			{
				name: "You?",
				position: "Mascot",
				imageURL: images["?"],
			},
		],
	};
};