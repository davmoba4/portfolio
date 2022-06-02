import styles from "./Header.module.scss";

import React, { FunctionComponent, useEffect, useState } from "react";
import Link from "next/link";

const Header: FunctionComponent = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  if (typeof window !== "undefined") {
    /**
     * When the window is clicked and the clicked element is not part
     * of the header element and the nav is open, the nav is then closed.
     * @param {MouseEvent} e Event
     * @returns Cleanup function
     */
    window.onclick = (e: MouseEvent) => {
      const mobileNavToggle = document.getElementById("mobile-nav-toggle");

      if (!mobileNavToggle?.contains(e.target as Node) && navIsOpen) {
        mobileNavToggle?.setAttribute("aria-expanded", "false");
        setNavIsOpen(false);
      }

      return () => (window.onclick = null);
    };
  }

  /**
   * When the nav is open or closed, the aria-expanded attribute gets
   * set accordingly. navIsOpen gets toggled as well.
   */
  const handleMobileNavToggle = () => {
    const mobileNavToggle = document.getElementById("mobile-nav-toggle");
    if (navIsOpen) {
      mobileNavToggle?.setAttribute("aria-expanded", "false");
    } else {
      mobileNavToggle?.setAttribute("aria-expanded", "true");
    }
    setNavIsOpen(!navIsOpen);
  };

  /**
   * When a nav link is clicked, all active links get set as inactive
   * and then the appropriate links get set as active.
   * @param {React.MouseEvent<HTMLAnchorElement>} e Event
   */
  const getActiveStyle = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const activeElementsIterable = document.getElementsByClassName(
      `${styles.active}`
    );
    const activeElementsArray = [...activeElementsIterable];

    for (let i = 0; i < activeElementsArray.length; i++) {
      activeElementsArray[i].classList.remove(`${styles.active}`);
    }

    const anchorTag = e.target as Element;
    switch (anchorTag.innerHTML) {
      case "Home":
        const homeTagMobile = document.getElementById("home-mobile");
        const homeTagDesktop = document.getElementById("home-desktop");
        homeTagMobile?.classList.add(`${styles.active}`);
        homeTagDesktop?.classList.add(`${styles.active}`);
        break;

      case "Projects":
        const projectsTagMobile = document.getElementById("projects-mobile");
        const projectsTagDesktop = document.getElementById("projects-desktop");
        projectsTagMobile?.classList.add(`${styles.active}`);
        projectsTagDesktop?.classList.add(`${styles.active}`);
        break;

      case "About":
        const aboutTagMobile = document.getElementById("about-mobile");
        const aboutTagDesktop = document.getElementById("about-desktop");
        aboutTagMobile?.classList.add(`${styles.active}`);
        aboutTagDesktop?.classList.add(`${styles.active}`);
        break;

      case "Contact":
        const contactTagMobile = document.getElementById("contact-mobile");
        const contactTagDesktop = document.getElementById("contact-desktop");
        contactTagMobile?.classList.add(`${styles.active}`);
        contactTagDesktop?.classList.add(`${styles.active}`);
        break;

      default:
        break;
    }
  };

  /**
   * On page load, the appropriate nav links are set to active according to
   * the URL.
   */
  useEffect(() => {
    const urlParts = window.location.href.split("/");
    const slug = urlParts[urlParts.length - 1];

    switch (slug) {
      case "":
        const homeTagMobile = document.getElementById("home-mobile");
        const homeTagDesktop = document.getElementById("home-desktop");
        homeTagMobile?.classList.add(`${styles.active}`);
        homeTagDesktop?.classList.add(`${styles.active}`);
        break;

      case "#projects":
        const projectsTagMobile = document.getElementById("projects-mobile");
        const projectsTagDesktop = document.getElementById("projects-desktop");
        projectsTagMobile?.classList.add(`${styles.active}`);
        projectsTagDesktop?.classList.add(`${styles.active}`);
        break;

      case "#about":
        const aboutTagMobile = document.getElementById("about-mobile");
        const aboutTagDesktop = document.getElementById("about-desktop");
        aboutTagMobile?.classList.add(`${styles.active}`);
        aboutTagDesktop?.classList.add(`${styles.active}`);
        break;

      case "#contact":
        const contactTagMobile = document.getElementById("contact-mobile");
        const contactTagDesktop = document.getElementById("contact-desktop");
        contactTagMobile?.classList.add(`${styles.active}`);
        contactTagDesktop?.classList.add(`${styles.active}`);
        break;

      default:
        break;
    }
  }, []);

  return (
    <header className={`${styles.header} ${navIsOpen && styles.open}`}>
      <div className={styles.wrapper}>
        <h1>David Moreno-Bautista</h1>
        <button
          id="mobile-nav-toggle"
          className={`${styles.mobileNavToggle} ${navIsOpen && styles.open}`}
          onClick={handleMobileNavToggle}
          aria-controls="mobile-nav"
          aria-expanded="false"
        >
          <span></span>
        </button>
      </div>

      <nav
        id="mobile-nav"
        className={`${styles.mobileNav} ${navIsOpen && styles.open}`}
      >
        <ul>
          <li>
            <Link href="/">
              <a id="home-mobile" onClick={(e) => getActiveStyle(e)}>
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/#projects">
              <a id="projects-mobile" onClick={(e) => getActiveStyle(e)}>
                Projects
              </a>
            </Link>
          </li>
          <li>
            <Link href="/#about">
              <a id="about-mobile" onClick={(e) => getActiveStyle(e)}>
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href="/#contact">
              <a id="contact-mobile" onClick={(e) => getActiveStyle(e)}>
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </nav>

      <nav id="desktop-nav" className={styles.desktopNav}>
        <ul>
          <li>
            <Link href="/">
              <a id="home-desktop" onClick={(e) => getActiveStyle(e)}>
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/#projects">
              <a id="projects-desktop" onClick={(e) => getActiveStyle(e)}>
                Projects
              </a>
            </Link>
          </li>
          <li>
            <Link href="/#about">
              <a id="about-desktop" onClick={(e) => getActiveStyle(e)}>
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href="/#contact">
              <a id="contact-desktop" onClick={(e) => getActiveStyle(e)}>
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
