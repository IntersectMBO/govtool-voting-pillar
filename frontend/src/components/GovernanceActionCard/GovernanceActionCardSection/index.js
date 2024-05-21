import { Box, Typography, useTheme } from "@mui/material";

export const GovernanceActionCardSection = ({
  label,
  text,
  dataTestId,
  isSliderCard,
  textVariant = "oneLine",
  copyButton,
  tooltip,
  marginBottom,
}) => {
  const theme = useTheme();
  return (
    <Box
      data-testid={dataTestId}
      mb={marginBottom ?? isSliderCard ? "20px" : "32px"}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: "4px" }}>
        <Typography
          variant={isSliderCard ? "bodyMediumM" : "bodySemiM"}
          sx={{
            color: theme.palette.grays[500],
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {label}
        </Typography>
        {tooltip}
      </Box>
      <Box display="flex">
        {textVariant === "pill" ? (
          <Box
            sx={{
              padding: "6px 18px",
              overflow: "hidden",
              bgcolor: theme.palette.primary[100],
              borderRadius: 100,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {text}
            </Typography>
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <Typography
              variant={isSliderCard ? "bodyMediumM" : "bodySemiM"}
              sx={{
                fontWeight: 400,
                ...(textVariant === "oneLine" && { whiteSpace: "nowrap" }),
                ...((textVariant === "oneLine" ||
                  textVariant === "twoLines") && {
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }),
                ...(textVariant === "twoLines" && {
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 2,
                  whiteSpace: "normal",
                }),
                ...(copyButton && {
                  color: "primaryBlue",
                }),
              }}
            >
              {text}
            </Typography>
            {copyButton}
          </Box>
        )}
      </Box>
    </Box>
  );
};
