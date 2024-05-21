"use client";
import { useEffect, useMemo, useState } from "react";
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import "keen-slider/keen-slider.min.css";

import { useScreenDimension } from "@/hooks";
import { useSlider } from "@/hooks/useSlider";

export const Slider = ({
  data,
  title,
  isShowAll = true,
  dataLength = 0,
  notSlicedDataLength = 0,
  isDashboard = false,
  filters,
  searchPhrase,
  sorting,
  onClickShowAll,
  pendingTransaction,
}) => {
  const theme = useTheme();
  const [isSliderInitialized, setIsSliderInitialized] = useState(false);

  const { isMobile } = useMediaQuery(theme.breakpoints.down("sm"));
  const { screenWidth } = useScreenDimension();

  const {
    palette: { primaryBlue, arcticWhite, lightBlue },
  } = theme;

  const DEFAULT_SLIDER_CONFIG = {
    mode: "free",
    initial: 0,
    slides: {
      perView: "auto",
      spacing: 20,
    },
  };

  const isShowArrows = useMemo(
    () =>
      // Arrows are to be show only on desktop view.
      // 268 - side menu width; 40 - distance needed from the left on
      // disconnected wallet (no side menu); 350 - gov action card width;
      // other values are for paddings and margins
      screenWidth <
      (isDashboard ? 268 : 40) + 28 + dataLength * 350 + 20 * dataLength - 5,
    [screenWidth, dataLength]
  );

  const { sliderRef, instanceRef, currentSlide, itemsPerView } = useSlider({
    config: DEFAULT_SLIDER_CONFIG,
  });

  const refresh = () => {
    instanceRef.current?.update(instanceRef.current?.options);
    instanceRef.current?.track.to(0);
    instanceRef.current?.moveToIdx(0);
  };

  useEffect(() => {
    if (instanceRef.current) {
      setIsSliderInitialized(true);
    }
  }, [instanceRef.current]);

  useEffect(() => {
    refresh();
  }, [
    filters,
    sorting,
    searchPhrase,
    pendingTransaction?.vote?.resourceId,
    data,
  ]);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "10px",
          mb: 3.5,
          height: "46px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="title2">{title}</Typography>
          {(notSlicedDataLength > 6 || (isMobile && isShowAll)) && (
            <Button
              variant="contained"
              size="medium"
              sx={{
                border: `1px solid ${lightBlue}`,
                backgroundColor: arcticWhite,
                boxShadow: "none",
                color: primaryBlue,
                minWidth: 93,
                "&:hover": { backgroundColor: arcticWhite },
              }}
              onClick={onClickShowAll}
            >
              Show all
            </Button>
          )}
        </Box>
        {/* {isSliderInitialized && isShowArrows && dataLength > 1 && !isMobile && (
          <SliderArrows
            currentSlide={currentSlide}
            instanceRef={instanceRef}
            itemsPerView={itemsPerView}
          />
        )} */}
      </Box>
      <div
        ref={sliderRef}
        className="keen-slider"
        style={{ width: "100%", overflow: "visible" }}
      >
        {data}
      </div>
    </Box>
  );
};
