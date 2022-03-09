import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Wrapper = styled(motion.div)`
  height: 80vh;
  width: 60%;
  background: #fffff7;
  border-radius: 0% 300px 300px 0px;
  padding: 1.5rem 10rem;

  box-shadow: rgba(72, 191, 83, 0.4) 0px 0px 0px 2px,
    rgba(72, 191, 83, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  position: relative;
  overflow: hidden;

  @media (max-width: 1300px) {
    width: 80%;
  }

  @media screen and (max-width: 768px) {
    height: 100%;
    width: 100%;
    border-radius: 0px;
    box-shadow: 0px;
    padding: 0.7rem 6rem;
    overflow: auto;
  }
`;

export const LoaderWrap = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
`;

export const LoaderForShow = styled(motion.div)`
  display: inline-block;
  width: 80px;
  height: 80px;

  &:after {
    content: " ";
    display: block;
    width: 95px;
    height: 95px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid rgba(72, 191, 83, 0.4);
    border-color: rgba(72, 191, 83, 0.4) transparent rgba(72, 191, 83, 0.4)
      transparent;
    animation: rotation 1.2s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const BackButton = styled(Link)`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: transparent;
  white-space: nowrap;
  padding: 10px 32px;
  color: rgba(72, 191, 83, 0.7);
  user-select: none;
  font-size: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s all;
  border-radius: 30px;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: 3rem;
    width: 3rem;
  }

  &:hover {
    background: rgba(72, 191, 83, 1);
    color: #fff;
    transform: scale(1.05);
  }

  @media screen and (max-width: 768px) {
    top: 5px;
    left: 5px;
  }
`;

export const WrapForData = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  height: 70vh;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 100%;
  }
`;
export const Picture = styled(motion.img)`
  height: 60vh;
  width: 22vw;
  align-self: center;
  border-radius: 30px;

  @media screen and (max-width: 768px) {
    width: 70vw;
    margin-top: 2rem;
  }
`;
export const Name = styled(motion.h3)`
  color: black;
  font-size: 4rem;
  line-height: 1.05;
  letter-spacing: -0.015em;
`;
export const Rating = styled(motion.div)`
  background: #edbf17;
  padding: 0.5rem;
  width: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0rem 0.5rem;
  border-radius: 20px;
`;
export const Summary = styled(motion.div)`
  padding: 0rem 0.45rem;
  margin: 0.5rem 0.75rem;
  line-height: 1.75;
  font-size: 1.1rem;
  ::first-letter {
    font-size: 1.8rem;
    line-height: 1.45;
    font-weight: bold;
  }
  max-height: 40vh;
  overflow-y: auto;

  ::-webkit-scrollbar-thumb:vertical {
    background: rgba(72, 191, 83, 0.7);
    -webkit-border-radius: 100px;
  }
  ::-webkit-scrollbar-thumb:vertical:active {
    background: rgba(72, 191, 83, 1);
    -webkit-border-radius: 100px;
  }

  @media screen and (max-width: 768px) {
    max-height: 100%;
    width: 70vw;
    margin: 0.5rem 0rem;

    padding: 0rem;
  }
`;
export const Text = styled(motion.div)``;
