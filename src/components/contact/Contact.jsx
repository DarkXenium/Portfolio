import "./contact.scss"
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react'
export default function Contact() {
    const { ref, inView } = useInView({
        threshold: 0.2
    });
    const animation = useAnimation();
    const animationLeft = useAnimation();
    useEffect(() => {
        if (inView) {
            animation.start({
                opacity: 1,
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

                opacity: 0

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
                <motion.h1 className="heading" animate={animationLeft}>Contac<b>t.</b></motion.h1>
                {(() => {
                    const recipient = 'avinash2k20@gmail.com';
                    const subject = encodeURIComponent('Opportunity / Hello');
                    const body = encodeURIComponent('Hi Avinash, have an opportunity / question for you. Please reply when convenient. Thanks,');

                    const sendEmail = () => {
                        window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
                    };

                    return (
                        <motion.div className="email-card" animate={animation} initial={{ opacity: 0, y: 30 }}>
                            <div className="email-content">
                                <h3>Have a job or project?</h3>
                                <p>I'm open to new opportunities — engineering, frontend, or collaboration. Drop me a line and I'll get back to you.</p>
                                <div className="tag-row">
                                    <span className="role">Backend</span>
                                    <span className="role">Frontend</span>
                                </div>
                                <motion.button
                                    type="button"
                                    onClick={sendEmail}
                                    className="send-email-button"
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Mail Me
                                </motion.button>
                            </div>
                        </motion.div>
                    );
                })()}
            </div>
        </div>
    )
}
