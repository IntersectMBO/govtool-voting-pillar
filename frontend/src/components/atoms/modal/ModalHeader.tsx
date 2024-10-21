import Typography from '@mui/material/Typography';
import type { SxProps } from '@mui/system';

interface Props {
  children: React.ReactNode;
  sx?: SxProps;
}

/**
 * Renders the header of a modal.
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The content of the header.
 * @param {Object} props.sx - The custom styling for the header.
 * @returns {JSX.Element} The rendered modal header.
 */
export const ModalHeader = ({ children, sx }: Props) => (
  <Typography
    marginBottom="8px"
    fontSize="28px"
    fontWeight="500"
    textAlign="center"
    sx={sx}
  >
    {children}
  </Typography>
);
