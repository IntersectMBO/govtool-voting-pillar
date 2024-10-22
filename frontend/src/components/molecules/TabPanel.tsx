import { Box } from '@mui/material';

type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
};

/**
 * Renders a tab panel component.
 *
 * @param props - The component props.
 * @param props.children - The content of the tab panel.
 * @param props.value - The current value of the tab panel.
 * @param props.index - The index of the tab panel.
 * @returns The rendered tab panel component.
 */
export const TabPanel = (props: TabPanelProps) => {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: value !== index ? 0 : 1,
      }}
    >
      {value === index && <Box pb={3}>{children}</Box>}
    </div>
  );
};
