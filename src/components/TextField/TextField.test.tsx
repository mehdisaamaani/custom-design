import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TextFields } from "./TextField";

describe("TextField", () => {
  it("render without crashing", () => {
    render(<TextFields />);
  });
  it("apply default variant", () => {
    render(<TextFields />);
    const input = screen.getByLabelText("Email");
    expect(input).toBeInTheDocument();
  });
  it("passes props thro MUI TextFields", () => {
    const label = "Email";

    render(<TextFields />);

    const input = screen.getByLabelText(label) as HTMLInputElement;

    expect(input.disabled).toBe(true);
  });
});
