import { useEffect, useState } from "react";

const getIdFromUrl = () => {
  const path = window.location.pathname;
  const match = path.match(/\/movies?\/([^\/]+)/);
  return match ? match[1] : null;
};

export const useMovieId = () => {
  const [movieId, setMovieId] = useState<string | null>("");

  useEffect(() => {
    const handleLocationChange = () => {
      const newId = getIdFromUrl();
      setMovieId(newId);
    };

    handleLocationChange();

    window.addEventListener("popstate", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, [movieId]);

  return movieId;
};
