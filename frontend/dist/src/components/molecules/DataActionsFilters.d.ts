import { Dispatch, SetStateAction } from 'react';
interface Props {
    chosenFilters: string[];
    setChosenFilters: Dispatch<SetStateAction<string[]>>;
    closeFilters: () => void;
    options: {
        key: string;
        label: string;
    }[];
    title?: string;
}
/**
 * Renders a component for filtering data actions.
 *
 * @component
 * @param {Object} Props - The component props.
 * @param {string[]} Props.chosenFilters - The currently chosen filters.
 * @param {Function} Props.setChosenFilters - A function to update the chosen filters.
 * @param {Function} Props.closeFilters - A function to close the filters.
 * @param {Object[]} Props.options - The available filter options.
 * @param {string} Props.title - The title of the filter component.
 * @returns {JSX.Element} The rendered component.
 */
export declare const DataActionsFilters: ({ chosenFilters, setChosenFilters, closeFilters, options, title, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
