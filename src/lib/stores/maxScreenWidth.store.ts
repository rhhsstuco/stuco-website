import { screenWidthQuery } from "./screenWidth.store";

export const maxScreenWidthQuery = (maxWidth: number) => screenWidthQuery(0, maxWidth);

export const mediaMaxLarge = maxScreenWidthQuery(1024);