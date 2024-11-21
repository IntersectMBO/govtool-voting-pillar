/// <reference types="react" />
type SliderArrowProps = {
    disabled: boolean;
    onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    left?: boolean;
};
/**
 * SliderArrow component represents an arrow used in a slider.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {boolean} props.disabled - Indicates if the arrow is disabled.
 * @param {Function} props.onClick - The function to be called when the arrow is clicked.
 * @param {boolean} props.left - Indicates if the arrow is pointing to the left.
 * @returns {JSX.Element} The rendered SliderArrow component.
 */
export declare const SliderArrow: ({ disabled, onClick, left }: SliderArrowProps) => import("react/jsx-runtime").JSX.Element;
export {};
