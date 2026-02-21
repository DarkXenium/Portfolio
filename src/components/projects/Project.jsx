import "./project.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";

export default function Project() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();
  const animationLeft = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: "tween",
          duration: 1,
          ease: "easeOut",
        },
      });
      animationLeft.start({
        opacity: 0.9,
        transition: {
          duration: 3,
        },
      });
    }
    if (!inView) {
      animation.start({
        x: "100vw",
        opacity: 0,
        y: 0,
      });
      animationLeft.start({
        opacity: 0,
      });
    }
  }, [inView]);

  return (
    <div ref={ref} className="projects" id="projects">
      <motion.h1 className="heading" animate={animationLeft}>
        PROJECTS
      </motion.h1>
      <motion.h3 className="heading" animate={animationLeft}>
        Have a look at some of my recent-<b>work!</b>
      </motion.h3>
      <div className="projectsContainer">
        <motion.div className="item" animate={animation}>
          <div className="left">
            <div className="img">
              <img className="pokemon" src="images/poke1.webp" alt="" />
            </div>
          </div>
          <div className="right">
            <h2 className="project-title">Pokemon EliseZ</h2>
            <h3 className="project-sub-title">
              <b>A Web-Game</b>
            </h3>
            <p className="project-desc">
              It is a 1v1 Pokemon battle game where the user fights against the
              computer, having their very own pokemon. The user has to choose
              from a set of 4 moves which will effective or ineffective based on
              the Pokemon-typings.
            </p>
            <div className="buttons">
              <a
                href="https://github.com/DarkXenium/PokemonEclipse"
                className="primary-btn"
              >
                Source Code
              </a>
              <a
                href="https://pokemon-elisez.netlify.app/"
                className="primary-btn outline external-link"
              >
                <span>Preview</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div className="item" animate={animation}>
          <div className="left">
            <div className="img">
              <img className="pokemon" src="images/Desktop - 1.webp" alt="" />
            </div>
          </div>
          <div className="right">
            <h2 className="project-title">A Blog Website</h2>
            <h3 className="project-sub-title">
              <b>A Mongodb Backend React Blog</b>
            </h3>
            <p className="project-desc">
              It is a Blogging website where users can Create their Account,
              read other user's blogs and also write their own and publish it to
              the world. The users can also Edit/Delete their blogs. It is a
              complete MERN stack application.
            </p>
            <div className="buttons">
              <a
                href="https://github.com/DarkXenium/mernStackBlogwebsite"
                className="primary-btn"
              >
                Source Code
              </a>
              <a
                href="https://darkxenium-blogs.onrender.com/"
                className="primary-btn outline external-link"
              >
                <span>Preview</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
