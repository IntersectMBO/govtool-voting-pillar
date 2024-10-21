import { Box } from '@mui/material';

import { Typography } from '../atoms';
import { ICONS } from '../../consts';
import { useModal } from '../../context';
import { useScreenDimension } from '../../hooks';
import { LinkWithIcon } from './LinkWithIcon';

/**
 * Renders a card component that displays supporting links for a governance action.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string[]} props.links - An array of links to be displayed.
 * @returns {JSX.Element} - The rendered component.
 */
export const GovernanceActionDetailsCardLinks = ({
  links,
}: {
  links?: string[];
}) => {
  const { isMobile } = useScreenDimension();
  const { openModal } = useModal();

  if (!links) return null;

  return (
    <>
      <Typography
        sx={{
          fontSize: 14,
          fontWeight: 600,
          lineHeight: '20px',
          color: 'neutralGray',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          my: 2,
        }}
        data-testid="supporting-links"
      >
        Supporting links
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: isMobile ? undefined : '1fr 1fr',
          columnGap: 2,
          rowGap: 2,
        }}
      >
        {links.map((link) => (
          <LinkWithIcon
            key={link}
            label={link}
            onClick={() => {
              openModal({
                type: 'externalLink',
                state: {
                  externalLink: link,
                },
              });
            }}
            icon={<img alt="link" src={ICONS.link} />}
            cutWithEllipsis
          />
        ))}
      </Box>
    </>
  );
};
