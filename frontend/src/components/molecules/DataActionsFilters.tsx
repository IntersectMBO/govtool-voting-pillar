import { Dispatch, SetStateAction, useCallback, useRef } from 'react';
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormLabel,
  Typography,
} from '@mui/material';

import { useOnClickOutside, useScreenDimension } from '../../hooks';

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
export const DataActionsFilters = ({
  chosenFilters,
  setChosenFilters,
  closeFilters,
  options,
  title,
}: Props) => {
  const handleFilterChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      // TODO: Refine if it is needed to remove this eslint-disable
      // eslint-disable-next-line no-unused-expressions, no-sequences, @typescript-eslint/no-unused-expressions
      e.target.name, e.target.checked;
      let filters = [...chosenFilters];
      if (e.target.checked) {
        filters.push(e.target.name);
      } else {
        filters = filters.filter((str) => str !== e.target.name);
      }
      setChosenFilters(filters);
    },
    [chosenFilters, setChosenFilters]
  );

  const { isMobile, screenWidth } = useScreenDimension();

  const wrapperRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(wrapperRef, closeFilters);

  return (
    <Box
      display="flex"
      flexDirection="column"
      position="absolute"
      sx={{
        background: '#FBFBFF',
        boxShadow: '1px 2px 11px 0px #00123D5E',
        borderRadius: '10px',
        padding: '12px 0px',
        width: screenWidth < 850 ? '315px' : '415px',
        zIndex: '1',
        right: isMobile ? '59px' : '115px',
        top: '53px',
      }}
      ref={wrapperRef}
    >
      {title && (
        <FormLabel
          sx={{
            fontSize: 14,
            fontWeight: 500,
            color: '#9792B5',
            paddingX: '20px',
          }}
        >
          {title}
        </FormLabel>
      )}
      {options.map((item) => (
        <Box
          key={item.key}
          paddingX="20px"
          sx={[{ '&:hover': { bgcolor: '#E6EBF7' } }]}
          bgcolor={
            chosenFilters?.includes(item.key) ? '#FFF0E7' : 'transparent'
          }
        >
          <FormControlLabel
            control={
              <Checkbox
                inputProps={{
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-expect-error
                  'data-testid': `${item.label.replace(/ /g, '')}-checkbox`,
                }}
                onChange={handleFilterChange}
                name={item.key}
                checked={chosenFilters?.includes(item.key)}
              />
            }
            label={
              <Typography fontSize={14} fontWeight={500}>
                {item.label}
              </Typography>
            }
          />
        </Box>
      ))}
    </Box>
  );
};
