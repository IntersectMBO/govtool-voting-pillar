"use client";
import { useMemo } from "react";

import { ICONS } from "@/constants";

export const CopyButton = ({ isChecked, text, variant }) => {
  const iconSrc = useMemo(() => {
    if (variant === "blue") {
      return ICONS.copyBlueIcon;
    }

    if (variant === "blueThin") {
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
        e.stopPropagation();
      }}
      src={iconSrc}
      style={{ cursor: "pointer" }}
    />
  );
};
