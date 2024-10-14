import { Typography } from '../atoms';
import { getProposalTypeLabel } from '../../utils';

type EmptyStateGovernanceActionsCategoryProps = {
  category?: string;
  isSearch?: boolean;
};

/**
 * Renders the empty state message for the GovernanceActionsCategory component.
 *
 * @param {EmptyStateGovernanceActionsCategoryProps} props - The component props.
 * @param {string} props.category - The category of the governance actions.
 * @param {boolean} props.isSearch - Indicates if the empty state is for a search result.
 * @returns {JSX.Element} The rendered empty state message.
 */
export const EmptyStateGovernanceActionsCategory = ({
  category,
  isSearch,
}: EmptyStateGovernanceActionsCategoryProps) => (
  <Typography
    sx={{
      fontWeight: 300,
      py: 4,
    }}
  >
    {isSearch ? (
      'No results for the search.'
    ) : (
      <>
        Governance actions with category &nbsp;
        <Typography
          sx={{
            display: 'inline',
            fontWeight: 700,
          }}
        >
          {getProposalTypeLabel(category ?? '')}
        </Typography>
        &nbsp; don&apos;t exist.
      </>
    )}
  </Typography>
);
