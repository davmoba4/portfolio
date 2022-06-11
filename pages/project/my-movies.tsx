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
        <div className={styles.summaryWrapper}>
          <p>
            My Movies is a web application that uses server-side rendering to
            display movie information, such as the title, release year, rating,
            genres, overview, and vote average. Users can play the movie
            trailer, add the movie to their collection, and see trending,
            top-rated, similar, and recommended movies. Users are also able to
            search for a movie or remove movies from their collection.
            <br />
            <br />
            For user authentication, I use a combination of Firebase email and
            password based authentication and React&#39;s context API. I wrap
            the application in an authentication context provider that listens
            for any change in token IDs from Firebase. It then sets the user as
            a state variable. This ensures that the user is verified on every
            page load. I then use a custom React hook to provide access to the
            user-related state variables.
            <br />
            <br />
            To obtain all the movie information, I use TMDB API, which is a REST
            API that can be accessed to interface with a large movie database.
            For the index page, I use Axios to request trending and top rated
            movies on the server side. I then filter the resultant data to
            provide the appropriate images and information to the client. The
            search page also utilizes the REST API to fetch results, and
            clicking on each result renders a similar page to the index on the
            client side.
            <br />
            <br />
            For the &#34;my collection&#34; feature, I use the Firebase Web SDK
            version 9 to communicate with a Firebase Realtime Database instant.
            I use custom rules to make sure users can only access and edit their
            own data. To update the view on each addition or deletion to the
            user&#39;s collection, I use a listener for children added or
            removed from the node pertaining to that user on the database.
            <br />
            <br />
            To style the application, I use CSS3 modules to organize the
            selectors into sections where each one pertains only to a particular
            component. I utilize linear and radial gradients to achieve the
            desired effects on the images to match an initial design, and I use
            media queries to ensure the website is responsive. Overall, I rely
            mostly on the power of CSS3 to meet the required goals while using
            Material-UI sparingly for niche features, such as the modal video
            used for the movie trailers and its icon library.
          </p>
        </div>
        <div className={styles.linksWrapper}>
          <Link href="https://davmoba4-my-movies.vercel.app/">
            <a className={`${styles.link} ${styles.website}`} target="_blank">
              Visit Website
            </a>
          </Link>
          <Link href="https://github.com/davmoba4/my-movies">
            <a className={`${styles.link} ${styles.github}`} target="_blank">
              GitHub Repo
            </a>
          </Link>
        </div>
        <div className={styles.navigationWrapper}>
          <Link href="/project/connect">
            <a className={styles.next}>
              <h4>connect</h4>
              <span>&rarr;</span>
            </a>
          </Link>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default MyMovies;
