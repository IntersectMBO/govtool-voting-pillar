type Props = {
    oldJson?: JSON | Record<string, unknown> | null;
    newJson?: JSON | Record<string, unknown> | null;
};
/**
 * Renders a view that displays the differences between two JSON objects.
 *
 * @param {Object} Props - The component props.
 * @param {Object} Props.oldJson - The old JSON object.
 * @param {Object} Props.newJson - The new JSON object.
 * @returns {JSX.Element} The rendered component.
 */
export declare const GovernanceActionDetailsDiffView: ({ oldJson, newJson, }: Props) => import("react/jsx-runtime").JSX.Element | null;
export {};
