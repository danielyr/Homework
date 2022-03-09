import styled from "styled-components";
import { motion } from "framer-motion";

export const TopTenWrap = styled(motion.div)``;

export const TitleAndSubWrap = styled(motion.div)`
  display: flex;
  align-items: center;
`;

export const Title = styled(motion.h1)`
  color: #fffff7;
  line-height: 1.14;
  font-weight: 600;
  letter-spacing: 0.007em;
  font-size: 2.75rem;
  font-style: bold;
  margin: 0.5rem 0.5rem 0.5rem 0.75rem;
`;

export const SubTitle = styled(motion.h1)`
  color: #dcdcdc;
  line-height: 1.14;
  font-weight: 300;
  letter-spacing: 0.001em;
  font-size: 1.65rem;
  font-style: thin;
`;

export const ShowsWrap = styled(motion.div)`
  display: flex;
  overflow-x: visible;
  overflow-y: hidden;

  ::-webkit-scrollbar {
    height: 13px;
    width: 4px;
    background: #fff;
  }
  ::-webkit-scrollbar-thumb:horizontal {
    background: #186618;
    border-radius: 100px;
  }
`;

export const Shows = styled(motion.div)``;
