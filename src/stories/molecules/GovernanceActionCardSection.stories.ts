import type { Meta, StoryObj } from '@storybook/react';
import { GovernanceActionCardSection } from '../../components/molecules/GovernanceActionCardSection';

const meta = {
  title: 'Molecules/GovernanceActionCardSection',
  component: GovernanceActionCardSection,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof GovernanceActionCardSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithDescription: Story = {
  args: {
    title: 'Abstract',
    description:
      'In light of recent network congestion and scalability concerns I propose implementing a dynamic fee adjustment mechanism that autonomously regulates transaction fees based on network demand and resource availability.',
  },
};

export const WithChip: Story = {
  args: {
    title: 'Governance Action Type',
    chip: 'Info',
  },
};
