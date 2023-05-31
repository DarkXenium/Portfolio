import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Intro() {
  const textRef = useRef();
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();
  const animationLeft = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "tween",
          duration: 1,
          ease: "easeOut",
        },
      });
      animationLeft.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "tween",
          duration: 3,
          ease: "easeInOut",
        },
      });
    }
    if (!inView) {
      animation.start({
        x: "100vw",
      });
      animationLeft.start({
        opacity: 0,
      });
    }
  }, [inView]);

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1000,
      backSpeed: 60,
      strings: [
        "Web Developing!",
        "Coding!",
        "Photoshop Editing!",
        "UI/UX Design!",
        "App Development!",
      ],
    });
  }, []);
  return (
    <div ref={ref} className="intro" id="intro">
      <motion.div className="left" animate={animationLeft}>
        <div className="imgContainer">
          <img className="bg" src="images/shape.png" alt="image" />
          <img className="myphoto" src="images/final.webp" alt="image" />
        </div>
      </motion.div>
      <motion.div className="right" animate={animation}>
        <div className="wrapper">
          <h2>
            As a recent Computer Science graduate, I bring a growth mindset,
            flexibility, and problem-solving skills to the table. I'm eager to
            apply the skills I've acquired through my studies and
            extracurricular activities. Open to learning new technologies, I'm
            always striving to improve. Constructive criticism helps me grow
            professionally, and my persistence and willingness to learn make me
            a valuable asset to any company. Actively seeking opportunities to
            contribute to a team and continue my career.
          </h2>
          <h1>Some of things I am interested in </h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
        </div>
        <motion.a href="#contact" animate={animationLeft}>
          <img src="images/down-arrow-16-460295.png" alt="down arrow" />
        </motion.a>
      </motion.div>
    </div>
  );
}
