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
        opacity: 1,
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
    <div div ref={ref} className="projects" id="projects">
      <motion.h1 className="heading" animate={animationLeft}>
        PROJECTS
      </motion.h1>
      <motion.h3 className="heading" animate={animationLeft}>
        Have a look at some of my recent-<b>work!</b>
      </motion.h3>
      <div className="projectsContainer">
        <motion.div class="item" animate={animation}>
          <div class="left">
            <div class="img">
              <img class="pokemon" src="images/poke1.webp" alt="" />
            </div>
          </div>
          <div class="right">
            <h2 class="project-title">Pokemon Eclipse</h2>
            <h3 class="project-sub-title">
              <b>A Web-Game</b>
            </h3>
            <p class="project-desc">
              It is a 1v1 Pokemon battle game where the user fights against the
              computer, having their very own pokemon. The user has to choose
              from a set of 4 moves which will effective or ineffective based on
              the Pokemon-typings.
            </p>
            <div class="buttons">
              <a
                href="https://github.com/DarkXenium/PokemonEclipse"
                class="primary-btn"
              >
                Source Code
              </a>
              <a
                href="https://pokemon-eclipse.netlify.app/"
                class="primary-btn outline external-link"
              >
                <span>Preview</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div class="item" animate={animation}>
          <div class="left">
            <div class="img">
              <img class="pokemon" src="images/Desktop - 1.webp" alt="" />
            </div>
          </div>
          <div class="right">
            <h2 class="project-title">A Blog Website</h2>
            <h3 class="project-sub-title">
              <b>A Mongodb Backend React Blog</b>
            </h3>
            <p class="project-desc">
              It is a Blogging website where users can Create their Account,
              read other user's blogs and also write their own and publish it to
              the world. The users can also Edit/Delete their blogs. It is a
              complete MERN stack application.
            </p>
            <div class="buttons">
              <a
                href="https://github.com/DarkXenium/mernStackBlogwebsite"
                class="primary-btn"
              >
                Source Code
              </a>
              <a
                href="https://darkxenium-blogs.onrender.com/"
                class="primary-btn outline external-link"
              >
                <span>Preview</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
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
