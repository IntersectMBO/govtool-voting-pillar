import { forwardRef } from 'react';
import { Box } from '@mui/material';

import { ModalContents, ModalWrapper } from '../../atoms';
import { useModal } from '../../../context';
import { SubmittedVotesData } from '../../../models';
import { VotesSubmitted } from '../../molecules';

export interface SubmittedVotesModalState extends SubmittedVotesData {
  vote?: string;
}

/**
 * Represents a modal component for displaying submitted votes.
 * @param ref - A ref object that is forwarded to the underlying div element.
 * @returns The JSX element representing the submitted votes modal.
 */
export const SubmittedVotesModal = forwardRef<HTMLDivElement>((_, ref) => {
  const { state } = useModal<SubmittedVotesModalState>();

  if (!state) return null;

  return (
    <ModalWrapper
      dataTestId="submitted-votes-modal"
      sx={{ maxWidth: '372px', paddingBottom: 6 }}
      ref={ref}
    >
      <ModalContents>
        <Box alignItems="center">
          <VotesSubmitted votes={state} />
        </Box>
      </ModalContents>
    </ModalWrapper>
  );
});
