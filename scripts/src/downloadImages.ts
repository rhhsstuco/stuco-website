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
const PUBLIC_FOLDER_ID = process.env.PUBLIC_FOLDER_ID; 

if (!SECRET_GOOGLE_DRIVE_CREDENTIALS || !PUBLIC_FOLDER_ID) {
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
 * Gets events from the Google Drive folder
 * @param {number?} maxResults the maximum size of the response set or undefined if no limit is specified.
 * @returns 
 */
const getImages = async (maxResults?: number) => {
	const authClient = await initDriveAuth();

	const drive = google.drive({ version: 'v3', auth: authClient as any});

	// const image = drive.files.get({
	// 	fileId: '1fm6-F5rHGquyIuJvS0rxravbwLSUSwrv'
	// });

	// console.log((await image).data); 

	console.log(`'${PUBLIC_FOLDER_ID}' in parents and trashed=false`)

	const files = await drive.files.list({ 
		pageSize: maxResults,
		q: `'${PUBLIC_FOLDER_ID}' in parents and trashed=false`
	})

	drive.files.list

	if (files.data.files) {
		files.data.files.forEach(async file => {
			const fileStream = await drive.files.get({
				alt: 'media',
				fileId: file.id!,
			}, {
				responseType: "stream"
			})

			const filename = path.join(__dirname, `../../static/images/gallery/${file.name}`);

			if (!existsSync(filename)) {
				const destStream = createWriteStream(filename);

				fileStream.data
					.on("end", () => console.log("done"))
					.on("error", err => console.log(err))
					.pipe(destStream);
			}

			if (!file.name) {
				throw new Error('Name should exist')
			}
		});
			
	}
}

getImages();