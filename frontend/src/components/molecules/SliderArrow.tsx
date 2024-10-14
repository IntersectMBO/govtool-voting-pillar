import { Box } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { voltaire } from '../../theme/voltaire';

type SliderArrowProps = {
  disabled: boolean;
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  left?: boolean;
};

/**
 * SliderArrow component represents an arrow used in a slider.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {boolean} props.disabled - Indicates if the arrow is disabled.
 * @param {Function} props.onClick - The function to be called when the arrow is clicked.
 * @param {boolean} props.left - Indicates if the arrow is pointing to the left.
 * @returns {JSX.Element} The rendered SliderArrow component.
 */
export const SliderArrow = ({ disabled, onClick, left }: SliderArrowProps) => {
  const {
    palette: { primaryBlue, arcticWhite, lightBlue },
  } = voltaire;

  return (
    <Box
      onClick={onClick}
      sx={{
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        border: `1px solid ${lightBlue}`,
        backgroundColor: arcticWhite,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        transition: '0.3s',

        '&:hover': {
          boxShadow: disabled ? 0 : 2,
        },
      }}
    >
      <ChevronRightIcon
        sx={{
          transform: `rotate(${left ? 180 : 0}deg)`,
          color: disabled ? '#C1BED3' : primaryBlue,
        }}
      />
    </Box>
  );
};
