"use client";
import { Typography, Box, useTheme } from "@mui/material";

/**
 * Renders the header for a governance action card.
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the card header.
 * @param {boolean} props.isError - Indicates whether the card header represents an error state.
 * @returns {JSX.Element} The rendered component.
 */
export const GovernanceActionCardHeader = ({ title, isError }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        mb: "20px",
        overflow: "hidden",
      }}
    >
      <Typography
        variant="titleSemiBig"
        sx={{
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 2,
          wordBreak: "break-word",
          ...(isError && { color: theme.palette.error[600] }),
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};
