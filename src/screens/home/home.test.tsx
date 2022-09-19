import React from "react";
import { render, screen } from "../../jest.utils";
import { ThemeProvider } from "theme-ui";
import { theme } from "../../theme";
import { Home } from "./home";

describe("<Home/>", () => {
  test("deberia renderizar el componente", () => {
    render(
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    );

    expect(screen.getByText("HOME")).toBeInTheDocument();
  });
});
