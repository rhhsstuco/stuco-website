import getMembers from "$lib/data/members";
import type StucoMember from "$lib/models/StucoMember.model";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
	const images = await getMembers();

	return {
		members: <StucoMember[]> [
			{
				name: "Jin Lu Yu",
				position: "Co-President",
				imageURL: images["jin_lu_yu"],
			},
			{
				name: "Erin Chen",
				position: "Co-President",
				imageURL: images["erin_chen"],
			},
			{
				name: "Shawn Xiao",
				position: "Vice President",
				imageURL: images["shawn_xiao"],
			},
			{
				name: "Flora Yi",
				position: "Treasurer",
				imageURL: images["flora_yi"],
			},
			{
				name: "Erina Li",
				position: "Secretary",
				imageURL: images["erina_li"],
			},
			{
				name: "Shawn Liang",
				position: "Social Convenor",
				imageURL: images["shawn_liang"],
			},
			{
				name: "Tanya Sham",
				position: "Social Convenor",
				imageURL: images["tanya_sham"],
			},
			{
				name: "Sherlock Yu",
				position: "External Affairs",
				imageURL: images["sherlock_yu"],
			},
			{
				name: "Deseree Ho",
				position: "Publicity",
				imageURL: images["deseree_ho"],
			},
			{
				name: "Olivia Wu",
				position: "Media Affairs",
				imageURL: images["olivia_wu"],
			},
			{
				name: "Ronnie Liu",
				position: "Media Affairs",
				imageURL: images["ronnie_liu"],
			},
			{
				name: "Mithulan Nanthakumar",
				position: "Webmaster",
				imageURL: images["mithulan_nanthakumar"],
			},
			{
				name: "Ari Khan",
				position: "Webmaster",
				imageURL: images["ari_khan"],
			},
			{
				name: "Melody Jia",
				position: "Equity Rep",
				imageURL: images["melody_jia"],
			},
			{
				name: "Jackson Ko",
				position: "Grade 12 Rep",
				imageURL: images["jackson_ko"],
			},
			{
				name: "Jayden Park",
				position: "Grade 12 Rep",
				imageURL: images["jayden_park"],
			},
			{
				name: "Jee-Hoo Park",
				position: "Grade 11 Rep",
				imageURL: images["jee-hoo_park"],
			},
			{
				name: "Debbie Xu",
				position: "Grade 11 Rep",
				imageURL: images["debbie_xu"],
			},
			{
				name: "Jessie Cui",
				position: "Grade 10 Rep",
				imageURL: images["jessie_cui"],
			},
			{
				name: "Angela Yan",
				position: "Grade 10 Rep",
				imageURL: images["angela_yan"],
			},
			{
				name: "Henrik Leung",
				position: "Grade 9 Rep",
				imageURL: images["henrik_leung"],
			},
			{
				name: "Karina Chan",
				position: "Grade 9 Rep",
				imageURL: images["karina_chan"],
			},
			{
				name: "Sophia Wei",
				position: "Mascot",
				imageURL: images["sophia_wei"],
			},
			{
				name: "Raymond Mostafavi",
				position: "Mascot",
				imageURL: images["default_pfp"],
			},
		].map((member, index) => ({ ...member, id: index})),
	};
};