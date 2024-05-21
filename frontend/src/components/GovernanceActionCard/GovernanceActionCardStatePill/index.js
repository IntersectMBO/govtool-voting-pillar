"use client";
import { Card, Box, useTheme, Typography } from "@mui/material";
import { Check } from "@mui/icons-material";

/**
 * Renders a state pill for a governance action card.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.variant - The variant of the state pill. Supports `progress` or `voteSubmitted`.
 * @param {string} props.pillLabel - The label to be displayed on the state pill.
 * @returns {JSX.Element} The rendered component.
 */
export const GovernanceActionCardStatePill = ({ variant, pillLabel }) => {
  const theme = useTheme();
  const isInProgress = variant === "progress";
  return (
    <Box
      sx={{
        position: "absolute",
        top: -15,
        right: 30,
        backgroundColor: isInProgress
          ? theme.palette.progress[100]
          : theme.palette.success[100],
        border: 1,
        borderColor: isInProgress
          ? theme.palette.progress[500]
          : theme.palette.success[500],
        // TODO: Apply valid Pill style
        px: 2.25,
        py: 0.5,
        borderRadius: 100,
      }}
    >
      <Typography
        variant="body2"
        sx={{
          color: isInProgress
            ? theme.palette.progress[500]
            : theme.palette.success[500],
          display: "flex",
          alignItems: "center",
          gap: 0.5,
        }}
      >
        {variant === "voteSubmitted" && (
          <Check
            sx={{
              // TODO: Apply valid icon style
              fontSize: "17px",
            }}
          />
        )}
        {pillLabel || variant === "progress" ? "In Progress" : "Vote submitted"}
      </Typography>
    </Box>
  );
};
