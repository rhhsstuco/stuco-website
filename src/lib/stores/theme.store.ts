import { writable } from "svelte/store";

export type Theme = "light" | "dark";

const themeStore = writable<Theme>("light");

export default themeStore;