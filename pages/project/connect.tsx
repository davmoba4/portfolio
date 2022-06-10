import styles from "../../styles/project/connect.module.scss";

import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../../components/Header/Header";
import Link from "next/link";
import Footer from "../../components/Footer/Footer";

const Connect: NextPage = () => {
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
        <title>David Moreno-Bautista - connect</title>
        <meta
          name="description"
          content="connect is a real-time chat application."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <section className={styles.intro}>
          <h1>connect</h1>
          <p>A real-time chat application.</p>
          <ul className={styles.introDetails}>
            <li>
              <span>role:</span> full-stack developer
            </li>
            <li>
              <span>context:</span> personal project
            </li>
            <li>
              <span>period:</span> 2022
            </li>
          </ul>
          <h4>Technology:</h4>
          <ul className={styles.introSkills}>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Chakra UI</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Context API</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li className={styles.lastIntroSkill}>Socket.io</li>
          </ul>
        </section>
        <div className={styles.imagesContainer}>
          <Link href="/carousel/connect/slide-01">
            <a
              className={`${
                windowWidth && windowWidth < convertRemToPixels(48)
                  ? styles.disabledLink
                  : ""
              }`}
            >
              <img src="/images/connect-01.png" alt="project screenshot one" />
            </a>
          </Link>
          <Link href="/carousel/connect/slide-02">
            <a
              className={`${
                windowWidth && windowWidth < convertRemToPixels(48)
                  ? styles.disabledLink
                  : ""
              }`}
            >
              <img src="/images/connect-02.png" alt="project screenshot two" />
            </a>
          </Link>
          <Link href="/carousel/connect/slide-03">
            <a
              className={`${
                windowWidth && windowWidth < convertRemToPixels(48)
                  ? styles.disabledLink
                  : ""
              }`}
            >
              <img
                src="/images/connect-03.png"
                alt="project screenshot three"
              />
            </a>
          </Link>
          <Link href="/carousel/connect/slide-04">
            <a
              className={`${
                windowWidth && windowWidth < convertRemToPixels(48)
                  ? styles.disabledLink
                  : ""
              }`}
            >
              <img src="/images/connect-04.png" alt="project screenshot four" />
            </a>
          </Link>
        </div>
        <div className={`${styles.imagesContainer} ${styles.notFirst}`}>
          <Link href="/carousel/connect/slide-05">
            <a
              className={`${
                windowWidth && windowWidth < convertRemToPixels(48)
                  ? styles.disabledLink
                  : ""
              }`}
            >
              <img src="/images/connect-05.png" alt="project screenshot five" />
            </a>
          </Link>
          <Link href="/carousel/connect/slide-06">
            <a
              className={`${
                windowWidth && windowWidth < convertRemToPixels(48)
                  ? styles.disabledLink
                  : ""
              }`}
            >
              <img src="/images/connect-06.png" alt="project screenshot six" />
            </a>
          </Link>
          <Link href="/carousel/connect/slide-07">
            <a
              className={`${
                windowWidth && windowWidth < convertRemToPixels(48)
                  ? styles.disabledLink
                  : ""
              }`}
            >
              <img
                src="/images/connect-07.png"
                alt="project screenshot seven"
              />
            </a>
          </Link>
          <Link href="/carousel/connect/slide-08">
            <a
              className={`${
                windowWidth && windowWidth < convertRemToPixels(48)
                  ? styles.disabledLink
                  : ""
              }`}
            >
              <img
                src="/images/connect-08.png"
                alt="project screenshot eight"
              />
            </a>
          </Link>
        </div>
        <div className={styles.summaryWrapper}>
          <p>test</p>
        </div>
        <div className={styles.linksWrapper}>
          <Link href="https://davmoba4-connect.netlify.app/">
            <a className={`${styles.link} ${styles.website}`} target="_blank">
              Visit Website
            </a>
          </Link>
          <Link href="https://github.com/davmoba4/connect">
            <a className={`${styles.link} ${styles.github}`} target="_blank">
              GitHub Repo
            </a>
          </Link>
        </div>
        <div className={styles.navigationWrapper}>
          <Link href="/project/my-movies">
            <a className={styles.previous}>
              <span>&larr;</span>
              <h4>My Movies</h4>
            </a>
          </Link>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Connect;
