import { Typography, Box } from "@mui/material";
import { Slider } from "@/components/Slider";

export const GovernanceActionsToVote = ({ proposals, isDashboard }) => {
  console.log({ proposals });
  return (
    <>
      {!proposals.length ? (
        <Typography>No results for the search</Typography>
      ) : (
        proposals.map((item) => (
          <Box pb={2.5}>
            <Typography>Results {JSON.stringify(item, null, 2)}</Typography>
            {/* <Slider data={proposals} isDashboard={false} /> */}
          </Box>
        ))
      )}
    </>
  );
};
