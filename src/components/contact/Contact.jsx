import "./contact.scss"
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef } from 'react'
export default function Contact() {
     const { ref, inView } = useInView({
    threshold: 0.2
});
const animation = useAnimation();
const animationLeft = useAnimation();
useEffect(() => {
    console.log("use effect hook, inView=", inView);
    if (inView) {
        animation.start({
           opacity:1,
            transition: {
                type: 'tween', duration: 3, ease: "easeOut"
            }
        });
        animationLeft.start({
           y: 0,
            opacity: 1,
            
        });
    }
    if (!inView) {
        animation.start({
            
            opacity:0
            
        });
        animationLeft.start({
            y: '100vh',
            opacity: 0

        });

    }
}, [inView]);

    return (
        <div ref={ref} className="contact" id="contact">
            <div className="left">
                <img src="images/shake.svg" alt="handshake" />
            </div>
            <div className="right">
                <h2>Contac<b>t.</b></h2>
                <motion.form name="contact-form" method="POST" data-netlify="true"
                animate={animation}>
                    <input type="hidden" name="form-name" value="contact-form"  />
                    <input type="text" name="name" placeholder="Name" required/>
                    <input type="text" name="email" placeholder="Email" required/>
                    <textarea name="message" placeholder="Message" required></textarea>
                    <motion.button type="submit"
                        animate={animationLeft}
                    >Send</motion.button>
                </motion.form>
            </div>
        </div>
    )
}
