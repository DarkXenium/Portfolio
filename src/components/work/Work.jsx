import { useState } from "react";
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { useEffect} from 'react'
import "./work.scss";

export default function Work() {

  const { ref, inView } = useInView({
    threshold: 0.2
  });
  const animation = useAnimation();
  const animationLeft = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: 'spring', duration: 0.1, ease: "easeOut",bounce:0.7
        }
      });
      animationLeft.start({

        opacity: 1,
        transition: {
          duration: 2
        }
      });
    }
    if (!inView) {
      animation.start({
        x: '100vw',

      });
      animationLeft.start({
        opacity: 0

      });

    }
  }, [inView]);

  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      title: "PokeMMORPG LOGIN Design",
      desc:
        "The design is made in Figma following UI/UX principles. The website design is then implemented using React JS.",
      img: "./images/PokemonUI.webp",
      link: "https://pokemmorpg.netlify.app/",
      repo: "https://github.com/DarkXenium/PokemonEclipse",
      figma: "https://dribbble.com/shots/16286967-Pokemon-Eclipse"
    },
    {
      id: "2",
      title: "DXENIUM. Blogs",
      desc:
        "It is a personel blog site designed using Figma. It is Recreated in a form of a website using REACT and animated through Framer Motion library.",
      img:
        "./images/BloggingWebsite.webp",
      link: "https://avinash-blog-site.netlify.app/",
      repo: "https://github.com/DarkXenium/blog",
      figma: "https://www.figma.com/proto/pPCvVTeoD27OlsYPFrpS2F/Blogging-Website?node-id=1%3A3&scaling=scale-down&page-id=0%3A1"
    },

  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div ref={ref} className="works" id="works">
      <motion.h3
        animate={animationLeft}
      >My_<b> UI/UX_</b>Designs.</motion.h3>
      <motion.div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <motion.div className="item"
              whileHover={{ opacity: 1, backgroundColor: "#3c38b0",scale:0.99}}
              transition={{duration:1}}

            >
              <div className="left">
                <div className="leftContainer">
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span><a href={d.figma} target="_blank">UI/UX Design .</a></span>
                  <span><a href={d.link} target="_blank">Website Link .</a></span>
                  <span><a href={d.repo} target="_blank">Source Code .</a></span>
                </div>
              </div>
              {/* <a href="https://dribbble.com/shots/16286967-Pokemon-Eclipse/attachments/8159151?mode=media"> */}
              <motion.div className="right"
              whileHover={{rotate:20,scale:1.1 }}
              transition={{duration:1}}
              >
                <img
                  src={d.img}
                  alt=""
                />
              </motion.div>

              {/* </a> */}
            </motion.div>
          </div>
        ))}
      </motion.div>
      <img
        src="images/arrow.webp"
        className="arrow left"
        alt=""
        onClick={() => handleClick()}
      />
      <img
        src="images/arrow.webp"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
