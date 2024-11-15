import * as path from 'path';
import { fileURLToPath } from 'url';
import { readdir, writeFile } from "fs/promises";
import inquirer from 'inquirer';
import sharp from 'sharp';

const MAX_IMAGE_SIZE = 2400;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

sharp.cache(false);

async function main() {
	const answers = await inquirer.prompt(
		[
			{
				name: "main",
				type: "input",
				message: "What is the path of the folder containing the images to be resized?",

			},
		]
	);

	// Get absolute paths of the two folders
	const mainPath = path.join(
		__dirname, 
		"..",
		answers.main,
	);

		// Read files from folders
	const mainFiles = (await readdir(mainPath)).filter(file => file !== ".DS_Store");

	// Map filenames to ImageEntries
	const filepaths = mainFiles.map(file => path.join(mainPath, file));

	await Promise.all(
		filepaths.map(async filepath => {
				const buffer = await sharp(filepath)
					.keepExif()
					.resize({
						width: MAX_IMAGE_SIZE,
						withoutEnlargement: true,
					})
					.toBuffer();

				await writeFile(filepath, buffer);
			}
		)
	)
}

main()