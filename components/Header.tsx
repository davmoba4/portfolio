import styles from "./Header.module.scss";

import React, { FunctionComponent, useState } from "react";
import Link from "next/link";

const Header: FunctionComponent = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  if (typeof window !== "undefined") {
    /**
     * When the window is clicked and the clicked element is not part
     * of the header element and the nav is open, the nav is closed.
     * @param {MouseEvent} e
     * @returns Cleanup function
     */
    window.onclick = (e: MouseEvent) => {
      var header = document.getElementById("header");
      var navToggle = document.getElementById("nav-toggle") as HTMLInputElement;

      if (
        header &&
        navToggle &&
        !header.contains(e.target as Node) &&
        navIsOpen
      ) {
        navToggle.checked = false;
        setNavIsOpen(false);
      }

      return () => (window.onclick = null);
    };
  }

  return (
    <header id="header" className={styles.header}>
      <h1>David Moreno-Bautista</h1>

      <input
        type="checkbox"
        id="nav-toggle"
        className={styles.navToggle}
      ></input>
      <label
        onClick={() => setNavIsOpen(!navIsOpen)}
        htmlFor="nav-toggle"
        className={`${styles.navToggleLabel} ${navIsOpen && styles.open}`}
      >
        <span></span>
      </label>

      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/#projects">
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/#about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/#contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
