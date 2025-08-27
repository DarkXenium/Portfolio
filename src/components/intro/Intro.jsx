import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import styled from "styled-components";

const Button = styled(motion.button)`
  padding: 2vmin 3rem;
  margin: 2vmin 2vmin 3vmin 0;
  font-size: 1rem;
  border: 2px solid #fff;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  background: transparent;
  overflow: hidden;
  color: #fff;
`;
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
      backDelay: 200,
      backSpeed: 30,
      strings: ["Web Development!", "Coding!", "UI/UX Design!", "End-To-End Application Dev!"],
    });
  }, []);

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/public/Avinash_Kumar.pdf";
    link.download = "Avinash_Kumar.pdf";
    link.click();
  };

  return (
    <div ref={ref} className="intro" id="intro">
      <motion.div className="left resume-holder" animate={animationLeft}>
          <div
            className="pdfContainer"
            style={{
              overflow: "hidden",
              width: "100%",
              borderRadius: "8px",
            }}
          >
          </div>
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
          <Viewer fileUrl="/Avinash_Kumar.pdf" />
        </Worker>
      </motion.div>
      <motion.div className="right" animate={animation}>
        <div className="wrapper">
          <h1>Resume</h1>
          <div className="btnContainers">
            <Button
              onClick={downloadResume}
              whileHover={{ scale: 0.9 }}
              whileTap={{
                scale: 0.95,
                backgroundColor: "rgb(98, 0, 211)",
                border: "none",
                color: "#000",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1.5 } }}
            >
              Download
            </Button>
            <div onClick={() => window.open("Avinash_Kumar.pdf", "_blank")}>
              <Button
                whileHover={{ scale: 0.9 }}
                id={"driveBtn"}
                whileTap={{
                  scale: 0.95,
                  backgroundColor: "rgb(98, 0, 211)",
                  border: "none",
                  color: "#000",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1.5 } }}
              >
                Open PDF
                <div className="btn2drive">
                  <svg
                    id="previewSVG"
                    width="24px"
                    height="24px"
                    fill="#6200d3"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path d="M19 13v6c0 1.105-.895 2-2 2H5c-1.105 0-2-.895-2-2V7c0-1.105.895-2 2-2h6v2H5v12h12v-6h2zM13 3v2h4.586l-7.793 7.793 1.414 1.414L19 6.414V11h2V3h-8z" />
                    </g>
                  </svg>
                </div>
              </Button>
            </div>
          </div>
          <h2 className="introParagraph">
            As a dedicated Software Engineer based in Bangalore with over 2 years of professional experience, I’ve contributed to impactful projects at SafeSend and CuriousJr. My core strengths lie in full-stack development, with expertise in C#, .NET, React JS, and MS SQL — delivering robust back-end systems and seamless front-end experiences.
            I hold certifications in Azure, React JS, SQL, front-end development, and both high-level and low-level system design. My passion for continuous learning and clean, scalable code makes me a reliable and growth-focused contributor to any development team.
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
