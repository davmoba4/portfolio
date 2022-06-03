import styles from "../styles/Home.module.scss";

import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header/Header";
import IntroText from "../components/IntroText/IntroText";
import IntroSkillOrbit from "../components/IntroSkillOrbit/IntroSkillOrbit";
import ProjectsDisplay from "../components/ProjectsDisplay/ProjectsDisplay";
import AboutSection from "../components/AboutSection/AboutSection";
import ContactSection from "../components/ContactSection/ContactSection";

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

        <div id="projects" className={styles.categoryTitleWrapper}>
          <h1>Projects</h1>
        </div>
        <ProjectsDisplay />

        <div id="about" className={styles.categoryTitleWrapper}>
          <h1>About</h1>
        </div>
        <AboutSection />

        <div id="contact" className={styles.categoryTitleWrapper}>
          <h1>Contact</h1>
        </div>
        <ContactSection />
      </main>
    </div>
  );
};

export default Home;
