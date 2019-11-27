import { useState, useEffect } from "react";

const usePageLoaded = () => {
  const [loaded, setLoaded] = useState(false);

  const load = () => {
    if (window.loaded === true) {
      setLoaded(true);
    }
  };

  useEffect(() => {
    if (loaded === false) {
      window.addEventListener("animationend", load);
    } else {
      window.removeEventListener("animationEnd", load);
    }

    return () => {
      window.removeEventListener("animationend", load);
    };
  }, [loaded]);

  return loaded;
};

export default usePageLoaded;
