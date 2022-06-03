import styles from "./AboutSection.module.scss";

import React, { FunctionComponent } from "react";

const AboutSection: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <p>
        I was first introduced to computer science in the spring of 2016 when I
        took an Intro to Programming course that used Python as the programming
        language. I was doing an Economics degree at the time, but liked the
        course so much that I transferred into an Honours Bachelor of Science
        degree in Computer Science. I became really passionate about computer
        science and it reflected on my academic performance.
        <br />
        <br />
        In the fall of 2017, I became a teaching assistant working in labs of
        60+ students where we helped them in the debugging process for their
        computer programming exercises. We used Python, Java, C, and ARM
        Assembly as the languages of instruction, and we covered topics ranging
        from data structures and algorithms to object-oriented design.
        <br />
        <br />
        In winter of 2019, I discovered something new. I took an Internet
        Computing course, where we learned HTML5, CSS3, Bootstrap, JavaScript,
        jQuery, Ajax, PHP, and MySQL. I was fascinated by all that we can do in
        web development; we are basically shaping a reality that other people
        get to experience through an internet browser. I discovered that this is
        what I wanted to pursue professionally.
        <br />
        <br />
        I graduated in 2020 and decided to continue my education before pursuing
        a profession. I did a Graduate Certificate in Computer Applications
        Development from May 2021 to December 2021, where I learned more about
        responsive web design and was introduced to concepts such as the MVC
        design pattern in ASP.NET. I was also introduced to new technologies
        such as Node.js, Express.js, MongoDB, and React Native.
        <br />
        <br />
        Today, I have almost 3 years of experience developing responsive web
        applications. The technologies I have been using recently are HTML5,
        CSS3, Sass, TypeScript, JavaScript, React.js, Next.js, and Node.js. Now,
        I feel ready to enter the professional landscape seeking an entry level
        position as a front-end web developer.
      </p>
    </div>
  );
};

export default AboutSection;
