import { pushState } from "$app/navigation";

/**
 * Replaces the current history entry state with a new entry that contains search parameters.
 * @param searchParams the search parameters of the new entry.
 */
export const pushStateWithQuery = (searchParams: Record<string, string | null>) => {
    const url = new URL(window.location.toString());

    let changed = false;

    console.log(window.location.toString())

    for (let [k, v] of Object.entries(searchParams)) {
        const existingParam = url.searchParams.get(k);

        if (existingParam != v) {
            changed = true
        }

        if (v === null) {
            url.searchParams.delete(k);
        } else {
            url.searchParams.set(k, v);
        }
    }


    if (changed) {
        try {
            pushState(
                url.toString(),
                {},
            )
        } catch (e) {
            console.log("womp womp");
        }
    }
};