import React from "react";
import { Route, Router, useNavigate } from "react-router-dom";
import { render, screen, fireEvent } from "../../jest.utils";
import { PodcastDetail } from "./podcast-detail";

describe("<PodcastDetail/>", () => {
  test("debe renderizar el componente", () => {
    render(<PodcastDetail />);

    expect(screen.getByText("Podcaster")).toBeInTheDocument();
  });

  test("debe redirigir hacia detalle de un podcast al hacer click sobre la imagen", () => {
    render(<PodcastDetail />);

    const onClick = jest.fn();

    const img = screen.getByTestId("podcast-img");
    fireEvent.click(img);

    expect(onClick).toHaveBeenCalled();
  });
});
