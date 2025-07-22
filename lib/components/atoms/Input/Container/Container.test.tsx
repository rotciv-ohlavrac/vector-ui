import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Container } from "./Container";

describe("(Atoms) InputContainer test suite", () => {
  it("should render correctly", () => {
    render(<Container />);
    expect(screen.getByTestId("component-input-container")).toBeTruthy();
  });
});
