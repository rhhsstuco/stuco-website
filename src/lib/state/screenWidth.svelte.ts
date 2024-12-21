import { MediaQuery } from "svelte/reactivity";

/** A width media query with a lower and upper bound  */
export const createScreenWidthQuery = (minWidth: number, maxWidth: number) => new MediaQuery(
    `(max-width: ${maxWidth}px) and (min-width: ${minWidth}px)`
);

export const mediaSmallest = createScreenWidthQuery(0, 480);
export const mediaSmaller = createScreenWidthQuery(480, 640);
export const mediaSmall = createScreenWidthQuery(640, 768);
export const mediaMobile = createScreenWidthQuery(0, 768);
export const mediaMedium = createScreenWidthQuery(768, 1024);
export const mediaLarge = createScreenWidthQuery(1024, 1152);
export const mediaLarger = createScreenWidthQuery(1152, 1280);
export const mediaLargest = createScreenWidthQuery(1280, 100000000000000);
