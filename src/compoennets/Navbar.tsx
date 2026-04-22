import { useTheme } from "../contexts/useThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header>
            <nav className="navbar p-4 bg-element shadow-md">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="logo text-lg md:text-xl font-extrabold cursor-pointer">
                        Where in the world?
                    </div>
                    <button
                        type="button"
                        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                        className="theme-toggle flex items-center gap-2 cursor-pointer select-none "
                        onClick={toggleTheme}
                    >
                        <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} />
                        <span className="text-sm font-semibold">
                            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                        </span>
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;