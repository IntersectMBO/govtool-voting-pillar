import { useMemo } from 'react';

import { ICONS } from '../../consts';
import { usePillarContext } from '../../context';

type Props = {
  isChecked?: boolean;
  text: string;
  variant?: 'blueThin' | 'blue';
};

/**
 * CopyButton component.
 *
 * @param isChecked - Indicates whether the button is checked.
 * @param text - The text to be copied to the clipboard.
 * @param variant - The variant of the button.
 * @returns The CopyButton component.
 */
export const CopyButton = ({ isChecked, text, variant }: Props) => {
  const { addSuccessAlert } = usePillarContext();

  /**
   * Determines the source of the icon based on the variant and isChecked values.
   *
   * @returns The source of the icon.
   */
  const iconSrc = useMemo(() => {
    if (variant === 'blue') {
      return ICONS.copyBlueIcon;
    }

    if (variant === 'blueThin') {
      return ICONS.copyBlueThinIcon;
    }

    if (isChecked) {
      return ICONS.copyWhiteIcon;
    }

    return ICONS.copyIcon;
  }, [isChecked, variant]);

  return (
    <img
      data-testid="copy-button"
      alt="copy"
      onClick={(e) => {
        navigator.clipboard.writeText(text);
        addSuccessAlert('Copied to clipboard');
        e.stopPropagation();
      }}
      src={iconSrc}
      style={{ cursor: 'pointer' }}
    />
  );
};
