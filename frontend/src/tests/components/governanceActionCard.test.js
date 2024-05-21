import React from "react";
import { render, screen } from "@testing-library/react";
import { GovernanceActionCard } from "@/components/GovernanceActionCard";

test("renders GovernanceActionCard component", () => {
  render(<GovernanceActionCard />);
  const gaCardElement = screen.getByText("GACard");
  expect(gaCardElement).toBeInTheDocument();
});
