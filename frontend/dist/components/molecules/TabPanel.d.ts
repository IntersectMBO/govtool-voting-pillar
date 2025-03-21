/// <reference types="react" />
type TabPanelProps = {
    children?: React.ReactNode;
    index: number;
    value: number;
};
/**
 * Renders a tab panel component.
 *
 * @param props - The component props.
 * @param props.children - The content of the tab panel.
 * @param props.value - The current value of the tab panel.
 * @param props.index - The index of the tab panel.
 * @returns The rendered tab panel component.
 */
export declare const TabPanel: (props: TabPanelProps) => import("react/jsx-runtime").JSX.Element;
export {};
