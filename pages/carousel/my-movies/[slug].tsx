import styles from "../../../styles/carousel/my-movies.module.scss";

import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";
import Link from "next/link";

interface PageData {
  [key: string]: {
    imageUrl: string;
    imageAlt: string;
    previousUrl: string;
    nextUrl: string;
  };
}

const PAGE_DATA: PageData = {
  "slide-01": {
    imageUrl: "/images/my-movies-01.png",
    imageAlt: "project screenshot one",
    previousUrl: "/carousel/my-movies/slide-06",
    nextUrl: "/carousel/my-movies/slide-02",
  },
  "slide-02": {
    imageUrl: "/images/my-movies-02.png",
    imageAlt: "project screenshot two",
    previousUrl: "/carousel/my-movies/slide-01",
    nextUrl: "/carousel/my-movies/slide-03",
  },
  "slide-03": {
    imageUrl: "/images/my-movies-03.png",
    imageAlt: "project screenshot three",
    previousUrl: "/carousel/my-movies/slide-02",
    nextUrl: "/carousel/my-movies/slide-04",
  },
  "slide-04": {
    imageUrl: "/images/my-movies-04.png",
    imageAlt: "project screenshot four",
    previousUrl: "/carousel/my-movies/slide-03",
    nextUrl: "/carousel/my-movies/slide-05",
  },
  "slide-05": {
    imageUrl: "/images/my-movies-05.png",
    imageAlt: "project screenshot five",
    previousUrl: "/carousel/my-movies/slide-04",
    nextUrl: "/carousel/my-movies/slide-06",
  },
  "slide-06": {
    imageUrl: "/images/my-movies-06.png",
    imageAlt: "project screenshot six",
    previousUrl: "/carousel/my-movies/slide-05",
    nextUrl: "/carousel/my-movies/slide-01",
  },
};

interface Props {
  data: {
    imageUrl: string;
    imageAlt: string;
    previousUrl: string;
    nextUrl: string;
  };
  slug: string;
}

const MyMovies: NextPage<Props> = ({ data, slug }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <div className={styles.navIndicators}>
          {Object.keys(PAGE_DATA).map((key: string) => (
            <div className={`${key === slug ? styles.currentSlide : ""}`}></div>
          ))}
        </div>
        <img src={`${data.imageUrl}`} alt={`${data.imageAlt}`} />
      </div>
      <Link href="/project/my-movies">
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

export default MyMovies;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(PAGE_DATA).map((key: string) => ({
    params: {
      slug: key,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = PAGE_DATA[params?.slug as string];
  const slug = params?.slug;

  return {
    props: {
      data,
      slug,
    },
  };
};
