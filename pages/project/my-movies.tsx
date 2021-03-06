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

const IMAGES = [
  {
    href: "/carousel/my-movies/slide-01",
    src: "/images/my-movies-01.png",
    alt: "project screenshot one",
  },
  {
    href: "/carousel/my-movies/slide-02",
    src: "/images/my-movies-02.png",
    alt: "project screenshot two",
  },
  {
    href: "/carousel/my-movies/slide-03",
    src: "/images/my-movies-03.png",
    alt: "project screenshot three",
  },
  {
    href: "/carousel/my-movies/slide-04",
    src: "/images/my-movies-04.png",
    alt: "project screenshot four",
  },
  {
    href: "/carousel/my-movies/slide-05",
    src: "/images/my-movies-05.png",
    alt: "project screenshot five",
  },
  {
    href: "/carousel/my-movies/slide-06",
    src: "/images/my-movies-06.png",
    alt: "project screenshot six",
  },
];

const MyMovies: NextPage = () => {
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
        <ProjectIntro
          title="My Movies"
          summary="A website for movie information and collection."
          role="full-stack developer"
          context="personal project"
          period="2022"
          skills={[
            "HTML5",
            "CSS3",
            "Material-UI",
            "TypeScript",
            "React.js",
            "Context API",
            "Next.js",
            "Node.js",
            "Firebase Web SDK version 9",
            "TMDB API",
          ]}
        />
        <ProjectImages isFirst={true} images={IMAGES} />
        <div className={styles.summaryWrapper}>
          <p>
            My Movies is a web application that uses{" "}
            <span className={styles.textHighlighted}>
              server-side rendering
            </span>{" "}
            to display movie information, such as the title, release year,
            rating, genres, overview, and vote average. Users can play the movie
            trailer, add the movie to their collection, and see trending,
            top-rated, similar, and recommended movies. Users are also able to
            search for a movie or remove movies from their collection.
            <br />
            <br />
            For user authentication, I use a combination of{" "}
            <span className={styles.textHighlighted}>
              Firebase email and password based authentication and React&#39;s
              context API
            </span>
            . I wrap the application in an authentication context provider that
            listens for any change in token IDs from Firebase. It then sets the
            user as a state variable. This ensures that the user is verified on
            every page load. I then use a{" "}
            <span className={styles.textHighlighted}>custom React hook</span> to
            provide access to the user-related state variables.
            <br />
            <br />
            To obtain all the movie information, I use TMDB API, which is a{" "}
            <span className={styles.textHighlighted}>
              REST API that can be consumed
            </span>{" "}
            to interface with a large movie database. For the index page, I use{" "}
            <span className={styles.textHighlighted}>Axios</span> to request
            trending and top rated movies on the server side. I then filter the
            resultant data to provide the appropriate images and information to
            the client. The search page also utilizes the REST API to fetch
            results, and clicking on each result renders a similar page to the
            index on the client side.
            <br />
            <br />
            For the &#34;my collection&#34; feature, I use the{" "}
            <span className={styles.textHighlighted}>
              Firebase Web SDK version 9
            </span>{" "}
            to communicate with a{" "}
            <span className={styles.textHighlighted}>
              Firebase Realtime Database
            </span>{" "}
            instant. I use custom rules to make sure users can only access and
            edit their own data. To update the view on each addition or deletion
            to the user&#39;s collection, I use a listener for children added or
            removed from the node pertaining to that user on the database.
            <br />
            <br />
            To style the application, I use{" "}
            <span className={styles.textHighlighted}>
              CSS3 modules to build reusable layout components from scratch
            </span>
            . To{" "}
            <span className={styles.textHighlighted}>
              remain loyal to design mockups
            </span>
            , I use CSS elements such as linear and radial gradients that
            achieve the desired effects. I also use{" "}
            <span className={styles.textHighlighted}>
              media queries to ensure the website is responsive
            </span>
            . Overall, I rely mostly on the power of CSS3 to meet the required
            goals while using{" "}
            <span className={styles.textHighlighted}>Material-UI</span>{" "}
            sparingly for niche features, such as the modal video used for the
            movie trailers and its{" "}
            <span className={styles.textHighlighted}>icon library</span>.
          </p>
        </div>
        <div className={styles.linksWrapper}>
          <LinkButton
            url="https://davmoba4-my-movies.vercel.app/"
            text="Visit Website"
          />
          <LinkButton
            url="https://github.com/davmoba4/my-movies"
            text="GitHub Repo"
          />
        </div>
        <div className={styles.navigationWrapper}>
          <NavigationLink
            url="/project/connect"
            isPrevious={false}
            text="connect"
          />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default MyMovies;
