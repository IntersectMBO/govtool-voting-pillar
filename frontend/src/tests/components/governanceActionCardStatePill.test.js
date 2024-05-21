import React from "react";
import { render, screen } from "@testing-library/react";
import { GovernanceActionCardStatePill } from "@/components/GovernanceActionCard/GovernanceActionCardStatePill";

test("renders GovernanceActionCardStatePill component with 'In Progress' label", () => {
  render(<GovernanceActionCardStatePill variant="progress" />);
  const statePillElement = screen.getByText("In Progress");
  expect(statePillElement).toBeInTheDocument();
});

test("renders GovernanceActionCardStatePill component with 'Vote submitted' label", () => {
  render(<GovernanceActionCardStatePill variant="voteSubmitted" />);
  const statePillElement = screen.getByText("Vote submitted");
  expect(statePillElement).toBeInTheDocument();
});
