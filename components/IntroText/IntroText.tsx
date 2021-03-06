import styles from "./IntroText.module.scss";

import React, { FunctionComponent } from "react";

const IntroText: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <h1>
        <span className={styles.introHighlighted}>Hi,</span>
        <br />
        <span className={styles.introClear}>I&#39;m David,</span>
        <br /> a front-end web developer.
      </h1>
      <p>
        I&#39;m a recent graduate with an Honours Bachelor of Science degree in
        Computer Science. Currently,{" "}
        <span className={styles.introHighlighted}>
          I&#39;m looking for an entry-level position
        </span>{" "}
        as a web developer. Some of the technologies I&#39;ve been working with
        recently are HTML5, CSS3, Sass, TypeScript, JavaScript, React.js,
        Next.js, and Node.js.
      </p>
    </div>
  );
};

export default IntroText;
