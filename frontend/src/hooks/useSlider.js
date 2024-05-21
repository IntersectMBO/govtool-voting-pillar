"use client";
import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";

const WheelControls = (slider) => {
  let touchTimeout;
  let position;
  let wheelActive = false;

  function dispatch(wheelEvent, name) {
    position.x -= wheelEvent.deltaX;
    position.y -= wheelEvent.deltaY;
    slider.container.dispatchEvent(
      new CustomEvent(name, {
        detail: {
          x: position.x,
          y: position.y,
        },
      })
    );
  }

  function eventWheel(wheelEvent) {
    if (Math.abs(wheelEvent.deltaX) > Math.abs(wheelEvent.deltaY)) {
      wheelEvent.preventDefault();
      if (!wheelActive) {
        position = {
          x: wheelEvent.pageX,
          y: wheelEvent.pageY,
        };
        dispatch(wheelEvent, "ksDragStart");
        wheelActive = true;
      }
      dispatch(wheelEvent, "ksDrag");
      clearTimeout(touchTimeout);
      touchTimeout = setTimeout(() => {
        wheelActive = false;
        dispatch(e, "ksDragEnd");
      }, 50);
    }
  }

  slider.on("created", () => {
    slider.container.addEventListener("wheel", eventWheel, {
      passive: false,
    });
  });
};

export const useSlider = ({ config }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      ...config,
      rubberband: false,
      detailsChanged: (slider) => {
        setCurrentSlide(slider.track.details.rel);
      },
    },
    [WheelControls]
  );

  const dataLength = instanceRef?.current?.slides?.length ?? 10;
  const itemsPerView =
    dataLength - (instanceRef?.current?.track?.details?.maxIdx ?? 2);

  return {
    sliderRef,
    instanceRef,
    currentSlide,
    itemsPerView,
  };
};
