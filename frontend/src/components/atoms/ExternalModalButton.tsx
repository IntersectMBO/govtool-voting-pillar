import { SxProps, Typography } from '@mui/material';

import { Button } from './Button';
import { ICONS } from '../../consts';
import { useModal } from '../../context';

/**
 * A button component that opens an external modal when clicked.
 *
 * @param label - The label text for the button.
 * @param url - The URL of the external link.
 * @param sx - Additional styling properties for the button.
 */
export const ExternalModalButton = ({
  label,
  sx,
  url,
}: {
  label: string;
  url: string;
  sx?: SxProps;
}) => {
  const { openModal } = useModal();

  return (
    <Button
      onClick={() => {
        openModal({
          type: 'externalLink',
          state: {
            externalLink: url,
          },
        });
      }}
      sx={{
        p: 0,
        mb: 4,
        ':hover': {
          backgroundColor: 'transparent',
        },
        ...sx,
      }}
      disableRipple
      variant="text"
      data-testid="external-modal-button"
    >
      <Typography variant="body1" fontWeight={500} color="primary">
        {label}
      </Typography>
      <img
        alt="external link"
        src={ICONS.externalLinkIcon}
        height="20"
        width="20"
        style={{ marginLeft: '8px' }}
      />
    </Button>
  );
};
