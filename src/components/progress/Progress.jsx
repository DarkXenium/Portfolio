import "./progress.scss"
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef } from 'react'

export default function Progress() {

    const { ref, inView } = useInView({
        threshold: 0.2
    });
    const animation = useAnimation();
    const animationLeft = useAnimation();
    useEffect(() => {
        if (inView) {
            animation.start({
                y: 0,
                transition: {
                    type: 'tween', duration: 1, ease: "easeOut"
                }
            });
            animationLeft.start({
                x: 0,
                opacity: 1,
                transition: {
                    type: 'spring', duration: 2, bounce: 0.3
                }
            });
        }
        if (!inView) {
            animation.start({
                y: '100vw',

            });
            animationLeft.start({
                x: '-100vw',
                opacity: 0

            });

        }
    }, [inView]);


    return (
        <div ref={ref} className="progress" id="progress">
            <h1>SKILLS</h1>
            <h3>Some of the programming languages and frameworks that I know and work <b>with</b>. </h3>
            <motion.div className="container"
                animate={animationLeft}
            >
                <div className="item">
                    <img src="images/csharp.png" alt="" />
                    <h2>C# (C-Sharp)</h2>
                </div>
                <div className="item">
                    <img src="images/asp_logo.png" alt="" />
                    <h2>ASP.NET</h2>
                </div>
                <div className="item">
                    <img src="images/html.webp" alt="" />
                    <h2>HTML</h2>
                </div>
                <div className="item">
                    <img src="images/css2.webp" alt="" />
                    <h2>CSS</h2>
                </div>
                <div className="item">
                    <img src="images/python.webp" alt="" />
                    <h2>Python</h2>
                </div>
                <div className="item">
                    <img src="images/c++.webp" alt="" />
                    <h2>C/C++</h2>
                </div>
                <div className="item">
                    <img src="images/java.webp" alt="" />
                    <h2>Java</h2>
                </div>
                <div className="item">
                    <img src="images/ts.png" alt="" />
                    <h2>TypeScript</h2>
                </div>
                <div className="item">
                    <img src="images/js.webp" alt="" />
                    <h2>Javascript</h2>

                </div>
                <div className="item">
                    <img src="images/redux_original_logo.png" alt="" />
                    <h2>Redux</h2>

                </div>
                <div className="item">
                    <img src="images/react.webp" alt="" />
                    <h2>React JS</h2>
                </div>
                {/* <div className="item">
                    <img src="images/nextjs.webp" alt="" />
                    <h2>Next JS</h2>
                </div> */}
                <div className="item">
                    <img src="images/blockly.svg" alt="" />
                    <h2>Blockly JS</h2>
                </div>

            </motion.div>
        </div>
    )
}
