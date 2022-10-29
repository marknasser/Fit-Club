import React, { useState, useLayoutEffect } from "react";

function useScreenWidth() {
  const [width, setWidth] = useState(null);

  useLayoutEffect(() => {
    function updateSize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  });
  return width;
}

export default useScreenWidth;
