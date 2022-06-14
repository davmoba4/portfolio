import styles from "./AboutSection.module.scss";

import React, { FunctionComponent } from "react";

const AboutSection: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <p>
        I was first introduced to computer science in the spring of{" "}
        <span className={styles.textHighlighted}>2016</span> when I took an{" "}
        <span className={styles.textHighlighted}>
          Intro to Programming course that used Python
        </span>{" "}
        as the programming language. I was doing an Economics degree at the
        time, but liked the course so much that I transferred into an{" "}
        <span className={styles.textHighlighted}>
          Honours Bachelor of Science degree in Computer Science
        </span>
        . I became really passionate about computer science and it reflected on
        my academic performance.
        <br />
        <br />
        In the fall of <span className={styles.textHighlighted}>2017</span>, I
        became a{" "}
        <span className={styles.textHighlighted}>
          teaching assistant working in labs of 60+ students
        </span>{" "}
        where we helped them in the debugging process for their computer
        programming exercises. We used{" "}
        <span className={styles.textHighlighted}>
          Python, Java, C, and ARM Assembly
        </span>{" "}
        as the languages of instruction, and we covered topics ranging from{" "}
        <span className={styles.textHighlighted}>
          data structures and algorithms to object-oriented design
        </span>
        .
        <br />
        <br />
        In winter of <span className={styles.textHighlighted}>2019</span>, I
        discovered something new. I took an Internet Computing course, where we{" "}
        <span className={styles.textHighlighted}>
          learned HTML5, CSS3, Bootstrap, JavaScript, jQuery, Ajax, PHP, and
          MySQL
        </span>
        . I was fascinated by all that we can do in web development; we are
        basically shaping a reality that other people get to experience through
        an internet browser. I discovered that this is what I wanted to pursue
        professionally.
        <br />
        <br />I graduated in 2020 and decided to continue my education before
        pursuing a profession. I completed a{" "}
        <span className={styles.textHighlighted}>
          Graduate Certificate in Computer Applications Development from May
          2021 to December 2021
        </span>
        , where I learned more about{" "}
        <span className={styles.textHighlighted}>responsive web design</span>{" "}
        and was introduced to concepts such as the{" "}
        <span className={styles.textHighlighted}>
          MVC design pattern in ASP.NET
        </span>
        . I was also introduced to new technologies such as{" "}
        <span className={styles.textHighlighted}>
          Node.js, Express.js, MongoDB, and React Native
        </span>
        .
        <br />
        <br />
        <span className={styles.textHighlighted}>Today</span>, I have almost{" "}
        <span className={styles.textHighlighted}>3 years of experience</span>{" "}
        developing responsive web applications. The technologies I have been
        using recently are{" "}
        <span className={styles.textHighlighted}>
          HTML5, CSS3, Sass, TypeScript, JavaScript, React.js, Next.js, and
          Node.js
        </span>
        . Now, I feel ready to enter the professional landscape{" "}
        <span className={styles.textHighlighted}>
          seeking an entry level position as a front-end web developer
        </span>
        .
      </p>
    </div>
  );
};

export default AboutSection;
