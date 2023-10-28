import React from "react";
import "./landing.scss";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";

const media = {
  desktop: "@media(max-width:1024px)",
};
const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  overflow: hidden;
  align-items: center;
  background: rgb(26, 26, 26);
  ${media.desktop} {
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 118vh;
  padding: 3rem calc((100vw - 1300px) / 2);

  @media screen and (max-width: 768px) {
    grid-grid-template-columns: 1fr;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 2rem;
  margin-bottom: 40px;

  h1 {
    margin-bottom: 0.5rem;
    font-size: 33px;
    font-weight: 900;
  }
  h2 {
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    color: rgb(98, 0, 200);
  }
  #vertical {
    writing-mode: vertical-rl;
    z-index: 1;
    position: absolute;
    right: 8px;
    color: grey;
    font-size: 15px;
    font-weight: 500;

    ${media.desktop} {
      writing-mode: horizontal-tb;
      bottom: 50px;
    }
  }

  p {
    margin: 2rem 0;
    overflow: hidden;
    font-size: 3rem;
    line-height: 1;
    color: white;
    font-weight: 500;
    font-family: "Roboto", sans-serif;
    ${media.desktop} {
      font-size: 2rem;
    }
  }
`;

const Button = styled(motion.button)`
  padding: 1rem 3rem;
  margin-top: 20px;
  font-size: 1rem;
  border: 2px solid #fff;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  background: transparent;
  overflow: hidden;
  color: #fff;
`;

const Image = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 250px;
  max-height: 250px;
`;

const ColumnRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  position: relative;
  overflow: hidden;

  ${Image}:nth-child(1) {
    top: 65px;
    left: 5px;

    ${media.desktop} {
      top: 6rem;
      width: 140px;
      height: 150px;
    }
  }

  ${Image}:nth-child(2) {
    top: 160px;
    right: 30px;
    width: 600px;
    height: 160px;
    ${media.desktop} {
      top: 18rem;
      width: 193px;
      height: 128px;
      left: -8px;
    }
  }

  ${Image}:nth-child(3) {
    top: 350px;
    left: 50px;
    ${media.desktop} {
      top: 30rem;
      left: 2rem;
      width: 170px;
      height: 180px;
    }
  }
`;

const Landing = () => {
  const animationLeft = useAnimation();

  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <Section id="landing">
      <Container>
        <ColumnLeft>
          <motion.h1
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
          >
            Hi there <b>!</b>
          </motion.h1>
          <motion.p
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.5 }}
          >
            I'm Avinash Kumar
          </motion.p>
          <motion.h2
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            Welcome to my Website
          </motion.h2>
          {/* <motion.h2
            id="vertical"
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
          >
            You can Drag the items around &gt;&gt;&gt;
          </motion.h2> */}
          <a href="#intro">
            <Button
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
              About me
            </Button>
          </a>
        </ColumnLeft>
        <ColumnRight>
          <motion.img
            initial={{ opacity: 0, size: 1.5 }}
            animate={{ opacity: 1, transition: { duration: 2 } }}
            className="myphoto"
            src="images/profilepic.png"
            alt="image"
          />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default Landing;
