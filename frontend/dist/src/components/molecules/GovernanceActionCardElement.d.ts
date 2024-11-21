import { TooltipProps } from '../atoms';
type BaseProps = {
    label: string;
    text?: string | number;
    dataTestId?: string;
    isSliderCard?: boolean;
    tooltipProps?: Omit<TooltipProps, 'children'>;
    marginBottom?: number;
};
type PillVariantProps = BaseProps & {
    textVariant: 'pill';
    isCopyButton?: false;
};
type OtherVariantsProps = BaseProps & {
    textVariant?: 'oneLine' | 'twoLines' | 'longText';
    isCopyButton?: boolean;
};
type GovernanceActionCardElementProps = (PillVariantProps | OtherVariantsProps) & {
    isMarkdown?: boolean;
};
/**
 * Renders a card element for a governance action.
 *
 * @param {object} props - The component props.
 * @param {string} props.label - The label for the card element.
 * @param {string} props.text - The text content for the card element.
 * @param {string} props.dataTestId - The data-testid attribute for testing purposes.
 * @param {boolean} props.isSliderCard - Indicates whether the card is a slider card.
 * @param {string} [props.textVariant='oneLine'] - The text variant for the card element.
 * @param {boolean} props.isCopyButton - Indicates whether the card has a copy button.
 * @param {object} props.tooltipProps - The tooltip properties for the card element.
 * @param {string} props.marginBottom - The margin bottom value for the card element.
 * @param {boolean} [props.isMarkdown=false] - Indicates whether the text content is in Markdown format.
 * @returns {JSX.Element | null} The rendered card element.
 */
export declare const GovernanceActionCardElement: ({ label, text, dataTestId, isSliderCard, textVariant, isCopyButton, tooltipProps, marginBottom, isMarkdown, }: GovernanceActionCardElementProps) => import("react/jsx-runtime").JSX.Element | null;
export {};
