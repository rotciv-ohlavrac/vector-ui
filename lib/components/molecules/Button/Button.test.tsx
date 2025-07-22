import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Button } from "./Button";

describe("(Molecules) Button test suite", () => {
  it("should render correctly", () => {
    render(<Button />);
    expect(screen.getByTestId("component-button-root")).toBeTruthy();
  });
});
