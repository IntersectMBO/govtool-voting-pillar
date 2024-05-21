"use client";
import { Card, Box, useTheme, Button } from "@mui/material";

import { GovernanceActionCardHeader } from "./GovernanceActionCardHeader";
import { GovernanceActionCardStatePill } from "./GovernanceActionCardStatePill";
import { GovernanceActionCardSection } from "./GovernanceActionCardSection";
import { GovernanceActionCardDateBox } from "./GovernanceActionCardDateBox";

import { CopyButton } from "../CopyButton";

export const GovernanceActionCard = ({
  title,
  isError,
  isInProgress,
  isVoteSubmitted,
  sections,
  onClick,
  govActionId,
  createdDate,
  createdEpochNo,
}) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        overflow: "visible",
        width: { xs: 290, sm: 324, md: 350, lg: 400, xl: 450 },
        height: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: isError
          ? theme.palette.arcticWhite[400]
          : // TODO: Replace with theme colors
            "rgba(255, 255, 255, 0.3)",
        ...(isError && {
          border: `1px solid ${theme.palette.error[100]}`,
        }),
        ...(isInProgress && {
          border: `1px solid ${theme.palette.lightOrange}`,
        }),
      }}
    >
      {isInProgress ||
        (isVoteSubmitted && (
          <GovernanceActionCardStatePill
            variant={isInProgress ? "progress" : "voteSubmitted"}
          />
        ))}
      <Box
        sx={{
          padding: "40px 24px 0",
        }}
      >
        <GovernanceActionCardHeader title={title} isError={isError} />
        {sections.map((section) => (
          <GovernanceActionCardSection
            {...section}
            copyButton={
              <Box ml={1}>
                <CopyButton text={section.text} variant="blueThin" />
              </Box>
            }
          />
        ))}
        <GovernanceActionCardDateBox
          createdDate={createdDate}
          createdEpochNo={createdEpochNo}
        />
      </Box>
      <Box
        sx={{
          boxShadow: theme.shadows[0],
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          padding: 3,
          backgroundColor: theme.palette.white,
        }}
      >
        <Button
          onClick={onClick}
          variant={isInProgress ? "outlined" : "contained"}
          size="large"
          sx={{
            width: "100%",
          }}
          data-testid={`govaction-${govActionId}-view-detail`}
        >
          View Details
        </Button>
      </Box>
    </Card>
  );
};
