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
				imageURL: images["default_pfp"],
			},
			{
				name: "Erin Chen",
				position: "Co-President",
				imageURL: images["default_pfp"],
			},
			{
				name: "Shawn Xiao",
				position: "Vice President",
				imageURL: images["default_pfp"],
			},
			{
				name: "Flora Yi",
				position: "Treasurer",
				imageURL: images["default_pfp"],
			},
			{
				name: "Erina Li",
				position: "Secretary",
				imageURL: images["default_pfp"],
			},
			{
				name: "Shawn Liang",
				position: "Social Convenor",
				imageURL: images["default_pfp"],
			},
			{
				name: "Tanya Sham",
				position: "Social Convenor",
				imageURL: images["default_pfp"],
			},
			{
				name: "Sherlock Yu",
				position: "External Affairs",
				imageURL: images["default_pfp"],
			},
			{
				name: "Deseree Ho",
				position: "Publicity",
				imageURL: images["default_pfp"],
			},
			{
				name: "Olivia Wu",
				position: "Media Affairs",
				imageURL: images["default_pfp"],
			},
			{
				name: "Ronnie Liu",
				position: "Media Affairs",
				imageURL: images["default_pfp"],
			},
			{
				name: "Mithulan Nanthakumar",
				position: "Webmaster",
				imageURL: images["default_pfp"],
			},
			{
				name: "Ari Khan",
				position: "Webmaster",
				imageURL: images["default_pfp"],
			},
			{
				name: "Melody Jia",
				position: "Equity Rep",
				imageURL: images["default_pfp"],
			},
			{
				name: "TBD",
				position: "Grade 12 Rep",
				imageURL: images["default_pfp"],
			},
			{
				name: "TBD",
				position: "Grade 12 Rep",
				imageURL: images["default_pfp"],
			},
			{
				name: "TBD",
				position: "Grade 11 Rep",
				imageURL: images["default_pfp"],
			},
			{
				name: "TBD",
				position: "Grade 11 Rep",
				imageURL: images["default_pfp"],
			},
			{
				name: "TBD",
				position: "Grade 10 Rep",
				imageURL: images["default_pfp"],
			},
			{
				name: "TBD",
				position: "Grade 10 Rep",
				imageURL: images["default_pfp"],
			},
			{
				name: "TBD",
				position: "Grade 9 Rep",
				imageURL: images["default_pfp"],
			},
			{
				name: "TBD",
				position: "Grade 9 Rep",
				imageURL: images["default_pfp"],
			},
			{
				name: "TBD",
				position: "Mascot",
				imageURL: images["default_pfp"],
			},
		].map((member, index) => ({ ...member, id: index})),
	};
};