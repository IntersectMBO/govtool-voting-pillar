"use client";
import { Box, Typography, useMediaQuery } from "@mui/material";

import { GovernanceActionsToVote } from "@/components/GovernanceActionsToVote";

export const GovernanceActionPage = ({ proposals }) => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  console.log({ proposals });
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        mt: {
          sm: 3.25,
          lg: 6.25,
        },
        overflow: "hidden",
      }}
    >
      <Typography variant={isMobile ? "headlineS" : "displayS"}>
        Governance Actions
      </Typography>
      <Box height={isMobile ? 60 : 80} />
      <GovernanceActionsToVote
        proposals={proposals.elements}
        isDashboard={false}
      />
    </Box>
  );
};
