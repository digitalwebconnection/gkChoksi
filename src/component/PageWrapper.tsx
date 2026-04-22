import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // ✅ Scroll window
    window.scrollTo(0, 0);

    // ✅ Also handle custom scroll containers (if any)
    const scrollContainer = document.getElementById("main-scroll");
    if (scrollContainer) {
      scrollContainer.scrollTop = 0;
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;