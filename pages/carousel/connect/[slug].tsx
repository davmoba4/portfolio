import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";
import ImageCarouselSlide from "../../../components/ImageCarouselSlide/ImageCarouselSlide";

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
    imageUrl: "/images/connect-01.png",
    imageAlt: "project screenshot one",
    previousUrl: "/carousel/connect/slide-08",
    nextUrl: "/carousel/connect/slide-02",
  },
  "slide-02": {
    imageUrl: "/images/connect-02.png",
    imageAlt: "project screenshot two",
    previousUrl: "/carousel/connect/slide-01",
    nextUrl: "/carousel/connect/slide-03",
  },
  "slide-03": {
    imageUrl: "/images/connect-03.png",
    imageAlt: "project screenshot three",
    previousUrl: "/carousel/connect/slide-02",
    nextUrl: "/carousel/connect/slide-04",
  },
  "slide-04": {
    imageUrl: "/images/connect-04.png",
    imageAlt: "project screenshot four",
    previousUrl: "/carousel/connect/slide-03",
    nextUrl: "/carousel/connect/slide-05",
  },
  "slide-05": {
    imageUrl: "/images/connect-05.png",
    imageAlt: "project screenshot five",
    previousUrl: "/carousel/connect/slide-04",
    nextUrl: "/carousel/connect/slide-06",
  },
  "slide-06": {
    imageUrl: "/images/connect-06.png",
    imageAlt: "project screenshot six",
    previousUrl: "/carousel/connect/slide-05",
    nextUrl: "/carousel/connect/slide-07",
  },
  "slide-07": {
    imageUrl: "/images/connect-07.png",
    imageAlt: "project screenshot seven",
    previousUrl: "/carousel/connect/slide-06",
    nextUrl: "/carousel/connect/slide-08",
  },
  "slide-08": {
    imageUrl: "/images/connect-08.png",
    imageAlt: "project screenshot eight",
    previousUrl: "/carousel/connect/slide-07",
    nextUrl: "/carousel/connect/slide-01",
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

const Connect: NextPage<Props> = ({ data, slug }) => {
  return (
    <ImageCarouselSlide
      keys={Object.keys(PAGE_DATA)}
      data={data}
      slug={slug}
      backLink="/project/connect"
    />
  );
};

export default Connect;

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
