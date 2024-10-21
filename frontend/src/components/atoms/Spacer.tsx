import { Box } from '@mui/material';

export type SpacerProps = {
  x?: number;
  y?: number;
};

/**
 * A component that adds spacing in the x and y directions.
 *
 * @param {number} x - The amount of horizontal spacing to add.
 * @param {number} y - The amount of vertical spacing to add.
 * @returns {JSX.Element} - The spacer component.
 */
export const Spacer = ({ x, y }: SpacerProps) => <Box pt={y} pr={x} />;
