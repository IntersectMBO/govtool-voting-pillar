import { Dispatch, SetStateAction } from 'react';

import { orange } from '../../../consts';
import { Typography } from '../../atoms';
import { VoteContextWrapper } from './VoteContextWrapper';
import { useVoteContextForm } from '../../../hooks';
import { ControlledField } from '..';

type VoteContextTextProps = {
  setStep: Dispatch<SetStateAction<number>>;
  onCancel: () => void;
};

/**
 * Renders the vote context text component.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.setStep - The function to set the current step.
 * @param {Function} props.onCancel - The function to handle cancel action.
 * @returns {JSX.Element} The rendered component.
 */
export const VoteContextText = ({
  setStep,
  onCancel,
}: VoteContextTextProps) => {
  const { control, errors, watch } = useVoteContextForm();
  const isContinueDisabled = !watch('voteContextText');

  const fieldProps = {
    key: 'voteContextText',
    layoutStyles: { mb: 3 },
    name: 'voteContextText',
    placeholder: 'Provide context',
    rules: {
      required: {
        value: true,
        message: 'This field is required',
      },
      maxLength: {
        value: 500,
        message: `Max ${500} characters`,
      },
    },
  };

  return (
    <VoteContextWrapper
      onContinue={() => setStep(2)}
      isContinueDisabled={isContinueDisabled}
      onCancel={onCancel}
    >
      <Typography
        variant="body1"
        sx={{
          textTransform: 'uppercase',
          color: orange.c400,
        }}
      >
        Optional
      </Typography>
      <Typography
        variant="title2"
        sx={{
          lineHeight: '34px',
          mb: 1,
        }}
      >
        Provide context about your vote
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: 400, mb: 2 }}>
        {/* TODO: Update text when design is finalised */}
        Additional information about your vote
      </Typography>
      <ControlledField.TextArea
        {...{ control, errors }}
        {...fieldProps}
        isModifiedLayout
        data-testid="provide-context-input"
      />
    </VoteContextWrapper>
  );
};
