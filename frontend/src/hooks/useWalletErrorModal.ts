import { useModal } from '../context';

type WalletErrorModalProps = {
  error: unknown;
  onSumbit?: () => void;
  title?: string;
  buttonText?: string;
  dataTestId?: string;
};

export const useWalletErrorModal = () => {
  const { openModal, closeModal } = useModal();

  const openWalletErrorModal = ({
    error,
    onSumbit,
    title,
    buttonText,
    dataTestId,
  }: WalletErrorModalProps) => {
    const errorMessage =
      error && typeof error === 'object' && 'info' in error
        ? error.info
        : error;

    openModal({
      type: 'statusModal',
      state: {
        status: 'warning',
        title: title ?? 'Oops!',
        message: errorMessage,
        buttonText: buttonText ?? 'Cancel',
        onSubmit: () => {
          if (onSumbit) onSumbit();
          closeModal();
        },
        dataTestId: dataTestId ?? 'wallet-error-modal',
      },
    });
  };

  return openWalletErrorModal;
};
