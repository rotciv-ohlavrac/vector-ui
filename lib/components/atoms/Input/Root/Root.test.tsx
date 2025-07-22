import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Root } from "./Root";

describe("(Atoms) InputRoot test suite", () => {
  it("should render correctly", () => {
    render(<Root />);
    expect(screen.getByTestId("component-input-root")).toBeTruthy();
  });
});
