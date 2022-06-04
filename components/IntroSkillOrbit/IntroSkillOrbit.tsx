import styles from "./IntroSkillOrbit.module.scss";

import React, { FunctionComponent } from "react";

const IntroSkillOrbit: FunctionComponent = () => {
  return (
    <>
      <div className={styles.containerMobile}>
        <img src="/images/orbit.png" />
      </div>
      <div className={styles.containerDesktop}>
        <input
          type="checkbox"
          id="rotationToggle"
          className={styles.rotationToggle}
        />
        <label htmlFor="rotationToggle" className={styles.rotationToggleLabel}>
          <div className={styles.checkboxUncheckedWrapper}>
            <img
              src="/images/checkbox-unchecked.svg"
              alt=""
              className={styles.checkboxUnchecked}
            />
          </div>
          <div className={styles.checkboxCheckedWrapper}>
            <img
              src="/images/checkbox-checked.svg"
              alt=""
              className={styles.checkboxChecked}
            />
          </div>
          stop <br /> rotation
        </label>
        <div className={styles.orbit}>
          <img src="/images/self.png" alt="" />
          <ul>
            <li>
              <img src="/images/HTML5-logo.svg" alt="" />
              <p>HTML5</p>
            </li>
            <li>
              <img src="/images/CSS3-logo.svg" alt="" />
              <p>CSS3</p>
            </li>
            <li>
              <img src="/images/Sass-logo.svg" alt="" />
              <p>Sass</p>
            </li>
            <li>
              <img src="/images/TypeScript-logo.svg" alt="" />
              <p>TypeScript </p>
            </li>
            <li>
              <img src="/images/JavaScript-logo.svg" alt="" />
              <p>JavaScript</p>
            </li>
            <li>
              <img src="/images/Reactjs-logo.svg" alt="" />
              <p>React.js</p>
            </li>
            <li>
              <img src="/images/Nextjs-logo.svg" alt="" />
              <p>Next.js</p>
            </li>
            <li>
              <img src="/images/Nodejs-logo.svg" alt="" />
              <p>Node.js</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default IntroSkillOrbit;
