import styles from "./IntroSkillOrbit.module.scss";

import React from "react";

function IntroSkillOrbit() {
  return (
    <>
      <div className={styles.containerMobile}>IntroSkillOrbit</div>
      <div className={styles.containerDesktop}>
        <div className={styles.orbit}>
          <img src="/images/self.png" alt="" />
          <ul>
            <li>
              <div>
                <img src="/images/HTML5-logo.svg" alt="" />
              </div>
              <p>HTML5</p>
            </li>
            <li>
              <div>
                <img src="/images/CSS3-logo.svg" alt="" />
              </div>
              <p>CSS3</p>
            </li>
            <li>
              <div>
                <img src="/images/Sass-logo.svg" alt="" />
              </div>
              <p>Sass</p>
            </li>
            <li>
              <div>
                <img src="/images/TypeScript-logo.svg" alt="" />
              </div>
              <p>TypeScript </p>
            </li>
            <li>
              <div>
                <img src="/images/JavaScript-logo.svg" alt="" />
              </div>
              <p>JavaScript</p>
            </li>
            <li>
              <div>
                <img src="/images/Reactjs-logo.svg" alt="" />
              </div>
              <p>React.js</p>
            </li>
            <li>
              <div>
                <img src="/images/Nextjs-logo.svg" alt="" />
              </div>
              <p>Next.js</p>
            </li>
            <li>
              <div>
                <img src="/images/Nodejs-logo.svg" alt="" />
              </div>
              <p>Node.js</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default IntroSkillOrbit;
