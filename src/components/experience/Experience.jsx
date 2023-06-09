import "./experience.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";
const Experience = () => {
  const animationLeft = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  useEffect(() => {
    if (inView) {
      animationLeft.start({
        opacity: 1,
        transition: {
          duration: 3,
        },
      });
    }
    if (!inView) {
      animationLeft.start({
        opacity: 0,
      });
    }
  }, [inView]);
  return (
    <div div ref={ref} className="experience" id="experience">
      <motion.h1 className="heading" animate={animationLeft}>
        MY EXPERIENCES
      </motion.h1>
      <motion.h3 className="heading" animate={animationLeft}>
        The companies I have worked at, provided my services and gained valuable
        <b>_work experience</b> .
      </motion.h3>
      <div className="timeline-container">
        <ul className="timeline">
          <li>
            <div className="timeline-photo">
              <a href="https://curiousjr.com/" target="_blank">
                <img src="images/curiousjr.png" alt="curiousjr Photo" />
              </a>
            </div>
            <div className="timeline-content">
              <small className="date">SEP 2021 - DEC 2021</small>
              <h2 id="curiousjr">CuriousJr</h2>
              <h3 className="positionTitle">
                Software Development Intern Level 2
              </h3>
              <p className="companyInfo">
                During my internship at CuriousJr, I quickly advanced from
                Software Development Intern Level 1 to Level 2. I gained
                extensive experience in web development, utilizing HTML, CSS,
                JavaScript, and Google's no-code Library Blockly Js.
                Additionally, I took on the responsibility of mentoring fellow
                interns. This opportunity allowed me to enhance my skills while
                contributing to the team's success.
              </p>
            </div>
          </li>
          <li>
            <div className="timeline-photo">
              <a href="https://safesend.com/" target="_blank">
                <img src="images/safesend.jpg" alt="safesend Photo" />
              </a>
            </div>
            <div className="timeline-content">
              <small className="date">
                FEB 2023 - <bold id="presentColor">PRESENT</bold>
              </small>
              <h2 id="safesend">SafeSend</h2>
              <h3 className="positionTitle">Associate Software Engineer</h3>
              <p className="companyInfo">
                Currently, I work at SafeSend where I contribute to the
                development of various tax-filing products which is used in the
                USA. My role involves utilizing C# and ASP.NET in the backend,
                along with React.js in the frontend. Additionally, I actively
                engage in working with microservices and regularly undertake
                proof-of-concept (POC) projects.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
