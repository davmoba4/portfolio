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
          <p>
            connect is a web application that uses WebSockets to facilitate
            real-time text and emoji communication between users. Users can
            upload a profile picture, join one on one or group chats, and
            receive notifications and read receipts for each of their chats.
            Users can also update group chats by changing the name, adding or
            removing users, or changing the group admin.
            <br />
            <br />
            For user authentication, I use JWT authentication. I generate a JWT
            that is sent back to the client on login and signup. I use
            Express.js routers on the server to handle the requests for the REST
            API that I built for the application. Every route outside of the
            authentication route is protected by JWT authentication middleware
            that matches the JWT to the user on the database.
            <br />
            <br />
            To interface with the MongoDB database, I use Mongoose to create
            schemas for each collection organized as models. The controllers
            then take care of creating, fetching, editing, and deleting data
            using async and await. On the client side, I use Axios to send
            requests to the REST API that I built, which then communicates with
            the database.
            <br />
            <br />
            For real-time communication between users, I use a socket.io
            connection where the server is listening to different events such as
            the user typing for typing indicators and when a message is sent. A
            response is emitted on these events, which the client listens to in
            order to update the view accordingly.
            <br />
            <br />
            To style the application, I use Chakra UI extensively for its
            prebuilt layout components and icon library. I chose to have dark
            mode as the default color mode with the ability to switch to and
            from light mode using the appropriate React hooks to attain this.
            Using Chakra UI's style props to style the application without
            leaving the JSX, I adjust the colours on the spot to match the
            appropriate color mode that the user has chosen.
          </p>
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
