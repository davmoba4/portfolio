import styles from "./ProjectsDisplay.module.scss";

import React, { FunctionComponent } from "react";

const ProjectsDisplay: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <p>
        Examples of work I've done as a web developer. Click on each one for
        more details.
      </p>
      <div className={styles.contentWrapper}></div>
    </div>
  );
};

export default ProjectsDisplay;
