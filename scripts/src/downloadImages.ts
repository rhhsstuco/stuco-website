import { google } from "googleapis";

import * as path from 'path';
import { fileURLToPath } from 'url';
import { createWriteStream, existsSync } from "fs";
import * as dotenv from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envFilePath = path.join(__dirname, "../../.env");

dotenv.config({ path: envFilePath });

const SECRET_GOOGLE_DRIVE_CREDENTIALS = process.env.SECRET_GOOGLE_DRIVE_CREDENTIALS; 
const PUBLIC_GALLERY_FOLDER_ID = process.env.PUBLIC_GALLERY_FOLDER_ID; 
const PUBLIC_CLUB_LOGOS_FOLDER_ID = process.env.PUBLIC_CLUB_LOGOS_FOLDER_ID; 
const PUBLIC_MEMBERS_FOLDER_ID = process.env.PUBLIC_MEMBERS_FOLDER_ID; 

if (!SECRET_GOOGLE_DRIVE_CREDENTIALS || !PUBLIC_GALLERY_FOLDER_ID || !PUBLIC_CLUB_LOGOS_FOLDER_ID || !PUBLIC_MEMBERS_FOLDER_ID) {
	throw new Error(`.env variables not defined in ${envFilePath}`)
}

// Decode credentials from .env file
const credentials = JSON.parse(
	Buffer.from(SECRET_GOOGLE_DRIVE_CREDENTIALS, "base64").toString()
)

/**
 * Authenticates the Google Drive API service account and binds the authentication token to further calls.
 */
export const initDriveAuth = async () => {
	const auth = new google.auth.GoogleAuth({
		projectId: credentials.project_id,
		credentials: {
			client_id: credentials.client_id,
			client_email: credentials.client_email,
			private_key: credentials.private_key,
		},
		scopes: [
			'https://www.googleapis.com/auth/drive'
		],
		
	})

	return await auth.getClient();
} 

/**
 * Download images from a Google Drive folder to the machine
 * @param {string} driveFolderID the ID of the Google Drive folder to download from
 * @param {string} outputFolder the path to the folder where the downloaded file is output. Relative to this script's location
 * @param {number?} maxResults the maximum size of the response set or undefined if no limit is specified.
 * @returns 
 */
const downloadImages = async (driveFolderID: string, outputFolder: string, maxResults?: number) => {
	const authClient = await initDriveAuth();

	const drive = google.drive({ version: 'v3', auth: authClient as any });

	const files = await drive.files.list({ 
		pageSize: maxResults,
		q: `'${driveFolderID}' in parents and trashed=false`
	})

	if (files.data.files) {
		files.data.files.forEach(async file => {
			const fileStream = await drive.files.get({
				alt: 'media',
				fileId: file.id!,
			}, {
				responseType: "stream"
			})

			if (!file.name) {
				throw new Error('Name should exist')
			}

			const filename = path.join(
				__dirname, 
				path.join(
					outputFolder,
					file.name
				),
			);

			if (!existsSync(filename)) {
				const destStream = createWriteStream(filename);

				fileStream.data
					.on("end", () => console.log(`downloaded ${filename}`))
					.on("error", err => console.log(err))
					.pipe(destStream);
			}

		});
			
	}
}

downloadImages(PUBLIC_GALLERY_FOLDER_ID, '../../static/images/gallery');
downloadImages(PUBLIC_CLUB_LOGOS_FOLDER_ID, '../../static/images/club_logos');
downloadImages(PUBLIC_MEMBERS_FOLDER_ID, '../../static/images/members');