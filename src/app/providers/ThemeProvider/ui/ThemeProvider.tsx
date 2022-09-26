import React, { FC, useMemo, useState } from 'react';
import { ETheme, LOCAL_STORAGE_THEME_KEY, ThemeContext } from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ETheme || ETheme.LIGHT;

const ThemeProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState<ETheme>(defaultTheme);
    const providerProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);
    return (
        <ThemeContext.Provider value={providerProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
