import { useEffect } from 'react';

const scrollPositionKey = 'governanceActionsCategoryScrollPosition';

export const useSaveScrollPosition = (
  isLoading: boolean,
  isFetching: boolean
) => {
  const saveScrollPosition = () => {
    sessionStorage.setItem(scrollPositionKey, window.scrollY.toString());
  };

  useEffect(() => {
    if (!isLoading && !isFetching) {
      const savedPosition = sessionStorage.getItem(scrollPositionKey);

      if (savedPosition !== null) {
        window.scrollTo(0, parseInt(savedPosition, 10));
        sessionStorage.removeItem(scrollPositionKey);
      }
    }
  }, [isLoading, isFetching]);

  return saveScrollPosition;
};
