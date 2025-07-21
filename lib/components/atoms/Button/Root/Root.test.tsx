import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Root } from "./Root";

describe("(Atoms) ButtonRoot test suite", () => {
  it("should render correctly", () => {
    render(<Root />);
    expect(screen.getByTestId("component-input-container")).toBeTruthy();
  });
});
