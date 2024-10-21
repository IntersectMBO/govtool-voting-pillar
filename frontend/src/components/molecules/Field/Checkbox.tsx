import { Box } from '@mui/material';
import { useCallback } from 'react';

import {
  Checkbox as CheckboxBase,
  FormErrorMessage,
  FormHelpfulText,
  Typography,
} from '../../atoms';

import { CheckboxFieldProps } from './types';

/**
 * Checkbox component.
 *
 * @param errorMessage - The error message to display.
 * @param errorStyles - The styles for the error message.
 * @param helpfulText - The helpful text to display.
 * @param helpfulTextStyle - The styles for the helpful text.
 * @param label - The label for the checkbox.
 * @param labelStyles - The styles for the label.
 * @param layoutStyles - The styles for the layout.
 * @param onChange - The callback function for when the checkbox value changes.
 * @param value - The value of the checkbox.
 * @param rest - Additional props for the Checkbox component.
 * @returns The rendered Checkbox component.
 */
export const Checkbox = ({
  errorMessage,
  errorStyles,
  helpfulText,
  helpfulTextStyle,
  label,
  labelStyles,
  layoutStyles,
  onChange,
  value,
  ...rest
}: CheckboxFieldProps) => {
  const handleValue = useCallback(() => {
    onChange(!value);
  }, [value, onChange]);

  return (
    <Box sx={{ width: '100%', ...layoutStyles }}>
      <Box
        onClick={handleValue}
        sx={{
          alignItems: 'center',
          cursor: 'pointer',
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          gridTemplateAreas: '"checkbox label" ". helpfulText"',
          width: 'fit-content',
        }}
      >
        <CheckboxBase
          {...{ onChange, value }}
          errorMessage={errorMessage}
          {...rest}
        />
        {label && (
          <Typography variant="caption" {...labelStyles}>
            {label}
          </Typography>
        )}
        <FormHelpfulText
          helpfulText={helpfulText}
          helpfulTextStyle={helpfulTextStyle}
          sx={{ gridArea: 'helpfulText' }}
        />
      </Box>
      <FormErrorMessage errorMessage={errorMessage} errorStyles={errorStyles} />
    </Box>
  );
};
