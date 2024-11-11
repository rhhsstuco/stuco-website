import { pushState } from "$app/navigation";

/**
 * Replaces the current history entry state with a new entry that contains search parameters.
 * @param searchParams the search parameters of the new entry.
 */
export const pushStateWithQuery = (searchParams: Record<string, string>) => {
    const url = new URL(window.location.toString());

    url.searchParams.forEach((_, key) => url.searchParams.delete(key))

    for (let [k, v] of Object.entries(searchParams)) {
        url.searchParams.set(k, v);
    }

    try {
        pushState(
            url.toString(),
            {},
        )
    } catch (e) {
        console.log("womp womp");
    }
};