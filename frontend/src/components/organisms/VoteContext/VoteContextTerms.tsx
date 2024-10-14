import { Dispatch, SetStateAction } from 'react';
import { Box, Link } from '@mui/material';

import { Spacer, Typography } from '../../atoms';
import { useScreenDimension, useVoteContextForm } from '../../../hooks';
import { ControlledField, VoteContextWrapper } from '../../organisms';
import { openInNewTab } from '../../../utils';

type StoreDataInfoProps = {
  setStep: Dispatch<SetStateAction<number>>;
  onCancel: () => void;
};

/**
 * Renders the VoteContextTerms component.
 *
 * @param {StoreDataInfoProps} props - The component props.
 * @returns {JSX.Element} The rendered component.
 */
export const VoteContextTerms = ({ setStep, onCancel }: StoreDataInfoProps) => {
  const { control, errors, watch } = useVoteContextForm();
  const { isMobile } = useScreenDimension();

  const openLink = () =>
    openInNewTab(
      'https://docs.gov.tools/using-govtool/govtool-functions/storing-information-offline'
    );

  const isContinueDisabled = !watch('terms');

  return (
    <VoteContextWrapper
      onContinue={() => setStep(3)}
      isContinueDisabled={isContinueDisabled}
      onCancel={onCancel}
    >
      <Typography sx={{ textAlign: 'center' }} variant="headline4">
        Store and Maintain the Data Yourself
      </Typography>
      <Link
        onClick={openLink}
        sx={{
          cursor: 'pointer',
          fontSize: 16,
          fontWeight: 500,
          fontFamily: 'Poppins',
          my: 4,
          textAlign: 'center',
          textDecoration: 'none',
        }}
      >
        Learn more about storing information
      </Link>
      <ControlledField.Checkbox
        {...{ control, errors }}
        name="terms"
        label="I agree to store correctly this information and to maintain them over the years"
        layoutStyles={{
          display: 'flex',
          justifyContent: 'center',
        }}
      />
      <Spacer y={isMobile ? 4 : 12.5} />
      <Box display="flex" flex={1} />
    </VoteContextWrapper>
  );
};
