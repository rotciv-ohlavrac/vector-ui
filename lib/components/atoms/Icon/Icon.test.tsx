import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Icon } from "./Icon";

describe("(Atoms) Icon test suite", () => {
  it("should render correctly", () => {
    render(<Icon />);
    expect(screen.getByTestId("component-icon")).toBeTruthy();
  });
});
