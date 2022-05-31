import styles from "./ProjectsDisplay.module.scss";

import React, { FunctionComponent } from "react";
import ProjectItem from "../ProjectItem/ProjectItem";

const ProjectsDisplay: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <p>
        Examples of work I've done as a web developer. Click on each one for
        more details.
      </p>
      <div className={styles.contentWrapper}>
        <ProjectItem
          title="My Movies"
          imageUrl="/images/my-movies-00.png"
          projectUrl="/project/my-movies"
        />
        <ProjectItem
          title="connect"
          imageUrl="/images/connect-00.png"
          projectUrl="/project/connect"
        />
      </div>
    </div>
  );
};

export default ProjectsDisplay;
