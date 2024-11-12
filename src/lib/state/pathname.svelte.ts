import { page } from "$app/stores";


export function createPathnameState() {
    let pathname = $state("");

    return {
        get value() {
            return pathname;
        },
        init() {
            page.subscribe(page => {
                pathname = page.url.pathname;
            });
        }
    }
}