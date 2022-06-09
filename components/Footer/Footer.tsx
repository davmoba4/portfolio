import styles from "./Footer.module.scss";

import React, { FunctionComponent } from "react";
import Link from "next/link";

const Footer: FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <Link href="mailto:davmoba4@gmail.com">
        <a className={styles.email}>davmoba4@gmail.com</a>
      </Link>
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
    </footer>
  );
};

export default Footer;
