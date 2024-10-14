import { Box } from '@mui/material';
import { useScreenDimension } from '../../../hooks';

interface Props {
  children: React.ReactNode;
}

/**
 * Renders the contents of a modal.
 *
 * @param {Props} props - The component props.
 * @param {React.ReactNode} props.children - The children to be rendered inside the modal.
 * @returns {JSX.Element} The rendered modal contents.
 */
export const ModalContents = ({ children }: Props) => {
  const { isMobile } = useScreenDimension();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      px={isMobile ? 0 : 3}
    >
      {children}
    </Box>
  );
};
