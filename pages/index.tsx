import styles from "../styles/Home.module.scss";

import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header/Header";
import IntroText from "../components/IntroText/IntroText";
import IntroSkillOrbit from "../components/IntroSkillOrbit/IntroSkillOrbit";
import ProjectsDisplay from "../components/ProjectsDisplay/ProjectsDisplay";

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
        <div className={styles.intro}>
          <IntroText />
          <IntroSkillOrbit />
        </div>
        <div className={styles.categoryTitleWrapper}>
          <h1 id="projects">
            Projects
          </h1>
        </div>
        <ProjectsDisplay/>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </main>
    </div>
  );
};

export default Home;
