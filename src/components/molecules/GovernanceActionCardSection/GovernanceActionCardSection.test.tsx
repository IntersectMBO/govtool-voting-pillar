import { render } from '@testing-library/react';
import { GovernanceActionCardSection } from './GovernanceActionCardSection';

describe('GovernanceActionCardSection', () => {
  it('renders the component with description', () => {
    const { getByText } = render(
      <GovernanceActionCardSection
        title="Test Title"
        description="Test Description"
      />
    );
    const descriptionElement = getByText('Test Description');
    expect(descriptionElement).toBeInTheDocument();
  });

  it('renders the component with chip', () => {
    const { getByText } = render(
      <GovernanceActionCardSection title="Test Title" chip="Test Chip" />
    );
    const chipElement = getByText('Test Chip');
    expect(chipElement).toBeInTheDocument();
  });
});
