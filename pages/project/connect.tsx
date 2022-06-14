import styles from "../../styles/project.module.scss";

import { NextPage } from "next";
import React from "react";
import Head from "next/head";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ProjectIntro from "../../components/ProjectIntro/ProjectIntro";
import ProjectImages from "../../components/ImageRow/ImageRow";
import LinkButton from "../../components/LinkButton/LinkButton";
import NavigationLink from "../../components/NavigationLink/NavigationLink";

const IMAGES_ROW_1 = [
  {
    href: "/carousel/connect/slide-01",
    src: "/images/connect-01.png",
    alt: "project screenshot one",
  },
  {
    href: "/carousel/connect/slide-02",
    src: "/images/connect-02.png",
    alt: "project screenshot two",
  },
  {
    href: "/carousel/connect/slide-03",
    src: "/images/connect-03.png",
    alt: "project screenshot three",
  },
  {
    href: "/carousel/connect/slide-04",
    src: "/images/connect-04.png",
    alt: "project screenshot four",
  },
];
const IMAGES_ROW_2 = [
  {
    href: "/carousel/connect/slide-05",
    src: "/images/connect-05.png",
    alt: "project screenshot five",
  },
  {
    href: "/carousel/connect/slide-06",
    src: "/images/connect-06.png",
    alt: "project screenshot six",
  },
  {
    href: "/carousel/connect/slide-07",
    src: "/images/connect-07.png",
    alt: "project screenshot seven",
  },
  {
    href: "/carousel/connect/slide-08",
    src: "/images/connect-08.png",
    alt: "project screenshot eight",
  },
];

const Connect: NextPage = () => {
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
        <ProjectIntro
          title="connect"
          summary="A real-time chat application."
          role="full-stack developer"
          context="personal project"
          period="2022"
          skills={[
            "HTML5",
            "CSS3",
            "Chakra UI",
            "JavaScript",
            "React.js",
            "Context API",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Socket.io",
          ]}
        />
        <ProjectImages isFirst={true} images={IMAGES_ROW_1} />
        <ProjectImages isFirst={false} images={IMAGES_ROW_2} />
        <div className={styles.summaryWrapper}>
          <p>
            connect is a web application that uses{" "}
            <span className={styles.textHighlighted}>WebSockets</span> to
            facilitate <span className={styles.textHighlighted}>real-time</span>{" "}
            text and emoji communication between users. Users can upload a
            profile picture, join one on one or group chats, and receive
            notifications and read receipts for each of their chats. Users can
            also update group chats by changing the name, adding or removing
            users, or changing the group admin.
            <br />
            <br />
            For user authentication, I use{" "}
            <span className={styles.textHighlighted}>JWT authentication</span>.
            I generate a JWT that is sent back to the client on login and
            signup. I use{" "}
            <span className={styles.textHighlighted}>Express.js routers</span>{" "}
            on the server to handle the requests for the{" "}
            <span className={styles.textHighlighted}>
              REST API that I built
            </span>{" "}
            for the application. Every route outside of the authentication route
            is protected by JWT authentication{" "}
            <span className={styles.textHighlighted}>middleware</span> that
            matches the JWT to the user on the database.
            <br />
            <br />
            To interface with the{" "}
            <span className={styles.textHighlighted}>MongoDB database</span>, I
            use{" "}
            <span className={styles.textHighlighted}>
              Mongoose to create schemas
            </span>{" "}
            for each collection organized as{" "}
            <span className={styles.textHighlighted}>models</span>. The{" "}
            <span className={styles.textHighlighted}>controllers</span> then
            take care of creating, fetching, editing, and deleting data using{" "}
            <span className={styles.textHighlighted}>async and await</span>. On
            the client side, I use{" "}
            <span className={styles.textHighlighted}>
              Axios to send requests
            </span>{" "}
            to the REST API that I built, which then communicates with the
            database.
            <br />
            <br />
            For real-time communication between users, I use a{" "}
            <span className={styles.textHighlighted}>
              socket.io connection
            </span>{" "}
            where the server is listening to different events such as the user
            typing for typing indicators and when a message is sent. A response
            is emitted on these events, which the client listens to in order to{" "}
            <span className={styles.textHighlighted}>
              update the view accordingly
            </span>
            .
            <br />
            <br />
            To style the application, I use{" "}
            <span className={styles.textHighlighted}>Chakra UI</span>{" "}
            extensively for its{" "}
            <span className={styles.textHighlighted}>
              prebuilt layout components and icon library
            </span>
            . I chose to have dark mode as the default color mode with the{" "}
            <span className={styles.textHighlighted}>
              ability to switch to and from light mode
            </span>{" "}
            using the appropriate{" "}
            <span className={styles.textHighlighted}>React hooks</span> to
            attain this. Using Chakra UI&#39;s{" "}
            <span className={styles.textHighlighted}>style props</span> to style
            the application without leaving the JSX, I adjust the colours on the
            spot to match the appropriate color mode that the user has chosen.
          </p>
        </div>
        <div className={styles.linksWrapper}>
          <LinkButton
            url="https://davmoba4-connect.netlify.app/"
            text="Visit Website"
          />
          <LinkButton
            url="https://github.com/davmoba4/connect"
            text="GitHub Repo"
          />
        </div>
        <div className={styles.navigationWrapper}>
          <NavigationLink
            url="/project/my-movies"
            isPrevious={true}
            text="My Movies"
          />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Connect;
