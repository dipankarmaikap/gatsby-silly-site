import React, { useContext } from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import { ThemeContext } from "../../contexts/ThemeContext";
import Theme from "./Theme";
const Layout = ({ children }) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      <div className={`main-app-wrapper ${darkMode ? "dark" : ""} `}>
        <div className="h-screen bg-blue-100 dark:bg-gray-800 dark:text-gray-100 smooth">
          <Theme />
          <div className="max-w-xl mx-auto px-4 relative z-50 h-full ">
            <Header />
            <main className="main py-8">{children}</main>
            <footer className="footer mt-8">
              © {new Date().getFullYear()}, Built with
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.gatsbyjs.org"
              >
                {" "}
                Gatsby
              </a>{" "}
              and
              <a
                target="_blank"
                rel="noreferrer"
                href="https://tailwindcss.com"
              >
                {" "}
                Tailwind2.0
              </a>{" "}
              by{" "}
              <a
                target="_blank"
                rel="noreferrer"
                className="underline"
                href="https://dipankarmaikap.com/"
              >
                me.
              </a>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
