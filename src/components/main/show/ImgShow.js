//* ---------------------------------------- Libraries Imports ---------------------------------------------
import React from "react";
import { useMotionValue, useTransform } from "framer-motion";
import { useRecoilState } from "recoil";
import { currentShowState } from "../../atoms/selectedShow";
import { Link } from "react-router-dom";
//* ---------------------------------------- Styles Imports ---------------------------------------------
import * as styles from "./styles";
import * as animations from "./animation";

//?=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//! ------------------------------------------ Img component ------------------------------------------------
//?=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// This component creates an image with cool hover effects for a show
// Also responsible for setting selected show on show click

const ImgShow = ({
  movieData,
  index,
  arrayForHover,
  setArrayForHover,
  showsLength,
  setSelectedShowName,
}) => {
  // Global state for setting the current show info
  const [currentShow, setCurrentShowState] = useRecoilState(currentShowState);

  // Initial numbers for perspective animation
  const x = useMotionValue(200);
  const y = useMotionValue(200);
  const rotateX = useTransform(y, [0, 400], [45, -45]);
  const rotateY = useTransform(x, [0, 400], [-45, 45]);

  // Perspective animation;
  const handleMouse = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  };

  // On mouse leave return the image to initial position and reset the colors
  const handleMouseLeave = (event) => {
    x.set(200);
    y.set(200);

    const arrayForHoverTemp = new Array(showsLength).fill(0);
    setArrayForHover(arrayForHoverTemp);
    setSelectedShowName(null);
  };

  // On mouse enter display the name of the show and make other show b&w
  const handleMouseEnter = () => {
    const arrayForHoverTemp = new Array(showsLength).fill(2);
    arrayForHoverTemp[index] = 1;
    setArrayForHover(arrayForHoverTemp);
    setSelectedShowName(movieData.name);
  };

  // Set the current show and open the modal
  const handleClickOnMovie = () => {
    setCurrentShowState(movieData);
  };

  return (
    <Link to={`${movieData.id}`}>
      <styles.ImageWrapper
        onClick={handleClickOnMovie}
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        variants={animations.fade}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false }}
      >
        <styles.ShowImage
          src={
            movieData?.image?.medium ||
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
          }
          style={{
            rotateX: rotateX,
            rotateY: rotateY,
          }}
          blackandwhite={arrayForHover[index]}
        />
      </styles.ImageWrapper>
    </Link>
  );
};

export default ImgShow;
