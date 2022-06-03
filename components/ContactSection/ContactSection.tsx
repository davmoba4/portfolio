import styles from "./ContactSection.module.scss";

import React, { FunctionComponent } from "react";
import Link from "next/link";

const ContactSection: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <p>The best way to contact me is to send me an email at:</p>
      <Link href="mailto:davmoba4@gmail.com">
        <a className={styles.email}>davmoba4@gmail.com</a>
      </Link>
      <p className={styles.lowerParagraph}>Feel free to check these out too:</p>
      <div className={styles.linksWrapper}>
        <Link href="https://github.com/davmoba4">
          <a target="_blank">
            <img
              src="/images/github-outline.svg"
              alt=""
              className={styles.link}
            />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/davmoba4/">
          <a target="_blank">
            <img
              src="/images/linkedin-outline.svg"
              alt=""
              className={styles.link}
            />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ContactSection;
