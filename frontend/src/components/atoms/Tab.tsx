import { Tab as BaseTab, styled } from '@mui/material';

type TabProps = {
  label: string;
};

/**
 * Represents a custom styled tab component.
 */
export const Tab = styled((props: TabProps) => (
  <BaseTab disableRipple {...props} />
))(() => ({
  textTransform: 'none',
  fontWeight: 400,
  fontSize: 16,
  color: '#242232',
  '&.Mui-selected': {
    color: '#FF640A',
    fontWeight: 500,
  },
}));
