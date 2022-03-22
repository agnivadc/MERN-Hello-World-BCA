import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders title element", () => {
  render(<App />);
  const titleElement = screen.getByText(
    /Hello World!! Welcome to first React program./i
  );
  expect(titleElement).toBeInTheDocument();
});
