import type { PageServerLoad } from "./$types";



export const load: PageServerLoad = async () => {
	return { members: <StucoMember[]> [
		{
			name: 'Mikkel Canivel',
			position: 'Co-President',
			imageURL: 'images/headshots/ronan_hasan',
		},
		{
			name: 'Harold Zhang',
			position: 'Co-President',
			imageURL: 'images/headshots/ronan_hasan',
		},
		{
			name: 'Farooq Umar',
			position: 'Vice President',
			imageURL: 'images/headshots/ronan_hasan',
		},
		{
			name: 'Rianna Zhu',
			position: 'Secretary',
			imageURL: 'images/headshots/ronan_hasan',
		},
		{
			name: 'Rachel Fernandes',
			position: 'Secretary',
			imageURL: 'images/headshots/ronan_hasan',
		},
		{
			name: 'Rachel Wu',
			position: 'Treasurer',
			imageURL: 'images/headshots/ronan_hasan',
		},
		{
			name: 'Ashika Akilan',
			position: 'Treasurer',
			imageURL: 'images/headshots/ronan_hasan',
		},
		{
			name: 'Salar Ahmad Khanlou',
			position: 'Treasurer',
			imageURL: 'images/headshots/ronan_hasan',
		},
	]};
};