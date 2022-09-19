import React from "react";
import { render, screen } from "../../jest.utils";
import { ThemeProvider } from "theme-ui";
import { theme } from "../../theme";
import { Episode } from "./episode";

describe("<Episode/>", () => {
  test("deberia renderizar el componente", () => {
    render(
      <ThemeProvider theme={theme}>
        <Episode />
      </ThemeProvider>
    );

    expect(screen.getByText("EPISODE")).toBeInTheDocument();
  });
});
