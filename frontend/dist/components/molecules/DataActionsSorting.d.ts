import { Dispatch, SetStateAction } from 'react';
interface Props {
    chosenSorting: string;
    setChosenSorting: Dispatch<SetStateAction<string>>;
    closeSorts: () => void;
    options: {
        key: string;
        label: string;
    }[];
}
/**
 * Component for sorting data actions.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.chosenSorting - The currently chosen sorting option.
 * @param {Function} props.setChosenSorting - The function to set the chosen sorting option.
 * @param {Function} props.closeSorts - The function to close the sorting options.
 * @param {Array} props.options - The available sorting options.
 * @returns {JSX.Element} The rendered component.
 */
export declare const DataActionsSorting: ({ chosenSorting, setChosenSorting, closeSorts, options, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
