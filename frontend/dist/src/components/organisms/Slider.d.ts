/// <reference types="react" />
import 'keen-slider/keen-slider.min.css';
import { PendingTransaction } from '../../models/pendingTransaction';
type SliderProps = {
    title: string;
    data: React.ReactNode;
    isShowAll?: boolean;
    dataLength?: number;
    notSlicedDataLength?: number;
    onDashboard?: boolean;
    searchPhrase?: string;
    sorting?: string;
    filters?: string[];
    pendingTransaction?: PendingTransaction;
    onClickShowAll?: () => void;
};
/**
 * Slider component that displays a slider with data.
 *
 * @param {SliderProps} props - The props for the Slider component.
 * @returns {JSX.Element} The rendered Slider component.
 */
export declare const Slider: ({ data, title, isShowAll, dataLength, notSlicedDataLength, onDashboard, filters, searchPhrase, sorting, pendingTransaction, onClickShowAll, }: SliderProps) => import("react/jsx-runtime").JSX.Element;
export {};
