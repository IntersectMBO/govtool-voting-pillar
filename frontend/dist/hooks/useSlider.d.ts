import { KeenSliderOptions } from 'keen-slider/react';
export declare const useSlider: ({ config }: {
    config: KeenSliderOptions;
}) => {
    sliderRef: (node: HTMLElement | null) => void;
    instanceRef: import('react').MutableRefObject<import('keen-slider/react').KeenSliderInstance<{}, {}, import('keen-slider/react').KeenSliderHooks> | null>;
    currentSlide: number;
    itemsPerView: number;
};
