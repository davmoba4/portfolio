import styles from "./ProjectIntro.module.scss";

import React, { FunctionComponent } from "react";

interface Props {
  title: string;
  summary: string;
  role: string;
  context: string;
  period: string;
  skills: string[];
}

const ProjectIntro: FunctionComponent<Props> = ({
  title,
  summary,
  role,
  context,
  period,
  skills,
}) => {
  return (
    <section className={styles.intro}>
      <h1>{title}</h1>
      <p>{summary}</p>
      <ul className={styles.introDetails}>
        <li>
          <span>role:</span> {role}
        </li>
        <li>
          <span>context:</span> {context}
        </li>
        <li>
          <span>period:</span> {period}
        </li>
      </ul>
      <h4>Technology:</h4>
      <ul className={styles.introSkills}>
        {skills.map((skill, i) => (
          <li
            key={i.toString()}
            className={`${
              i === skills.length - 1 ? styles.lastIntroSkill : ""
            }`}
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectIntro;
