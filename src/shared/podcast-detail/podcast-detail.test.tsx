import React from "react";
import { ThemeProvider } from "theme-ui";
import { render, screen } from "../../jest.utils";
import { theme } from "../../theme";
import { PodcastDetail } from "./podcast-detail";

describe("<PodcastDetail/>", () => {
  test("deberia renderizar el componente", () => {
    render(
      <ThemeProvider theme={theme}>
        <PodcastDetail />
      </ThemeProvider>
    );

    expect(screen.getByText("Podcaster")).toBeInTheDocument();
  });
});
