import styled from "styled-components";
import { motion } from "framer-motion";

export const Nav = styled(motion.nav)`
  height: 80px;
  padding: 0rem 2rem;
  gap: 0.25rem;
  position: sticky;
  top: 0;
  color: #48bf53;
  z-index: 100;
  @media screen and (max-width: 868px) {
    height: 60px;
  }
`;

export const WrapForText = styled(motion.div)`
  display: flex;
  padding: 1rem;
  gap: 0.25rem;
  align-items: center;
  border-radius: 0% 0% 20px 20px;
  background: #fffff7;

  @media screen and (max-width: 868px) {
    background: transparent;
  }
`;

export const Text = styled(motion.div)`
  color: #a1a1a6;
  line-height: 1.14;
  font-weight: 300;
  letter-spacing: 0.007em;
  font-size: 1.2rem;
  font-style: thin;
  white-space: nowrap;
`;

export const TextDiv = styled(motion.div)`
  display: inline-block;
`;
