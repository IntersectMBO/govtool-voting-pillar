import { forwardRef } from 'react';
import { Box, Button, Typography } from '@mui/material';

import { ModalContents, ModalHeader, ModalWrapper } from '../../atoms';
import { IMAGES } from '../../../consts';
import { useModal } from '../../../context';
import { useScreenDimension } from '../../../hooks';
import { openInNewTab } from '../../../utils';
import { voltaire } from '../../../theme/voltaire';

export interface ExternalLinkModalState {
  externalLink: string;
}

/**
 * Represents a modal component for displaying an external link.
 * This component is used to warn users about opening external links and provides options to continue or cancel.
 *
 * @component
 * @example
 * ```tsx
 * <ExternalLinkModal />
 * ```
 */
export const ExternalLinkModal = forwardRef<HTMLDivElement>((_, ref) => {
  const { state, closeModal } = useModal<ExternalLinkModalState>();
  const { isMobile } = useScreenDimension();
  const {
    palette: { primaryBlue, fadedPurple },
  } = voltaire;

  return (
    <ModalWrapper dataTestId="external-link-modal" ref={ref}>
      <img
        alt="Status icon"
        src={IMAGES.warningYellowImage}
        style={{ height: '84px', margin: '0 auto', width: '84px' }}
      />
      <ModalHeader sx={{ marginTop: '34px' }}>
        {isMobile ? 'External Link Safety' : 'Be Careful!'}
      </ModalHeader>
      <ModalContents>
        <Typography textAlign="center" sx={{ fontSize: '16px' }}>
          {isMobile
            ? 'This is an external link:'
            : 'You are about to open an external link to:'}
        </Typography>
        <Typography
          textAlign="center"
          sx={{
            fontSize: '16px',
            marginBottom: '38px',
            color: primaryBlue,
            textDecoration: 'underline',
            wordBreak: 'break-word',
          }}
        >
          {state?.externalLink}
        </Typography>
        <Typography
          textAlign="center"
          sx={{
            fontSize: isMobile ? '16px' : '14px',
            marginBottom: '38px',
            color: fadedPurple,
          }}
        >
          Exercise caution and verify the website&apos;s authenticity before
          sharing personal information. To proceed, click &apos;Continue&apos;.
          To stay on Cardano, click &apos;Cancel&apos;.
        </Typography>
      </ModalContents>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          gap: '38px',
        }}
      >
        <Button
          data-testid="continue-modal-button"
          onClick={() => {
            openInNewTab(state?.externalLink || '#');
            closeModal();
          }}
          sx={{
            borderRadius: 50,
            textTransform: 'none',
            height: '40px',
          }}
          variant="contained"
        >
          {isMobile ? 'Continue' : 'Continue to texternal link'}
        </Button>
        <Button
          data-testid="cancel-modal-button"
          onClick={() => {
            closeModal();
          }}
          sx={{
            borderRadius: 50,
            padding: '10px 26px',
            textTransform: 'none',
            height: '40px',
            width: '117px',
          }}
          variant="outlined"
        >
          Cancel
        </Button>
      </Box>
    </ModalWrapper>
  );
});
