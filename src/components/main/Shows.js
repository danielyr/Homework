//* ---------------------------------------- Libraries Imports ---------------------------------------------
import React from "react";
import { Outlet } from "react-router-dom";
import { useRecoilState } from "recoil";
import { currentShowState } from "../atoms/selectedShow";

//* ---------------------------------------- Styles Imports ---------------------------------------------
import * as styles from "./styles";
import * as animations from "./animtion";

//* ---------------------------------------- Components Imports ---------------------------------------------
import TopTen from "./shows/TopTen";

//?=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//! ------------------------------------------ Shows component ------------------------------------------------
//?=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// This component maps over the categories, creates a TopTen component for every category

const Shows = ({ shows }) => {
  // Global state - checks if its the first load,shortening the animation if not
  const [currentShow, setCurrentShowState] = useRecoilState(currentShowState);

  return (
    <>
      <styles.MainWrap
        variants={animations.mainWrapAnim}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {currentShow === "firstLoad" ? (
          <>
            <styles.Frame1 variants={animations.slider1} />
            <styles.Frame2 variants={animations.slider2} />
            <styles.Frame3 variants={animations.slider3} />
            <styles.Frame4 variants={animations.slider4} />
          </>
        ) : null}

        <styles.MoviesWrap>
          {shows
            ? shows.map(([key, value], index) => {
                return (
                  <TopTen
                    genre={key}
                    shows={value}
                    key={"TopTen" + index}
                    index={index}
                  />
                );
              })
            : null}
        </styles.MoviesWrap>
      </styles.MainWrap>
      <Outlet />
    </>
  );
};

export default Shows;
