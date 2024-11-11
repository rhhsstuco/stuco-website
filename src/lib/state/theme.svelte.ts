export type Theme = "light" | "dark";

function createThemeState(initialTheme: Theme) {
    let themeState = $state<Theme>(initialTheme);


    return {
        get value() {
            return themeState;
        },
        set value(theme: Theme) {
            themeState = theme;
        },
        toggle() {
            if (themeState === "light") {
                themeState = "dark";
            } else {
                themeState = "light";
            }
        },
        mount() {
            themeState = (localStorage.getItem("theme") ?? "light") as Theme;

            if ("matchMedia" in window.matchMedia) {
                if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                    themeState = "dark"
                }
            }
        },
        mountEffects() {
            localStorage.setItem("theme", themeState)

            document.documentElement.setAttribute("data-theme", themeState);
        }
    }
}




const theme = createThemeState("light");

export default theme;