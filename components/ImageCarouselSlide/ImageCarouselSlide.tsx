import styles from "./ImageCarouselSlide.module.scss";

import React, { FunctionComponent } from "react";
import Link from "next/link";

interface Props {
  keys: string[];
  data: {
    imageUrl: string;
    imageAlt: string;
    previousUrl: string;
    nextUrl: string;
  };
  slug: string;
  backLink: string;
}

const ImageCarouselSlide: FunctionComponent<Props> = ({
  keys,
  data,
  slug,
  backLink,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <div className={styles.navIndicators}>
          {keys.map((key: string) => (
            <div
              key={key}
              className={`${key === slug ? styles.currentSlide : ""}`}
            ></div>
          ))}
        </div>
        <img src={`${data.imageUrl}`} alt={`${data.imageAlt}`} />
      </div>
      <Link href={backLink}>
        <a className={styles.backBtn} aria-label="back">
          &larr;
        </a>
      </Link>
      <Link href={`${data.previousUrl}`}>
        <a className={styles.previousBtn} aria-label="previous">
          &lsaquo;
        </a>
      </Link>
      <Link href={`${data.nextUrl}`}>
        <a className={styles.nextBtn} aria-label="next">
          &rsaquo;
        </a>
      </Link>
    </div>
  );
};

export default ImageCarouselSlide;
