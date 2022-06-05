import styles from "../../styles/my-movies.module.scss";

import { NextPage } from "next";
import React from "react";
import Head from "next/head";
import Header from "../../components/Header/Header";

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
      </main>
    </div>
  );
};

export default MyMovies;
