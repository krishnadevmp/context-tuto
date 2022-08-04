import React, { useEffect, useState } from "react";
import { themes } from "../Themes";

export const ThemeContext = React.createContext({
    themeName: "light",
    toggleTheme: () => { }
});

export const ThemeContextProvider = ({ children }) => {
    const [themeName, setThemeName] = useState("light");
    const [theme, setTheme] = useState(themes[themeName]);
    const toggleTheme = () => {
        if (theme === themes.light) {
            setTheme(themes.dark);
            setThemeName("dark");
        } else {
            setTheme(themes.light);
            setThemeName("light");
        }
    }

    const setCSSVariables = theme => {
        for (const value in theme) {
            document.documentElement.style.setProperty(`--${value}`, theme[value]);
        }
    };

    useEffect(() => {
        setCSSVariables(theme)
    }, [theme]);

    return <ThemeContext.Provider value={{ themeName, toggleTheme }}>
        {children}
    </ThemeContext.Provider>;
}
