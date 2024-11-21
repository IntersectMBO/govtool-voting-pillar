/// <reference types="react" />
import { KeenSliderHooks, KeenSliderInstance } from 'keen-slider/react';
type SliderArrowsProps = {
    currentSlide: number;
    instanceRef: React.MutableRefObject<KeenSliderInstance<object, object, KeenSliderHooks> | null>;
    itemsPerView: number;
};
/**
 * Renders the slider arrows component.
 *
 * @param {SliderArrowsProps} props - The component props.
 * @returns {JSX.Element | null} The rendered component.
 */
export declare const SliderArrows: ({ currentSlide, instanceRef, itemsPerView, }: SliderArrowsProps) => import("react/jsx-runtime").JSX.Element | null;
export {};
