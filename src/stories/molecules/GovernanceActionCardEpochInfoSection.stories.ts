import type { Meta, StoryObj } from '@storybook/react';
import { GovernanceActionCardEpochInfoSection } from '../../components/molecules/GovernanceActionCardEpochInfoSection';

const meta = {
  title: 'Molecules/GovernanceActionCardEpochInfoSection',
  component: GovernanceActionCardEpochInfoSection,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof GovernanceActionCardEpochInfoSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    submissionDate: '2022-01-01',
    submissionEpoch: 1,
    expiryDate: '2022-01-31',
    expiryEpoch: 31,
  },
};
