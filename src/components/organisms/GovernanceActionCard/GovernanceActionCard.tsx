import { FC } from 'react';
import { Box, Card, Typography, Button, useTheme } from '@mui/material';

import {
  GovernanceActionCardSection,
  GovernanceActionCardSectionProps,
  GovernanceActionCardEpochInfoSection,
} from '../../molecules';

type Props = {
  title: string;
  sections: GovernanceActionCardSectionProps[];
  submissionDate: string;
  submissionEpoch: number;
  expiryDate: string;
  expiryEpoch: number;
};

/**
 * Represents a governance action card component.
 *
 * @component
 * @param {Props} props - The component props.
 * @param {string} props.title - The title of the card.
 * @param {Array<Section>} props.sections - The sections of the card.
 * @param {string} props.submissionDate - The submission date of the card.
 * @param {number} props.submissionEpoch - The submission epoch of the card.
 * @param {string} props.expiryDate - The expiry date of the card.
 * @param {number} props.expiryEpoch - The expiry epoch of the card.
 * @returns {JSX.Element} The rendered component.
 */
export const GovernanceActionCard: FC<Props> = ({
  title,
  sections,
  submissionDate,
  submissionEpoch,
  expiryDate,
  expiryEpoch,
}) => {
  const { shadows } = useTheme();
  return (
    <Card
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        maxWidth: '350px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ px: 3, py: 5, flex: 1 }}>
        <Typography variant="title">{title}</Typography>
        <Box
          sx={{
            py: 2.5,
            gap: 2.5,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {sections.map((section) => (
            <GovernanceActionCardSection key={section.title} {...section} />
          ))}
          <GovernanceActionCardEpochInfoSection
            submissionDate={submissionDate}
            submissionEpoch={submissionEpoch}
            expiryDate={expiryDate}
            expiryEpoch={expiryEpoch}
          />
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          boxShadow: shadows[4],
        }}
      >
        <Button variant="contained" sx={{ m: 3, flex: 1 }}>
          View Details and Vote
        </Button>
      </Box>
    </Card>
  );
};
