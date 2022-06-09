import styles from "../../styles/project/my-movies.module.scss";

import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../../components/Header/Header";
import Link from "next/link";
import Footer from "../../components/Footer/Footer";

const MyMovies: NextPage = () => {
  const [windowWidth, setWindowWidth] = useState<number>();

  /**
   * Converts a measurement from rem to pixels
   * @param rem Rem measurement to convert
   * @returns Pixel measurement equivalent to the inputted rem
   */
  const convertRemToPixels = (rem: number) => {
    return (
      rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
    );
  };

  /**
   * When the window is resized, the state variable holding its
   * width is adjusted accordingly.
   */
  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const onResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>David Moreno-Bautista - My Movies</title>
        <meta
          name="description"
          content="My Movies is a website for movie information and collection."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <section className={styles.intro}>
          <h1>My Movies</h1>
          <p>A website for movie information and collection.</p>
          <ul className={styles.introDetails}>
            <li>
              <span>role:</span> full-stack developer
            </li>
            <li>
              <span>context:</span> personal project.
            </li>
            <li>
              <span>period:</span> 2022
            </li>
          </ul>
          <h4>Technology:</h4>
          <ul className={styles.introSkills}>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Material-UI</li>
            <li>TypeScript</li>
            <li>React.js</li>
            <li>Context API</li>
            <li>Next.js</li>
            <li>Node.js</li>
            <li>Firebase Web SDK version 9</li>
            <li className={styles.lastIntroSkill}>TMDB API</li>
          </ul>
        </section>
        <div className={styles.imagesContainer}>
          <Link href="/carousel/my-movies/slide-01">
            <a
              className={`${
                windowWidth && windowWidth < convertRemToPixels(48)
                  ? styles.disabledLink
                  : ""
              }`}
            >
              <img
                src="/images/my-movies-01.png"
                alt="project screenshot one"
              />
            </a>
          </Link>
          <Link href="/carousel/my-movies/slide-02">
            <a
              className={`${
                windowWidth && windowWidth < convertRemToPixels(48)
                  ? styles.disabledLink
                  : ""
              }`}
            >
              <img
                src="/images/my-movies-02.png"
                alt="project screenshot two"
              />
            </a>
          </Link>
          <Link href="/carousel/my-movies/slide-03">
            <a
              className={`${
                windowWidth && windowWidth < convertRemToPixels(48)
                  ? styles.disabledLink
                  : ""
              }`}
            >
              <img
                src="/images/my-movies-03.png"
                alt="project screenshot three"
              />
            </a>
          </Link>
          <Link href="/carousel/my-movies/slide-04">
            <a
              className={`${
                windowWidth && windowWidth < convertRemToPixels(48)
                  ? styles.disabledLink
                  : ""
              }`}
            >
              <img
                src="/images/my-movies-04.png"
                alt="project screenshot four"
              />
            </a>
          </Link>
          <Link href="/carousel/my-movies/slide-05">
            <a
              className={`${
                windowWidth && windowWidth < convertRemToPixels(48)
                  ? styles.disabledLink
                  : ""
              }`}
            >
              <img
                src="/images/my-movies-05.png"
                alt="project screenshot five"
              />
            </a>
          </Link>
          <Link href="/carousel/my-movies/slide-06">
            <a
              className={`${
                windowWidth && windowWidth < convertRemToPixels(48)
                  ? styles.disabledLink
                  : ""
              }`}
            >
              <img
                src="/images/my-movies-06.png"
                alt="project screenshot six"
              />
            </a>
          </Link>
        </div>
        <p className={styles.summary}></p>
        <div className={styles.linksWrapper}>
          <Link href="https://davmoba4-my-movies.vercel.app/">
            <a className={`${styles.link} ${styles.website}`}>Visit Website</a>
          </Link>
          <Link href="https://github.com/davmoba4/my-movies">
            <a className={`${styles.link} ${styles.github}`}>GitHub Repo</a>
          </Link>
        </div>
        <div className={styles.navigationWrapper}>test</div>
        <Footer />
      </main>
    </div>
  );
};

export default MyMovies;
