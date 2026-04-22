import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    /*  const [theme, setTheme] = useState<Theme>(() => {
         const savedTheme = localStorage.getItem('theme');
         return (savedTheme as Theme) || 'dark';
     }); */

    const [theme, setTheme] = useState<Theme>(() => {
        const savedMode = localStorage.getItem('themeMode');

        if (savedMode === 'dark' || savedMode === 'light') {
            return savedMode;
        }

        return window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light';
    });

    useEffect(() => {
        const handleChange = (event: MediaQueryListEvent) => {
            setTheme(event.matches ? 'dark' : 'light');
        };

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', handleChange);


        // Add/Remove class on body
        // document.documentElement.classList.toggle('dark', theme === 'dark');
        // document.documentElement.classList.toggle('light', theme === 'light');
        const root = document.documentElement;

        root.classList.toggle('dark', theme === 'dark');
        root.classList.toggle('light', theme === 'light');

        root.dataset.theme = theme;



        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, [theme]); // Re-run when theme changes

    const toggleTheme = () => {
        const modetheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(modetheme);
        localStorage.setItem('themeMode', modetheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};