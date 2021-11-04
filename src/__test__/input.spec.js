import React from "react";
import { Input } from "semantic-ui-react";

import { render, screen } from "@testing-library/react";

describe("Input Component", () => {
  test("should be able to render a input", () => {
    render(<Input placeholder="Insira o CEP" onChange={() => {}} />);

    expect(screen.getAllByPlaceholderText("Insira o CEP")).toBeTruthy();
  });
});
