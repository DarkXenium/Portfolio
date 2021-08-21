import "./profiles.scss";
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef } from 'react'

export default function Profiles() {

  const { ref, inView } = useInView({
    threshold: 0.2
});
const animation = useAnimation();
const animationLeft = useAnimation();
useEffect(() => {
    console.log("use effect hook, inView=", inView);
    if (inView) {
        animation.start({
            x: 0,
            y:0,
            transition: {
                type: 'tween', duration: 1, ease: "easeOut"
            }
        });
        animationLeft.start({
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring', duration: 2,bounce:0.3 
            }
        });
    }
    if (!inView) {
        animation.start({
            x: '100vw',
            y: 100
            
        });
        animationLeft.start({
            x: '-100vw',
            opacity: 0

        });

    }
}, [inView]);


  const data = [
    {
      id: 1,
      name: "HackerRank",
      title: "https://www.hackerrank.com/DarkXenium",
      img: "images/HackerRank_logo.webp",
      desc:
        "I started my coding journey here, managing to reach gold badges on different challenge sets.",
    },
    {
      id: 2,
      name: "CodeChef",
      title: "https://www.codechef.com/users/darkxenium",
      img: "images/codechef.webp",
      desc:
        "Delved into competitive programming recently, being an absolute beginner with 2 stars.",

    },
    {
      id: 3,
      name: "Github",
      title: "https://github.com/DarkXenium",
      img: "images/github.webp",
      desc:
        "I try to learn new technologies and implement them through projects. And what better place to showcase them than here.",
    },
    {
      id: 4,
      name: "LinkedIn",
      title: "https://www.linkedin.com/in/avinash-kumar-9246851b8/",
      img: "images/linkedin.webp",
      desc:
        "I try to learn new technologies and implement them through projects. And what better place to showcase them than here.",
    },
    {
      id: 5,
      name: "Instagram",
      title: "https://www.instagram.com/avinash.2077k/",
      img: "images/insta.webp",
      desc:
        "I try to learn new technologies and implement them through projects. And what better place to showcase them than here.",
    },
  ];
  return (
    <div ref={ref} className="profiles" id="profiles"
     
    >
      <h1>PROFILES</h1>
      <motion.div  className="container"
      animate={animation}>
        {data.map((d) => (
          <motion.div className={d.featured ? "card featured" : "card"}
            drag
            dragConstraints={{left:0,top:0,right:0,bottom:0}}
            dragElastic={0.5}
            whileHover={{backgroundColor:'#f2eee1',rotateY:'15deg',scale:1.1}}
          >
            <div className="top">
              <img src="images/right-arrow.webp" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4><a href={d.title} target="_blank">Click here to go there!</a></h4>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
