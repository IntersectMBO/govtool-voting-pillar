import { forwardRef } from 'react';
import { SxProps, styled } from '@mui/material/styles';

import { useModal } from '../../../context';
import { callAll } from '../../../utils';
import { ICONS } from '../../../consts';

interface Props {
  variant?: 'modal' | 'popup';
  onClose?: () => void;
  hideCloseButton?: boolean;
  children: React.ReactNode;
  dataTestId?: string;
  sx?: SxProps;
}

export const BaseWrapper = styled('div')<Pick<Props, 'variant'>>`
  box-shadow: 1px 2px 11px 0px #00123d5e;
  max-height: 90vh;
  position: fixed;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  background: #fbfbff;
  border-radius: 24px;
  transform: translate(-50%, -50%);

  ${({ variant }) => {
    if (variant === 'modal') {
      return `
        width: 80vw;
        max-width: 510px;
        padding: 52px 24px 34px 24px;
        max-height: 80vh;
        overflow: auto;
      `;
    }
    if (variant === 'popup') {
      return `
        width: 320px;
        height: 320px;
      `;
    }
  }}
`;

export const CloseButton = styled('img')`
  cursor: pointer;
  position: absolute;
  top: 24px;
  right: 24px;
`;

/**
 * Wrapper component for modals.
 *
 * @component
 * @example
 * ```tsx
 * <ModalWrapper onClose={handleClose}>
 *   <ModalContent />
 * </ModalWrapper>
 * ```
 *
 * @param {React.Ref<HTMLDivElement>} ref - Reference to the underlying HTML div element.
 * @param {Props} props - The component props.
 * @param {React.ReactNode} props.children - The content of the modal.
 * @param {Function} props.onClose - The function to be called when the modal is closed.
 * @param {string} [props.variant='modal'] - The variant of the modal.
 * @param {boolean} [props.hideCloseButton=false] - Whether to hide the close button.
 * @param {string} [props.dataTestId='modal'] - The data-testid attribute for testing purposes.
 * @param {object} [props.sx] - The custom styles for the modal.
 * @returns {JSX.Element} The rendered ModalWrapper component.
 */
export const ModalWrapper = forwardRef<HTMLDivElement, Props>(
  (
    {
      children,
      onClose,
      variant = 'modal',
      hideCloseButton = false,
      dataTestId = 'modal',
      sx,
    },
    ref
  ) => {
    const { closeModal } = useModal();

    return (
      <BaseWrapper variant={variant} data-testid={dataTestId} sx={sx} ref={ref}>
        {variant !== 'popup' && !hideCloseButton && (
          <CloseButton
            data-testid="close-modal-button"
            alt="close"
            onClick={callAll(closeModal, onClose)}
            src={ICONS.closeIcon}
          />
        )}
        {children}
      </BaseWrapper>
    );
  }
);
