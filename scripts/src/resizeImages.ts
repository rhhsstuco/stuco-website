import * as path from 'path';
import { fileURLToPath } from 'url';
import { readdir, writeFile } from "fs/promises";
import inquirer from 'inquirer';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

sharp.cache(false);

async function main() {
	const answers = await inquirer.prompt(
		[
			{
				name: "path",
				type: "input",
				message: "What is the path of the folder containing the images to be resized?",
			},
		]
	);

    const maxImageWidth = await inquirer.prompt(
		[
			{
				name: "width",
				type: "number",
				message: "What is the maximum width of an image?",
                default: 2400,
			},
		]
	);

	// Get absolute paths of the two folders
	const mainPath = path.join(
		__dirname, 
		"..",
		answers.path,
	);

		// Read files from folders
	const mainFiles = (await readdir(mainPath)).filter(file => file !== ".DS_Store");

	// Map filenames to ImageEntries
	const filepaths = mainFiles.map(file => path.join(mainPath, file));

	await Promise.all(
		filepaths.map(async filepath => {
				const buffer = await sharp(filepath)
					.withMetadata()
					.resize({
						width: maxImageWidth.width,
						withoutEnlargement: true,
					})
					.toBuffer();

				await writeFile(filepath, buffer);
			}
		)
	)
}

main()