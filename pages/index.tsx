import styles from "../styles/Home.module.scss";

import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>David Moreno-Bautista</title>
        <meta
          name="description"
          content="David Moreno-Bautista is a front-end web developer experienced with HTML5, CSS3, Sass, TypeScript, JavaScript, React.js, Next.js, and Node.js."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div style={{color: "var(--color-teal-light)"}}>test</div>
        <div style={{color: "var(--color-teal-light)"}}>test</div>
        <div style={{color: "var(--color-teal-light)"}}>test</div>
        <div style={{color: "var(--color-teal-light)"}}>test</div>
        <div style={{color: "var(--color-teal-light)"}}>test</div>
        <div style={{color: "var(--color-teal-light)"}}>test</div>
        <div style={{color: "var(--color-teal-light)"}}>test</div>
        <div style={{color: "var(--color-teal-light)"}}>test</div>
        <div style={{color: "var(--color-teal-light)"}}>test</div>
        <div style={{color: "var(--color-teal-light)"}}>test</div>
        <div style={{color: "var(--color-teal-light)"}}>test</div>
        <div style={{color: "var(--color-teal-light)"}}>test</div>
        <div style={{color: "var(--color-teal-light)"}}>test</div>
        <div style={{color: "var(--color-teal-light)"}}>test</div>
        <div style={{color: "var(--color-teal-light)"}}>test</div>
        <div style={{color: "var(--color-teal-light)"}}>test</div>
        <div style={{color: "var(--color-teal-light)"}}>test</div>
        <div style={{color: "var(--color-teal-light)"}}>test</div>
        <div style={{color: "var(--color-teal-light)"}}>test</div>
        <div style={{color: "var(--color-teal-light)"}}>test</div>
        <div style={{color: "var(--color-teal-light)"}}>test</div>
        <div style={{color: "var(--color-teal-light)"}}>test</div>
        <div style={{color: "var(--color-teal-light)"}}>test</div>
        <div style={{color: "var(--color-teal-light)"}}>test</div>
        <div style={{color: "var(--color-teal-light)"}}>test</div>
        <div style={{color: "var(--color-teal-light)"}}>test</div>
        <div style={{color: "var(--color-teal-light)"}}>test</div>
        <div style={{color: "var(--color-teal-light)"}}>test</div>
      </main>
    </div>
  );
};

export default Home;
