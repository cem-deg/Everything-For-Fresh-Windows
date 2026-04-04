"use client";
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const saved = localStorage.getItem("effw-theme");
            if (saved && saved === "light") {
                setIsDark(false);
            }
        }
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const root = document.documentElement;
            if (isDark) {
                root.setAttribute("data-theme", "dark");
            } else {
                root.setAttribute("data-theme", "light");
            }
            localStorage.setItem("effw-theme", isDark ? "dark" : "light");
        }
    }, [isDark]);

    const toggleTheme = () => setIsDark((prev) => !prev);

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
