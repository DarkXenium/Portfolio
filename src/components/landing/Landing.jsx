import "./landing.scss";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const Section = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #0a0a0a;
  padding: 6rem 5rem;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 768px) {
    padding: 4rem 2rem;
  }
`;

const BackgroundCanvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  display: block;
  pointer-events: none;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

const DecorativeDot = styled.div`
  position: absolute;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, rgba(150,100,255,0.9), rgba(100,60,200,0.6));
  filter: blur(6px);
  opacity: 0.9;
  pointer-events: none;
  animation: float 4s ease-in-out infinite;

  @keyframes float {
    0% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-8px) scale(1.05); }
    100% { transform: translateY(0) scale(1); }
  }
`;

const LeftAccent = styled.div`
  position: absolute;
  left: 4rem;
  top: 30vh;
  width: 2px;
  height: 22vh;
  background: linear-gradient(180deg, rgba(150,100,255,0.14), rgba(150,100,255,0));
  filter: blur(2px);
  pointer-events: none;
  z-index: 1;
`;

const TagList = styled.div`
  margin-top: 1.6rem;
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  background: rgba(255,255,255,0.06);
  color: #ddd;
  padding: 0.45rem 0.9rem;
  border-radius: 999px;
  font-size: 0.76rem;
  letter-spacing: 0.06em;
  transition: background 160ms ease, transform 160ms ease;

  &:hover {
    background: rgba(150,100,255,0.12);
    transform: translateY(-3px);
  }
`;

const Bio = styled(motion.p)`
  margin-top: 1.2rem;
  max-width: 58ch;
  color: #bdbdbd;
  font-size: 0.95rem;
  line-height: 1.6;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  flex: 1;
  padding-top: 2rem;
`;

const Char = styled.span`
  display: inline-block;
  padding: 0 4px;
  line-height: 1;
  transition: transform 220ms cubic-bezier(.2,.9,.3,1), background 220ms, box-shadow 220ms, color 220ms;
  will-change: transform, background;
  border-radius: 6px;
  color: inherit;
`;

const NameHeading = styled(motion.h1)`
  font-size: 7rem;
  font-weight: 900;
  color: #ffffff;
  line-height: 1.05;
  margin: 0;
  overflow: visible;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif;
  letter-spacing: -0.02em;
  transition: transform 180ms ease, text-shadow 180ms ease;
  cursor: default;

  &:hover {
    transform: translateY(-2px);
  }

  /* When parent hovered, lift each char with stagger (via inline transition-delay on each char) */
  &:hover ${Char} {
    transform: translateY(-6px) scale(1.03);
    background: rgba(255,255,255,0.04);
    box-shadow: 0 10px 30px rgba(0,0,0,0.45);
    backdrop-filter: blur(6px);
  }

  ${Char}:hover {
    transform: translateY(-8px) scale(1.06) !important;
    background: rgba(255,255,255,0.06) !important;
    box-shadow: 0 12px 36px rgba(0,0,0,0.5) !important;
    backdrop-filter: blur(8px) !important;
  }

  @media screen and (max-width: 1024px) {
    font-size: 5rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled(motion.div)`
  margin-top: 1.2rem;
  font-size: 0.95rem;
  color: #999;
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif;
  letter-spacing: 0.05em;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const CTA = styled(motion.a)`
  margin-top: 2rem;
  padding: 1rem 2.2rem;
  background: #ffffff;
  color: #000;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.85rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;

  &:hover {
    background: #f0f0f0;
    transform: translateY(-2px);
  }

  @media screen and (max-width: 768px) {
    padding: 0.8rem 1.8rem;
    font-size: 0.75rem;
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 28px;
  transform: translateX(-50%);
  text-align: center;
  color: #999;
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  pointer-events: none;
`;

const Landing = () => {
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationId;

    const drawWhirlWithSwirl = () => {
      // Clear with dark background
      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = mousePos.x;
      const centerY = mousePos.y;

      // Create subtle swirling gradient
      const randomMultiplier = 0.95 + Math.random() * 0.1;
      const gradient1 = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        300 * randomMultiplier
      );
      gradient1.addColorStop(0, "rgba(100, 50, 200, 0.2)");
      gradient1.addColorStop(0.6, "rgba(50, 100, 200, 0.08)");
      gradient1.addColorStop(1, "rgba(10, 10, 10, 0)");

      ctx.fillStyle = gradient1;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 300 * randomMultiplier, 0, Math.PI * 2);
      ctx.fill();

      // Secondary very subtle gradient
      const randomMultiplier2 = 0.9 + Math.random() * 0.15;
      const gradient2 = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        150 * randomMultiplier2
      );
      gradient2.addColorStop(0, "rgba(150, 100, 255, 0.08)");
      gradient2.addColorStop(1, "rgba(50, 50, 150, 0)");

      ctx.fillStyle = gradient2;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 150 * randomMultiplier2, 0, Math.PI * 2);
      ctx.fill();
    };

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const animate = () => {
      drawWhirlWithSwirl();
      animationId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, [mousePos]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const scrollVariants = {
    hidden: {
    },
    visible: {
      opacity: 0.6,
      transition: { delay: 2, duration: 0.6 },
    },
    animate: {
      y: [0, 10, 0],
      transition: { duration: 2, repeat: Infinity },
    },
  };

  return (
    <Section id="landing">
      <BackgroundCanvas ref={canvasRef} />
      <ContentWrapper>
        <DecorativeDot style={{ top: 36, left: 48, width: 12, height: 12, opacity: 0.6 }} />
        <DecorativeDot style={{ top: 120, right: 140, width: 18, height: 18, opacity: 0.5, animationDuration: '5s' }} />
        <LeftAccent />
        <Container
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} style={{ color: '#bbb', fontSize: '0.95rem', marginBottom: '10px' }}>
            Hi, I'm
          </motion.div>
          <NameHeading
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.99 }}
          >
            Avinash Kumar
          </NameHeading>
          <Subtitle variants={itemVariants}>
            Full Stack Developer <br /> Crafting Digital Experiences
          </Subtitle>
          <TagList>
            <Tag>Engineering</Tag>
            <Tag>Design</Tag>
            <Tag>Backend</Tag>
            <Tag>UI / UX</Tag>
          </TagList>

          <Bio
            variants={itemVariants}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            I design and build applications — blending engineering rigor
            with thoughtful user interfaces. I enjoy solving complex problems, shipping delightful product experiences.
          </Bio>
          <CTA
            href="#intro"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore My Work
          </CTA>
        </Container>
        <ScrollIndicator
          variants={scrollVariants}
          initial="hidden"
          animate={["visible", "animate"]}
        >
          SCROLL TO EXPLORE ↓
        </ScrollIndicator>
      </ContentWrapper>
    </Section>
  );
};

export default Landing;
