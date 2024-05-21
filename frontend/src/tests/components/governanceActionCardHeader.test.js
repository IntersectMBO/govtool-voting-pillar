import React from "react";
import { render, screen } from "@testing-library/react";
import { GovernanceActionCardHeader } from "@/components/GovernanceActionCard/GovernanceActionCardHeader";

test("renders GovernanceActionCardHeader component with title", () => {
  const title = "Sample Title";
  render(<GovernanceActionCardHeader title={title} />);
  const headerElement = screen.getByText(title);
  expect(headerElement).toBeInTheDocument();
});

test("renders GovernanceActionCardHeader component with error state", () => {
  const title = "Sample Title";
  render(<GovernanceActionCardHeader title={title} isError={true} />);
  const headerElement = screen.getByText(title);
  expect(headerElement).toBeInTheDocument();
  expect(headerElement).toHaveStyle({ color: "red" });
});
