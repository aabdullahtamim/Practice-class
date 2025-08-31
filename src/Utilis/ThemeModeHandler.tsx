
export const ThemeModeHandler = (mode: string) => {
    localStorage.theme = mode;

    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    document.body.classList.toggle(
        "dark-mode",
        localStorage.theme === "dark-mode" ||
        (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
    );
}

