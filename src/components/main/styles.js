import styled from "styled-components";
import { motion } from "framer-motion";

export const MainWrap = styled(motion.div)`
  height: 100%;
  width: 100%;
  background: #2eb82e;
  border-radius: 300px 0% 0% 0%;
  padding: 4rem 5rem 4rem 14rem;
  min-height: 100vh;
  overflow-x: hidden;

  @media screen and (max-width: 768px) {
    max-height: 100%;
    padding: 3rem 2rem;
    border-radius: 0% 0% 0% 0%;
  }
`;

export const MoviesWrap = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

export const Frame1 = styled(motion.div)`
  position: fixed;
  top: 80px;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #90e57e;
  z-index: 2;
`;

export const Frame2 = styled(Frame1)`
  background: #83ce73;
`;

export const Frame3 = styled(Frame1)`
  background: #77b868;
`;

export const Frame4 = styled(Frame1)`
  background: #659e57;
`;
