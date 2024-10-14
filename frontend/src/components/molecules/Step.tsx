import { Box, SxProps } from '@mui/material';

import { Typography } from '../atoms';
import { voltaire } from '../../theme/voltaire';

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
export const Step = ({
  component,
  componentsLayoutStyles,
  label,
  layoutStyles,
  stepNumber,
}: StepProps) => {
  const {
    palette: { boxShadow2 },
  } = voltaire;

  return (
    <Box
      sx={{
        flexDirection: 'row',
        display: 'flex',
        width: '100%',
        ...layoutStyles,
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          borderRadius: '100%',
          boxShadow: `2px 2px 20px 0px ${boxShadow2}`,
          display: 'flex',
          height: 54,
          justifyContent: 'center',
          width: 54,
        }}
      >
        <Typography color="primary" fontWeight={400} variant="title2">
          {stepNumber}
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          ml: 3,
          ...componentsLayoutStyles,
        }}
      >
        <Typography fontWeight={500} variant="body1">
          {label}
        </Typography>
        {component}
      </Box>
    </Box>
  );
};
