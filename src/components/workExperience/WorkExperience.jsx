import "./workExperience.scss";
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
              <a href="https://thomsonreuters.com/" target="_blank">
                <img src="images/trLogo.png" alt="thomsonreuters Logo" />
              </a>
            </div>
            <div className="timeline-content">
              <small className="date">May 2025 - <bold id="presentColor">PRESENT</bold></small>
              <h2 id="curiousjr">Thomson Reuters</h2>
              <h3 className="positionTitle">
                Software Engineer
              </h3>
              <p className="companyInfo">
                1. Contributed to the development of enterprise-grade legal and financial technology solutions, ensuring reliability and compliance with industry standards. 
                2. Worked extensively with <b>C#, .NET</b> for back-end development and <b>React JS</b> for crafting user-centric, responsive front-end interfaces.
                3. Collaborated closely with cross-functional teams to implement scalable APIs and microservices that improved data flow and performance.
                4. Involved in performance optimization, debugging, and code reviews to uphold code quality, security, and maintainability.
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
                Jun 2024 - April 2025
              </small>
              <h2 id="safesend">SafeSend</h2>
              <h3 className="positionTitle">Software Engineer</h3>
              <p className="companyInfo">
                1. Utilized C#, .NET, and MS SQL for efficient back‐end
                development, optimizing data management processes. 2. Improved
                user interface with React JS, resolved bugs, and contributed to
                API development for seamless functionality. 3. Enhanced code
                coverage and developed scalable microservices, improving system
                performance and maintainability.
              </p>
              <small className="date">FEB 2023 - Jun 2024</small>
              <h2 id="safesend">SafeSend</h2>
              <h3 className="positionTitle">Associate Software Engineer</h3>
              <p className="companyInfo">
                1. Collaborating with other engineers on designing and
                implementing new features using C#, .NET, and React JS. 2.
                Assisting in the optimization of database operations and
                ensuring data integrity with MS SQL. 3. Participating in code
                reviews and debugging sessions to maintain high code quality and
                performance. Supporting the development of APIs and
                microservices, ensuring seamless integration and scalability.
              </p>
            </div>
          </li>
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
        </ul>
      </div>
    </div>
  );
};

export default Experience;
