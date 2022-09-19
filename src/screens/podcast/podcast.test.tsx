import React from "react";
import { render, screen } from "../../jest.utils";
import { ThemeProvider } from "theme-ui";
import { theme } from "../../theme";
import { Podcast } from "./podcast";

describe("<Podcast/>", () => {
  test("deberia renderizar el componente", () => {
    render(
      <ThemeProvider theme={theme}>
        <Podcast />
      </ThemeProvider>
    );

    expect(screen.getByText("PODCAST")).toBeInTheDocument();
  });
});
