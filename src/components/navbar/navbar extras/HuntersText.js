import { motion } from "framer-motion";
import styled from "styled-components";

const banner = {
  animate: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.05,
    },
  },
};

const letterAnimRight = {
  initial: { opacity: 0, x: 50, color: "#cbcbcb" },
  animate: {
    opacity: 1,
    x: 0,
    color: "#48BF53",
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
      color: { duration: 2 },
    },
  },
};

const letterAniLeft = {
  initial: { opacity: 0, x: -50, color: "#cbcbcb" },
  animate: {
    opacity: 1,
    x: 0,
    color: "#48BF53",
    transition: {
      type: "easeInOut",
      duration: 0.8,
      color: { duration: 2 },
    },
  },
};

const letterMiddle = {
  initial: { opacity: 0, scale: 1.5 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: 1,
    },
  },
};

const HuntersText = ({ text }) => (
  <Name variants={banner} initial="initial" animate="animate">
    {[...text].map((letter, i) => (
      <Letter
        variants={
          i > 2 ? (i === 3 ? letterMiddle : letterAnimRight) : letterAniLeft
        }
        key={"letters" + i}
        index={i === 3 ? 1 : 0}
      >
        {letter}
      </Letter>
    ))}
  </Name>
);

const Name = styled(motion.div)`
  color: black;
  font-size: 2rem;
  line-height: 1.05;
  letter-spacing: -0.015em;
  display: flex;
`;

const Letter = styled(motion.div)`
  font-weight: ${(props) => (props.index ? 300 : 600)};
  font-style: regular;
`;

export default HuntersText;
