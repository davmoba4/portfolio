import styles from "./IntroText.module.scss";

import React, { FunctionComponent } from "react";

const IntroText: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <h1>
        <span className={styles.introHighlighted}>Hi,</span>
        <br></br>
        <span className={styles.introClear}>I'm David,</span> <br></br> a
        front-end web developer.
      </h1>
      <p>
        I'm a recent graduate with an Honours Bachelor of Science degree in
        Computer Science. Currently,{" "}
        <span className={styles.introHighlighted}>
          I'm looking for an entry-level position
        </span>{" "}
        as a web developer. Some of the technologies I've been working with
        recently are HTML5, CSS3, Sass, TypeScript, JavaScript, React.js,
        Next.js, and Node.js.
      </p>
    </div>
  );
};

export default IntroText;
