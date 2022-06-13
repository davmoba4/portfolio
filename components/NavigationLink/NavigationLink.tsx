import styles from "./NavigationLink.module.scss";

import React, { FunctionComponent } from "react";
import Link from "next/link";

interface Props {
  url: string;
  isPrevious: boolean;
  text: string;
}

const NavigationLink: FunctionComponent<Props> = ({
  url,
  isPrevious,
  text,
}) => {
  return (
    <Link href={url}>
      <a className={`${isPrevious ? styles.previous : styles.next}`}>
        {isPrevious ? (
          <>
            <span>&larr;</span>
            <h4>{text}</h4>
          </>
        ) : (
          <>
            <h4>{text}</h4>
            <span>&rarr;</span>
          </>
        )}
      </a>
    </Link>
  );
};

export default NavigationLink;
