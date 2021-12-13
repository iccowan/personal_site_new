import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

import App from "../App";

test("GitHub link render with app", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByTestId("github-link")).toBeInTheDocument();
});

test("LinkedIn link render with app", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByTestId("linkedin-link")).toBeInTheDocument();
});

test("Email link render with app", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByTestId("email-link")).toBeInTheDocument();
});
