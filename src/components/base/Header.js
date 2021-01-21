import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { SoundContext } from "../../contexts/SoundContext";
import { Link } from "gatsby";
const Header = () => {
  const { toggleTheme, darkMode } = useContext(ThemeContext);
  const { sound, toggleSound } = useContext(SoundContext);
  return (
    <header>
      <div className="flex justify-between items-center py-4">
        <Link className="font-bold text-4xl" to="/">
          #SillySite
        </Link>
        <div className="buttons flex space-x-2 ">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex space-x-1 py-1 items-center justify-center bg-gray-500 rounded-full w-20 text-white focus:outline-none dark:bg-gray-100 dark:text-gray-900 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 smooth"
          >
            <span role="img" aria-label="Sun behind cloud ">
              {!darkMode ? "🌑" : "☀️"}
            </span>
            <span>{!darkMode ? "Dark" : "Light"}</span>
          </button>
          <button
            onClick={toggleSound}
            aria-label="toggle voice overlay"
            className="flex space-x-1 py-1 items-center justify-center bg-gray-500 rounded-full w-10 text-white focus:outline-none dark:bg-gray-100 dark:text-gray-900 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 smooth"
          >
            {sound ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-6 h-6"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                  clipRule="evenodd"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
