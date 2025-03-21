import type { ImageMeta } from "$lib/types/image.types";

export default interface StucoMember {
    id: number,
	name: string;
	position: string;
	imageURL?: ImageMeta;
}
