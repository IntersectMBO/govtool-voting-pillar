"use client";
import { Box, Typography, useTheme } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Tooltip } from "@/components/Tooltip";

export const GovernanceActionCardDateBox = ({
  isSliderCard,
  createdDate,
  createdEpochNo,
}) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        border: 1,
        borderColor: theme.palette.primary[100],
        borderRadius: 3,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        mb: isSliderCard ? "20px" : "32px",
      }}
    >
      <Box
        sx={{
          alignItems: "center",
          bgcolor: "#D6E2FF80",
          display: "flex",
          flex: 1,
          justifyContent: "center",
          py: "6px",
          width: "100%",
        }}
      >
        <Typography
          variant="caption"
          sx={{
            fontSize: 12,
            fontWeight: 300,
          }}
          data-testid="submission-date"
        >
          Submitted:{" "}
          <Typography variant="caption" sx={{ fontWeight: 600 }}>
            {createdDate}
          </Typography>{" "}
          <Typography variant="caption" sx={{ fontWeight: 400 }}>
            Epoch: {createdEpochNo}
          </Typography>
        </Typography>
        <Tooltip
          heading="Expiry Date"
          paragraphOne="The date when the governance action will expiry if it doesn’t reach ratification thresholds."
          placement="bottom-end"
          arrow
        >
          <InfoOutlinedIcon
            sx={{
              ml: 0.5,
              fontSize: "18px",
              color: "#ADAEAD",
            }}
          />
        </Tooltip>
      </Box>
    </Box>
  );
};
