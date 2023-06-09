import "./menu.scss";
import { motion } from "framer-motion";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <motion.div
      className={"menu " + (menuOpen && "active")}
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
    >
      <ul>
        <motion.li
          onClick={() => setMenuOpen(false)}
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px white",
            originX: 0,
          }}
        >
          <a href="#intro">Intro</a>
        </motion.li>
        <motion.li
          onClick={() => setMenuOpen(false)}
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px white",
            originX: 0,
          }}
        >
          <a href="#projects">Projects</a>
        </motion.li>
        <motion.li
          onClick={() => setMenuOpen(false)}
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px white",
            originX: 0,
          }}
        >
          <a href="#experience">Work Experience</a>
        </motion.li>
        <motion.li
          onClick={() => setMenuOpen(false)}
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px white",
            originX: 0,
          }}
        >
          <a href="#progress">Skillset</a>
        </motion.li>
        <motion.li
          onClick={() => setMenuOpen(false)}
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px white",
            originX: 0,
          }}
        >
          <a href="#profiles">Profiles</a>
        </motion.li>
        <motion.li
          onClick={() => setMenuOpen(false)}
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px white",
            originX: 0,
          }}
        >
          <a href="#contact">Contact me</a>
        </motion.li>
      </ul>
    </motion.div>
  );
}
