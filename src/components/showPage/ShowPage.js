//* ---------------------------------------- Libraries Imports ---------------------------------------------
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { currentShowState } from "../atoms/selectedShow";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";

//* ---------------------------------------- Styles Imports ---------------------------------------------
import * as styles from "./styles";
import * as animations from "./animation";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { AiFillStar } from "react-icons/ai";

//?=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//! ----------------------------------- Show Page component -------------------------------------------------
//?=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

const ShowPage = () => {
  // Getting the showId from the params (was set on onClick show image)
  const { showId } = useParams();

  // Global state contains the current show to render
  const [currentShow, setCurrentShowState] = useRecoilState(currentShowState);

  // In case of a user the comes not from the main page, fetch show info by showId
  useEffect(() => {
    if (currentShow === "firstLoad" || currentShow === null) {
      axios.get(`https://api.tvmaze.com/shows/${showId}`).then((res) => {
        const { data } = res;
        setCurrentShowState(data);
      });
    }
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <styles.Wrapper
      variants={animations.mainWrapAnim}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <styles.BackButton to={"/"}>
        <IoChevronBackCircleSharp />
      </styles.BackButton>

      <AnimatePresence>
        {!(currentShow === "firstLoad" || currentShow === null) ? (
          <styles.WrapForData
            variants={animations.fadeAnim}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <styles.Text>
              <styles.Name>{currentShow?.name}</styles.Name>
              <styles.Rating>
                <AiFillStar />
                <motion.span>{currentShow?.rating?.average}</motion.span>
              </styles.Rating>
              {/* Sanitization needed with dangerouslySetInnerHTML  */}
              <styles.Summary
                dangerouslySetInnerHTML={{ __html: currentShow?.summary }}
              />
            </styles.Text>
            <styles.Picture src={currentShow?.image?.medium} />
          </styles.WrapForData>
        ) : (
          <styles.LoaderWrap
            variants={animations.loaderAnim}
            initial="initial"
            animate="animate"
            exit="exit"
            key={"loaderForShow"}
          >
            <styles.LoaderForShow />
          </styles.LoaderWrap>
        )}
      </AnimatePresence>
    </styles.Wrapper>
  );
};

export default ShowPage;
