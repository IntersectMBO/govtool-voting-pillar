import { useCallback } from 'react';
import { Box, Typography } from '@mui/material';

import { Vote } from '../../models';

/**
 * Renders a vote pill component.
 *
 * @param vote - The vote value.
 * @param width - The width of the vote pill.
 * @param maxWidth - The maximum width of the vote pill.
 * @param isCC - Indicates if the vote is for a constitutional case.
 * @returns The rendered vote pill component.
 */
export const VotePill = ({
  vote,
  width,
  maxWidth,
  isCC,
}: {
  vote: Vote;
  width?: number;
  maxWidth?: number;
  isCC?: boolean;
}) => {
  const VOTE = vote.toLowerCase() as 'yes' | 'no' | 'abstain';

  const getVotePillLabel = useCallback(() => {
    switch (VOTE) {
      case 'yes':
        return isCC ? 'Constitutional' : 'Yes';
      case 'no':
        return isCC ? 'Unconstitutional' : 'No';
      default:
        return 'Abstain';
    }
  }, [isCC, VOTE]);

  return (
    <Box
      py={0.75}
      px={2.25}
      border={1}
      borderColor={
        VOTE === 'yes' ? '#C0E4BA' : VOTE === 'no' ? '#EDACAC' : '#99ADDE'
      }
      bgcolor={
        VOTE === 'yes' ? '#F0F9EE' : VOTE === 'no' ? '#FBEBEB' : '#E6EBF7'
      }
      borderRadius={100}
      textAlign="center"
      minWidth="50px"
      maxWidth={maxWidth ? `${maxWidth}px` : 'auto'}
      width={width ? `${width}px` : 'auto'}
      maxHeight="14px"
    >
      <Typography
        textTransform="uppercase"
        fontSize={12}
        fontWeight={400}
        lineHeight="16px"
      >
        {getVotePillLabel()}
      </Typography>
    </Box>
  );
};
