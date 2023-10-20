import type { ImageMeta, ImageProps, ImagePropsWithHeight } from '$lib/types/image.types';


const files = import.meta.glob("$images/members/*.jpg", {
	query: {
		format: 'avif;webp;jpg',
		w: '400;800',
		as: 'picture',
	}
})

const toFileName = (path: string) => path.substring(path.lastIndexOf('/') + 1, path.lastIndexOf('.',));

const pictures = await Promise.all(Object.entries(files).map(([key, value]) => value().then(v => [key, v] as any[])))

const pairedPhotos = pictures.map(image => ([ toFileName(image[0]), {
	img: (image[1].img as ImagePropsWithHeight),
	sources: (image[1].sources as ImageProps[])
	
} as unknown as ImageMeta]))

const getMembers = async () => {
	return <Record<string, ImageMeta>> Object.fromEntries(pairedPhotos);
};

export default getMembers;