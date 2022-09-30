import React from "react";
import { render, screen } from "../../jest.utils";
import { Home } from "./home";

describe("<Home/>", () => {
  test("deberia renderizar el componente", () => {
    render(<Home />);

    expect(screen.getByText("HOME")).toBeInTheDocument();
  });
});
