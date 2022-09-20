import React from "react";
import { ThemeProvider } from "theme-ui";
import { render, screen } from "../../jest.utils";
import { theme } from "../../theme";
import { Navbar } from "./navbar";

describe("<Navbar/>", () => {
  test("deberia renderizar el componente", () => {
    render(
      <ThemeProvider theme={theme}>
        <Navbar />
      </ThemeProvider>
    );

    expect(screen.getByText("Podcaster")).toBeInTheDocument();
  });
});
