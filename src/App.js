//* ---------------------------------------- Libraries Imports ---------------------------------------------
import GlobalStyle from "./GlobalStyles";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";

//* ---------------------------------------- Components Imports ---------------------------------------------

import Navbar from "./components/navbar/Navbar";
import Shows from "./components/main/Shows";
import ShowPage from "./components/showPage/ShowPage";
import useShows from "./components/useShows";
import Loader from "./components/Loader";

//?=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//! ------------------------------------------ App component ------------------------------------------------
//?=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

function App() {
  // Custom hook for loading and sorting the shows
  const { shows, loading } = useShows();
  // Location for animating between routes
  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
              <Route path="/" exact element={<Shows shows={shows} />}></Route>
              <Route path=":showId" element={<ShowPage />} />
            </Routes>
          </AnimatePresence>
        </>
      )}
    </>
  );
}

export default App;
