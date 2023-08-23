import path from "path";
import { fileURLToPath } from "url";
import { readdir } from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


/**
 * Reads image names from static folder and transformes them into image URLs
 * @param {number?} maxResults the maximum size of the response set or undefined if no limit is specified.
 * @returns an array of image URL strings
 */
const getImages = async (maxResults?: number) => {
	const relativePath = process.env.NODE_ENV === "production" ? "../../../client/images/gallery/" : "../../../static/images/gallery/"

	const files = await readdir(path.join(__dirname, relativePath));

	const prefixedFiles = files.map(filename => `images/gallery/${filename}`).slice(0, maxResults);

	return prefixedFiles;
}

export default getImages;