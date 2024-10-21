import { Dispatch, SetStateAction, useEffect } from 'react';
import { Box } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import { ControlledField } from '..';
import { Button, Spacer, Typography } from '../../atoms';
import { ICONS, URL_REGEX } from '../../../consts';
import { useScreenDimension, useVoteContextForm } from '../../../hooks';
import { Step } from '../../molecules';
import { VoteContextWrapper } from '.';
import { openInNewTab } from '../../../utils';

type VoteContextStoringInformationProps = {
  setStep: Dispatch<SetStateAction<number>>;
  setSavedHash: Dispatch<SetStateAction<string | null>>;
  setErrorMessage: Dispatch<SetStateAction<string | undefined>>;
  onCancel: () => void;
};

/**
 * Renders the component for storing information in the vote context.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.setStep - The function to set the current step.
 * @param {Function} props.setSavedHash - The function to set the saved hash.
 * @param {Function} props.setErrorMessage - The function to set the error message.
 * @param {Function} props.onCancel - The function to handle cancel action.
 * @returns {JSX.Element} The rendered component.
 */
export const VoteContextStoringInformation = ({
  setStep,
  setSavedHash,
  setErrorMessage,
  onCancel,
}: VoteContextStoringInformationProps) => {
  const { screenWidth } = useScreenDimension();

  const {
    control,
    errors,
    validateURL,
    watch,
    generateMetadata,
    onClickDownloadJson,
  } = useVoteContextForm(setSavedHash, setStep, setErrorMessage);

  const openGuideAboutStoringInformation = () =>
    openInNewTab(
      'https://docs.gov.tools/using-govtool/govtool-functions/storing-information-offline'
    );

  const isContinueDisabled = !watch('storingURL');

  useEffect(() => {
    generateMetadata();
  }, [generateMetadata]);

  return (
    <VoteContextWrapper
      onContinue={validateURL}
      isContinueDisabled={isContinueDisabled}
      onCancel={onCancel}
    >
      <Typography sx={{ textAlign: 'center' }} variant="headline4">
        Information Storage Steps
      </Typography>
      <Button
        endIcon={
          <OpenInNewIcon
            sx={{
              color: 'primary',
              height: 17,
              width: 17,
            }}
          />
        }
        onClick={openGuideAboutStoringInformation}
        size="extraLarge"
        sx={{ alignSelf: 'center', width: 'fit-content' }}
        variant="text"
      >
        Read full guide
      </Button>
      <Typography fontWeight={400} sx={{ textAlign: 'center' }} variant="body1">
        Download your file, save it to your chosen location, and enter the URL
        of that location in step 3
      </Typography>
      <Box sx={{ my: 4 }}>
        <Step
          component={
            <Button
              data-testid="metadata-download-button"
              onClick={onClickDownloadJson}
              size="extraLarge"
              startIcon={<img alt="download" src={ICONS.download} />}
              sx={{
                width: 'fit-content',
                ml: screenWidth < 1024 ? 0 : 1.75,
                mt: screenWidth < 1024 ? 1.5 : 0,
              }}
              variant="outlined"
            >
              Vote_Context.jsonld
            </Button>
          }
          componentsLayoutStyles={{
            alignItems: screenWidth < 1024 ? undefined : 'center',
            flexDirection: screenWidth < 1024 ? 'column' : 'row',
          }}
          label="Vote_Context.jsonld"
          stepNumber={1}
        />
        <Spacer y={6} />
        <Step
          component={
            <Button
              endIcon={
                <OpenInNewIcon
                  sx={{
                    color: 'primary',
                    height: 17,
                    width: 17,
                  }}
                />
              }
              onClick={openGuideAboutStoringInformation}
              size="extraLarge"
              sx={{ width: 'fit-content' }}
              variant="text"
            >
              Read full guide
            </Button>
          }
          label="Save this file in a location that provides a public URL (e.g. github)"
          stepNumber={2}
        />
        <Spacer y={6} />
        <Step
          component={
            <ControlledField.Input
              {...{ control, errors }}
              dataTestId="metadata-url-input"
              name="storingURL"
              layoutStyles={{ mt: 1.5 }}
              placeholder="URL"
              rules={{
                required: {
                  value: true,
                  message: 'This field is required',
                },
                pattern: {
                  value: URL_REGEX,
                  message: 'Invalid URL',
                },
              }}
            />
          }
          label="Paste the URL here"
          stepNumber={3}
        />
      </Box>
    </VoteContextWrapper>
  );
};
