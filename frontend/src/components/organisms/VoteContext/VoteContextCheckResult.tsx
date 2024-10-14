import { Dispatch, SetStateAction } from 'react';
import { Box } from '@mui/material';

import { useScreenDimension } from '../../../hooks';
import { Button, Typography } from '../../atoms';
import { IMAGES } from '../../../consts';

type VoteContextCheckResultProps = {
  submitVoteContext: () => void;
  closeModal: () => void;
  setStep: Dispatch<SetStateAction<number>>;
  errorMessage?: string;
  isContinueDisabled?: boolean;
};

/**
 * Renders the result of the vote context check.
 * @param {Object} props - The component props.
 * @param {Function} props.submitVoteContext - The function to submit the vote context.
 * @param {Function} props.closeModal - The function to close the modal.
 * @param {Function} props.setStep - The function to set the step.
 * @param {string} props.errorMessage - The error message, if any.
 * @param {boolean} props.isContinueDisabled - Indicates if the continue button is disabled.
 * @returns {JSX.Element} The rendered component.
 */
export const VoteContextCheckResult = ({
  submitVoteContext,
  closeModal,
  setStep,
  errorMessage,
  isContinueDisabled,
}: VoteContextCheckResultProps) => {
  const { isMobile } = useScreenDimension();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <img
        alt="Status icon"
        src={errorMessage ? IMAGES.warningImage : IMAGES.successImage}
        style={{ height: '84px', margin: '0 auto', width: '84px' }}
      />
      <Typography
        variant="title2"
        sx={{
          lineHeight: '34px',
          mb: 1,
          mt: 3,
        }}
      >
        {errorMessage ? 'Data validation failed' : 'Success'}
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: 400, mb: 2 }}>
        {errorMessage ?? 'Data check has been successful'}
      </Typography>
      {!errorMessage ? (
        <Button
          data-testid="go-to-vote-modal-button"
          onClick={submitVoteContext}
          sx={{
            borderRadius: 50,
            margin: '0 auto',
            padding: '10px 26px',
            textTransform: 'none',
            marginTop: '38px',
            width: '100%',
          }}
          variant="contained"
        >
          Go to Vote
        </Button>
      ) : (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '40px',
            width: '100%',
            ...(isMobile && { flexDirection: 'column-reverse', gap: 3 }),
          }}
        >
          <Button
            data-testid="go-back-modal-button"
            onClick={() => setStep(3)}
            size="large"
            sx={{
              width: isMobile ? '100%' : '154px',
            }}
            variant="outlined"
          >
            Go back
          </Button>
          <Button
            data-testid="close-modal-button"
            disabled={isContinueDisabled}
            onClick={closeModal}
            size="large"
            sx={{
              width: isMobile ? '100%' : '154px',
            }}
            variant="contained"
          >
            Close
          </Button>
        </Box>
      )}
    </Box>
  );
};
