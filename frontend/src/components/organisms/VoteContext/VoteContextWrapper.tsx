import { FC, PropsWithChildren } from 'react';
import { Box } from '@mui/material';

import { useScreenDimension } from '../../../hooks';
import { Button } from '../../atoms';

type VoteContextWrapperProps = {
  onContinue: () => void;
  isContinueDisabled?: boolean;
  onCancel: () => void;
};

/**
 * Wrapper component for the VoteContext.
 *
 * @component
 * @param {PropsWithChildren<VoteContextWrapperProps>} props - The component props.
 * @param {Function} props.onContinue - The function to be called when the "Continue" button is clicked.
 * @param {boolean} props.isContinueDisabled - A boolean indicating whether the "Continue" button should be disabled.
 * @param {Function} props.onCancel - The function to be called when the "Cancel" button is clicked.
 * @param {ReactNode} props.children - The child components to be rendered inside the wrapper.
 * @returns {JSX.Element} The rendered VoteContextWrapper component.
 */
export const VoteContextWrapper: FC<
  PropsWithChildren<VoteContextWrapperProps>
> = ({ onContinue, isContinueDisabled, onCancel, children }) => {
  const { isMobile } = useScreenDimension();

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {children}
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '40px',
          ...(isMobile && { flexDirection: 'column-reverse', gap: 3 }),
        }}
      >
        <Button
          data-testid="cancel-modal-button"
          onClick={onCancel}
          size="large"
          sx={{
            width: isMobile ? '100%' : '154px',
          }}
          variant="outlined"
        >
          Cancel
        </Button>
        <Button
          data-testid="confirm-modal-button"
          disabled={isContinueDisabled}
          onClick={onContinue}
          size="large"
          sx={{
            width: isMobile ? '100%' : '154px',
          }}
          variant="contained"
        >
          Continue
        </Button>
      </Box>
    </>
  );
};
