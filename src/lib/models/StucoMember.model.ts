import type { ImageMeta } from "$lib/types/image.types";

export default interface StucoMember {
	name: string;
	position: string;
	imageURL?: ImageMeta;
}
