import { Chip, Box, Typography } from '@mui/material';
import { FC } from 'react';

type Props = {
  title: string;
} & ({ description: string } | { chip: string });

/**
 * Renders a section of a governance action card.
 *
 * @component
 * @example
 * ```tsx
 * <GovernanceActionCardSection title="Section Title" description="Section Description" />
 * ```
 *
 * @param {Props} props - The component props.
 * @param {string} props.title - The title of the section.
 * @param {string} [props.description] - The description of the section.
 * @param {string} [props.chip] - The label for the chip.
 * @returns {JSX.Element} The rendered component.
 */
export const GovernanceActionCardSection: FC<Props> = ({ title, ...props }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 0.5,
        justifyContent: 'flex-start',
      }}
    >
      <Typography variant="bodySmall">{title}</Typography>
      {('description' in props && (
        <Typography
          variant="bodyMedium"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {props.description}
        </Typography>
      )) ||
        ('chip' in props && (
          <Chip
            sx={{ backgroundColor: 'lightBlue', width: 'max-content' }}
            label={props.chip}
          />
        ))}
    </Box>
  );
};

export { type Props as GovernanceActionCardSectionProps };
