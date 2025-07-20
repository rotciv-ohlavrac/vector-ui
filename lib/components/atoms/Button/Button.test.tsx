import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Button } from "./Button";

describe("(Atoms) Button test suite", () => {
  it("should render correctly", () => {
    render(<Button />);
    expect(screen.getByTestId("component-input-container")).toBeTruthy();
  });
});
