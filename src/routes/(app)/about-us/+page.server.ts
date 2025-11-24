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
				imageURL: images["jin-lu-yu"],
			},
			{
				name: "Erin Chen",
				position: "Co-President",
				imageURL: images["erin-chen"],
			},
			{
				name: "Shawn Xiao",
				position: "Vice President",
				imageURL: images["shawn-xiao"],
			},
			{
				name: "Flora Yi",
				position: "Treasurer",
				imageURL: images["flora-yi"],
			},
			{
				name: "Erina Li",
				position: "Secretary",
				imageURL: images["erina-li"],
			},
			{
				name: "Shawn Liang",
				position: "Social Convenor",
				imageURL: images["shawn-liang"],
			},
			{
				name: "Tanya Sham",
				position: "Social Convenor",
				imageURL: images["tanya-sham"],
			},
			{
				name: "Sherlock Yu",
				position: "External Affairs",
				imageURL: images["sherlock-yu"],
			},
			{
				name: "Deseree Ho",
				position: "Publicity",
				imageURL: images["deseree-ho"],
			},
			{
				name: "Olivia Wu",
				position: "Media Affairs",
				imageURL: images["olivia-wu"],
			},
			{
				name: "Ronnie Liu",
				position: "Media Affairs",
				imageURL: images["ronnie-liu"],
			},
			{
				name: "Mithulan Nanthakumar",
				position: "Webmaster",
				imageURL: images["mithulan-nanthakumar"],
			},
			{
				name: "Ari Khan",
				position: "Webmaster",
				imageURL: images["ari-khan"],
			},
			{
				name: "Melody Jia",
				position: "Equity Rep",
				imageURL: images["melody-jia"],
			},
			{
				name: "Jackson Ko",
				position: "Grade 12 Rep",
				imageURL: images["jackson-ko"],
			},
			{
				name: "Jayden Park",
				position: "Grade 12 Rep",
				imageURL: images["jayden-park"],
			},
			{
				name: "Jee-Hoo Park",
				position: "Grade 11 Rep",
				imageURL: images["jee-hoo-park"],
			},
			{
				name: "Debbie Xu",
				position: "Grade 11 Rep",
				imageURL: images["debbie-xu"],
			},
			{
				name: "Jessie Cui",
				position: "Grade 10 Rep",
				imageURL: images["jessie-cui"],
			},
			{
				name: "Angela Yan",
				position: "Grade 10 Rep",
				imageURL: images["angela-yan"],
			},
			{
				name: "Henrik Leung",
				position: "Grade 9 Rep",
				imageURL: images["henrik-leung"],
			},
			{
				name: "Karina Chan",
				position: "Grade 9 Rep",
				imageURL: images["karina-chan"],
			},
			{
				name: "Sophia Wei",
				position: "Mascot",
				imageURL: images["sophia-wei"],
			},
			{
				name: "Raymond Mostafavi",
				position: "Mascot",
				imageURL: images["default-pfp"],
			},
		].map((member, index) => ({ ...member, id: index})),
	};
};