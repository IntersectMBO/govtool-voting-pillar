import { render } from '@testing-library/react';
import { GovernanceActionCard } from './GovernanceActionCard';

describe('GovernanceActionCard', () => {
  it('renders GovernanceActionCard component', () => {
    const title = 'Test Title';
    const sections = [
      { title: 'Section 1', description: 'Section 1 Content' },
      { title: 'Section 2', chip: 'Info' },
    ];
    const submissionDate = '2022-01-01';
    const submissionEpoch = 1;
    const expiryDate = '2022-01-31';
    const expiryEpoch = 31;

    const { getByText } = render(
      <GovernanceActionCard
        title={title}
        sections={sections}
        submissionDate={submissionDate}
        submissionEpoch={submissionEpoch}
        expiryDate={expiryDate}
        expiryEpoch={expiryEpoch}
      />
    );

    const titleElement = getByText(title);
    const section1Element = getByText('Section 1 Content');
    const section2Element = getByText('Info');
    const submissionDateElement = getByText(submissionDate);
    const expiryDateElement = getByText(expiryDate);

    expect(titleElement).toBeInTheDocument();
    expect(section1Element).toBeInTheDocument();
    expect(section2Element).toBeInTheDocument();
    expect(submissionDateElement).toBeInTheDocument();
    expect(expiryDateElement).toBeInTheDocument();
  });
});
