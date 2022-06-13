import styles from "./LinkButton.module.scss";

import React, { FunctionComponent } from "react";
import Link from "next/link";

interface Props {
  url: string;
  text: string;
}

const LinkButton: FunctionComponent<Props> = ({ url, text }) => {
  return (
    <Link href={url}>
      <a className={styles.link} target="_blank">
        {text}
      </a>
    </Link>
  );
};

export default LinkButton;
