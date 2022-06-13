import styles from "./ImageRow.module.scss";

import React, { FunctionComponent, useEffect, useState } from "react";
import Link from "next/link";

interface Props {
  isFirst: boolean;
  images: {
    href: string;
    src: string;
    alt: string;
  }[];
}

const ImageRow: FunctionComponent<Props> = ({ isFirst, images }) => {
  const [windowWidth, setWindowWidth] = useState<number>();

  /**
   * Converts a measurement from rem to pixels
   * @param rem Rem measurement to convert
   * @returns Pixel measurement equivalent to the inputted rem
   */
  const convertRemToPixels = (rem: number) => {
    return (
      rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
    );
  };

  /**
   * When the window is resized, the state variable holding its
   * width is adjusted accordingly.
   */
  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const onResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div
      className={`${styles.imagesContainer} ${!isFirst ? styles.notFirst : ""}`}
    >
      {images.map((image) => {
        const urlParts = image.href.split("/");
        const slug = urlParts[urlParts.length - 1];
        return (
          <Link key={slug} href={image.href}>
            <a
              className={`${
                windowWidth && windowWidth < convertRemToPixels(48)
                  ? styles.disabledLink
                  : ""
              }`}
            >
              <img src={image.src} alt={image.alt} />
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default ImageRow;
