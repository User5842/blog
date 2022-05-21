import { FunctionComponent, useContext, useEffect } from "react";

import styles from "./Header.module.css";

import BlogContext, { ColorMode } from "../../store/store";

const Header: FunctionComponent = () => {
  const context = useContext(BlogContext);

  const colorModeIcon = context.colorMode === ColorMode.LIGHT ? "💡" : "🌙";

  useEffect(() => {
    const rootComponent = document.getElementById("__next");
    rootComponent?.setAttribute("data-theme", context.colorMode);
  }, [context.colorMode]);

  const onColorModeChange = () => {
    context.colorMode === ColorMode.LIGHT
      ? context.setColorMode(ColorMode.DARK)
      : context.setColorMode(ColorMode.LIGHT);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__wrap}>
        <h1 className={styles.header__title}>blog</h1>
        <span className={styles.header__color} onClick={onColorModeChange}>
          {colorModeIcon}
        </span>
      </div>
      <nav className={styles.header__navigation}>
        <a
          aria-label="Discord"
          href="https://discord.gg/dQHsR5gBba"
          rel="noreferrer"
          target="_blank"
          title="Discord"
        >
          Discord
        </a>
        <a
          aria-label="LinkedIn"
          href="https://www.linkedin.com/in/rafaelnegron/"
          rel="noreferrer"
          target="_blank"
          title="LinkedIn"
        >
          LinkedIn
        </a>
        <a
          aria-label="GitHub"
          href="https://github.com/User5842"
          rel="noreferrer"
          target="_blank"
          title="GitHub"
        >
          GitHub
        </a>
        <a
          aria-label="Resume"
          href="/files/Rafael-Negron-Resume.pdf"
          rel="noreferrer"
          target="_blank"
          title="Resume"
        >
          Resume
        </a>
      </nav>
    </header>
  );
};

export default Header;
