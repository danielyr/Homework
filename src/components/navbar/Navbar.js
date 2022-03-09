//* ---------------------------------------- Libraries Imports ---------------------------------------------
import React from "react";
//* ---------------------------------------- Styles Imports ---------------------------------------------
import * as styles from "./styles";
import * as animations from "./animation";
//* ---------------------------------------- Components Imports ---------------------------------------------
import HuntersText from "./navbar extras/HuntersText";

//?=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//! ------------------------------------------ Navbar component ------------------------------------------------
//?=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// Just a nice navbar with some animations

const Navbar = () => {
  return (
    <styles.Nav>
      <styles.WrapForText>
        <HuntersText text={"HUNTERS"} />
        <styles.Text>
          <styles.TextDiv
            variants={animations.firstSpan}
            initial="initial"
            animate="animate"
          >
            {"||"}
          </styles.TextDiv>
          <styles.TextDiv
            variants={animations.secondSpan}
            initial="initial"
            animate="animate"
          >
            {"Daniel Yarmishin"}
          </styles.TextDiv>
        </styles.Text>
      </styles.WrapForText>
    </styles.Nav>
  );
};

export default Navbar;
