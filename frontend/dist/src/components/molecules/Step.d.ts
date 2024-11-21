/// <reference types="react" />
import { SxProps } from '@mui/material';
export type StepProps = {
    label: string;
    stepNumber: number | string;
    component?: React.ReactNode;
    componentsLayoutStyles?: SxProps;
    layoutStyles?: SxProps;
};
/**
 * Represents a step in a multi-step process.
 *
 * @component
 * @example
 * // Usage:
 * <Step
 *   component={<StepComponent />}
 *   componentsLayoutStyles={{ marginTop: 10 }}
 *   label="Step 1"
 *   layoutStyles={{ marginBottom: 20 }}
 *   stepNumber={1}
 * />
 *
 * @param {StepProps} props - The props for the Step component.
 * @param {React.ReactNode} props.component - The component to be rendered within the step.
 * @param {React.CSSProperties} props.componentsLayoutStyles - The CSS styles for the component container.
 * @param {string} props.label - The label for the step.
 * @param {React.CSSProperties} props.layoutStyles - The CSS styles for the step container.
 * @param {number} props.stepNumber - The step number.
 * @returns {JSX.Element} The rendered Step component.
 */
export declare const Step: ({ component, componentsLayoutStyles, label, layoutStyles, stepNumber, }: StepProps) => import("react/jsx-runtime").JSX.Element;
