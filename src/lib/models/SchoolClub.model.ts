import type { ImageMeta } from "$lib/types/image.types";

export default interface SchoolClub {
	name: string;
	room: string;
	description: string;
	meetingTime: string;
	bannerColor: string;
	imageURL: ImageMeta;
	instagramURL: string;
}