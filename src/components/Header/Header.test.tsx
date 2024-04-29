import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";

describe("Testing Header component", () => {
  it("should render with Title MSK Sistemas", () => {
    render(<Header />);
    screen.getByText("MSK Sistemas");
  });
  it("should render with Title MSK Sistemas", () => {
    render(<Header />);
    const button = document.querySelector(".buttonCart");
    button && fireEvent.click(button);
    const span = document.querySelector(".buttonCart span");
    console.log(span);

    expect(span).toBe(1);
  });
});
