import { render } from '@testing-library/react';
import { GovernanceActionCardEpochInfoSection } from './GovernanceActionCardEpochInfoSection';

const submissionDate = '2022-01-01';
const submissionEpoch = 1;
const expiryDate = '2022-01-31';
const expiryEpoch = 31;

it('renders submission information correctly', () => {
  const { getByText } = render(
    <GovernanceActionCardEpochInfoSection
      submissionDate={submissionDate}
      submissionEpoch={submissionEpoch}
      expiryDate={expiryDate}
      expiryEpoch={expiryEpoch}
    />
  );

  const submissionText = getByText(submissionDate);
  const expiryText = getByText(expiryDate);

  expect(submissionText).toBeInTheDocument();
  expect(expiryText).toBeInTheDocument();
});
