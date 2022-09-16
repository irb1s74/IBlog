import {ETheme, LOCAL_STORAGE_THEME_KEY, ThemeContext} from "./ThemeContext";
import {useContext} from "react";

interface useThemeResult {
    theme: ETheme
    toggleThem: () => void;
}

export function useTheme(): useThemeResult {
    const {theme, setTheme} = useContext(ThemeContext)
    const toggleThem = () => {
        const newTheme = theme === ETheme.DARK ? ETheme.LIGHT : ETheme.DARK
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
        setTheme(newTheme)
    }
    return {theme, toggleThem}
}
