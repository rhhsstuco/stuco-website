import { PUBLIC_SPREADSHEET_ID } from '$env/static/public';
import type SchoolClub from '$lib/models/SchoolClub.model';
import type { ImageMeta, ImageProps, ImagePropsWithHeight } from '$lib/types/image.types';
import { getSpreadSheetValues, initSheetsAuth } from './spreadsheet';

// Gets filepaths of club logo thumbnails
const filepaths = import.meta.glob("$images/club_logos/*.{jpg,png,webp,avif}", {
    import: 'default',
    query: '?raw',
    eager: true,
});

// Gets metadata of processed club logo thumbnails
const files = import.meta.glob("$images/club_logos/*.{jpg,png,webp,avif}", {
	query: {
		format: 'avif;webp;jpg',
		as: 'picture',
	}
})

// Gets filenames from file paths
const filenames = Object.keys(filepaths)
	.map(path => {
		return path.substring(path.lastIndexOf('/') + 1, path.lastIndexOf('.',));
	});

// Gets the image metadata from vite-imagetools and adds typing
const clubPictureData = (await Promise.all(
		Object.entries(files).map(async ([_, value]) => (await value() as any))
	))
	.map(image => ({
		img: (image.img as ImagePropsWithHeight),
		sources: (image.sources as ImageProps[])
		
	} as unknown as ImageMeta));

// Maps each file name to its image metadata
const clubImageMap = new Map<string, ImageMeta>();

filenames.map((filename, index) => clubImageMap.set(filename, clubPictureData[index]))

/**
 * Gets events from the Google spreadsheet
 * @param maxResults the maximum size of the response set or undefined if no limit is specified.
 * @returns an array of SchoolEvents
 */
const getClubs = async (maxResults?: number) => {
	// Initialize service account connection with Google Sheet
	await initSheetsAuth();

	// Optionally limit size of result set
	const range = maxResults === undefined ? "A:G" : `A1:F${(+maxResults) + 1}`;

	// Grab the 2D array of cells from the Google Sheet
	const values = <string[][]> (await getSpreadSheetValues(PUBLIC_SPREADSHEET_ID, "Clubs", range)) || [];

	// Remove metadata row and transform the values
	const transformedValues = values.slice(1).map(row => {

		const clubImage = clubImageMap.get(row[5]);

		if (!clubImage) {
			throw new Error(`club image not found. (key: ${row[5]}) (keys: ${[...clubImageMap.keys()]}) (values: ${[...clubImageMap.values()]})`);
		}

		return {
			name: row[0],
			room: row[1],
			meetingTime: row[2],
			description: row[3] || "Description coming soon!",
			bannerColor: row[4],
			imageURL: clubImage,
			instagramURL: row[6]
		} as SchoolClub
	});

	return transformedValues;
};

export default getClubs;