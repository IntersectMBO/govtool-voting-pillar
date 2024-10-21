import { DialogContent } from '@mui/material';
import MuiModal from '@mui/material/Modal';
import type { ComponentProps } from 'react';

export type MuiModalChildren = ComponentProps<typeof MuiModal>['children'];

interface Props {
  open: boolean;
  children: MuiModalChildren;
  handleClose?: () => void;
}

/**
 * @deprecated Should be moved to the govtool-assembly.
 * Modal component.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.open - Whether the modal is open or not.
 * @param {ReactNode} props.children - The content of the modal.
 * @param {() => void} props.handleClose - The function to handle modal close event.
 * @returns {JSX.Element} The rendered modal component.
 */
export const Modal = ({ open, children, handleClose }: Props) => (
  <MuiModal open={open} onClose={handleClose} disableAutoFocus>
    <DialogContent>{children}</DialogContent>
  </MuiModal>
);
