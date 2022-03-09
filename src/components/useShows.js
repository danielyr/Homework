import { useEffect, useState } from "react";
import axios from "axios";

const useShows = () => {
  const [shows, setShows] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://api.tvmaze.com/shows`).then((res) => {
      const { data } = res;

      const showsByCat = new Map();

      data.forEach((show) => {
        if (show.genres) {
          show.genres.forEach((genre) => {
            if (!showsByCat.has(genre)) {
              showsByCat.set(genre, []);
            }
            showsByCat.get(genre).push(show);
          });
        }
      });

      showsByCat.forEach((val, key) => {
        showsByCat
          .get(key)
          .sort((a, b) => b.rating.average - a.rating.average)
          .splice(10);
      });

      setShows(Array.from(showsByCat));
      setLoading(false);
    });
  }, []);

  return { shows, loading };
};

export default useShows;
