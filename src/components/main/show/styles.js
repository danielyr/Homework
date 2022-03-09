import styled from "styled-components";
import { motion } from "framer-motion";

export const ImageWrapper = styled(motion.div)`
  width: 330;
  height: 420;
  display: flex;
  place-items: center;
  place-content: center;
  perspective: 400;
  cursor: pointer;
  margin: 1rem 0.75rem;
  z-index: 10;
`;

export const ShowImage = styled(motion.img)`
  width: 325px;
  height: 400px;
  border-radius: 10px;
  background-color: transparent;
  transition: 0.3s all;
  z-index: 10;
  object-fit: fill;
  opacity: ${({ blackandwhite }) => (blackandwhite < 2 ? 1 : 0.75)};
  -webkit-filter: ${({ blackandwhite }) =>
    blackandwhite < 2 ? "0" : "grayscale(100%)"};
  filter: ${({ blackandwhite }) =>
    blackandwhite < 2 ? "0" : "grayscale(100%)"};
`;
