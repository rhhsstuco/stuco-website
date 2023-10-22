import { writable } from "svelte/store";

export type Theme = "light" | "dark";

// TODO: reset default to "light" after halloweek
const themeStore = writable<Theme>("dark");

export default themeStore;