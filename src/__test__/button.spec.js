import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "semantic-ui-react";

describe("Button component", () => {
  it("should render a button", () => {
    render(<Button />);

    expect(screen.getByRole("button")).toBeTruthy();
  });
});
