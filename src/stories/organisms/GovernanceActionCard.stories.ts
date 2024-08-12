import type { Meta, StoryObj } from '@storybook/react';
import { GovernanceActionCard } from '../../components/organisms/GovernanceActionCard';

const meta = {
  title: 'Organisms/GovernanceActionCard',
  component: GovernanceActionCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof GovernanceActionCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Some random GA long title Some random GA long title…',
    sections: [
      {
        title: 'Abstract',
        description:
          'In light of recent network congestion and scalability concerns I propose implementing a dynamic fee adjustment mechanism that autonomously regulates transaction fees based on network demand and resource availability.',
      },
      {
        title: 'Governance Action Type',
        chip: 'Info',
      },
    ],
    submissionDate: '2022-01-01',
    submissionEpoch: 1,
    expiryDate: '2022-01-31',
    expiryEpoch: 31,
  },
};
