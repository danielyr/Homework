//* ---------------------------------------- Libraries Imports ---------------------------------------------
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, useAnimation } from "framer-motion";
import { useRecoilState } from "recoil";
import { currentShowState } from "../../atoms/selectedShow";

//* ---------------------------------------- Styles Imports ---------------------------------------------
import * as styles from "./styles";
import * as animations from "./animations";

//* ---------------------------------------- Components Imports ---------------------------------------------
import ImgShow from "../show/ImgShow";

//?=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//! ------------------------------------------ TopTen component ------------------------------------------------
//?=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// This component maps over a category, creates a ImgShow component for every show in the given category

const TopTen = ({ genre, shows, index }) => {
  // Global state - checks if its the first load,shortening the animation if not
  const [currentShow, setCurrentShowState] = useRecoilState(currentShowState);
  // Controls to make a bounce animation every time infinite scroll happens
  const controls = useAnimation();
  // Stores the shows and every time that infinite scroll happens adds 10 more shows
  // "(meaning that after the last show, the first show comes again, then the second and so on...)"
  const [showsState, setShowsState] = useState(shows);
  // Stores the name of the show user is hovering now, if user is not hovering = null
  const [selectedShowName, setSelectedShowName] = useState(null);
  // Necessary for the B&W effect on hover
  const [arrayForHover, setArrayForHover] = useState(
    new Array(shows.length).fill(0)
  );

  // Ref of the shows div
  const topTenRef = useRef();

  // If user scrolled (horizontally) to the end
  // Make the horizontal lists an infinite scrolling loop
  const onScroll = () => {
    if (topTenRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = topTenRef.current;
      if (scrollLeft + clientWidth > scrollWidth - 100) {
        setArrayForHover(new Array(showsState.length + 10).fill(0));
        setShowsState([...showsState, ...shows]);
        controls.start({ scale: [1, 1.05, 1], transition: { duration: 0.45 } });
      }
    }
  };

  // Powers the regular fade animation when shows div appears on screen
  // Necessary because of the bounce animation of infinite scroll loop (view onScroll func)

  useEffect(() => {
    controls.start("animate");
  }, []);

  return (
    <styles.TopTenWrap
      variants={
        currentShow === "firstLoad"
          ? animations.mainAnim
          : animations.mainAnimNotFirstLoad
      }
      initial="initial"
      animate={controls}
    >
      <styles.TitleAndSubWrap>
        <styles.Title
          variants={
            index > 1 || currentShow !== "firstLoad"
              ? animations.titleAnimScroll
              : animations.titleAnim
          }
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {genre.toUpperCase()}
        </styles.Title>

        <AnimatePresence exitBeforeEnter>
          {selectedShowName && (
            <styles.SubTitle
              variants={animations.fadeSubtitle}
              initial="initial"
              animate="animate"
              exit="exit"
              key={"subTitle" + selectedShowName}
            >
              {selectedShowName}
            </styles.SubTitle>
          )}
        </AnimatePresence>
      </styles.TitleAndSubWrap>

      <styles.ShowsWrap onScroll={onScroll} ref={topTenRef}>
        {showsState.map((show, index) => (
          <ImgShow
            movieData={show}
            index={index}
            arrayForHover={arrayForHover}
            setArrayForHover={setArrayForHover}
            showsLength={showsState.length}
            setSelectedShowName={setSelectedShowName}
            alt="1"
            key={"topTenKey" + index}
          />
        ))}
      </styles.ShowsWrap>
    </styles.TopTenWrap>
  );
};

export default TopTen;
