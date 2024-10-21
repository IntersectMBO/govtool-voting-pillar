import { useEffect, useState } from 'react';

export const useScreenDimension = () => {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

  let pagePadding;
  if (screenWidth < 768) {
    pagePadding = 2;
  } else if (screenWidth < 1024) {
    pagePadding = 6;
  } else if (screenWidth < 1440) {
    pagePadding = 8;
  } else if (screenWidth < 1920) {
    pagePadding = 10;
  } else {
    pagePadding = 37;
  }

  function handleWindowSizeChange() {
    setScreenWidth(window.innerWidth);
    setIsMobile(window.innerWidth < 768);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return {
    screenWidth,
    isMobile,
    pagePadding,
  };
};
