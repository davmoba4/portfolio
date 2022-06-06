import styles from "./ProjectItem.module.scss";

import React, { FunctionComponent } from "react";
import Link from "next/link";

interface Props {
  title: string;
  imageUrl: string;
  projectUrl: string;
}

const ProjectItem: FunctionComponent<Props> = ({
  title,
  imageUrl,
  projectUrl,
}) => {
  return (
    <Link href={`${projectUrl}`}>
      <a className={styles.container}>
        <div className={styles.imageWrapper}>
          <img src={`${imageUrl}`} alt="" />
        </div>
        <p>{title}</p>
      </a>
    </Link>
  );
};

export default ProjectItem;
