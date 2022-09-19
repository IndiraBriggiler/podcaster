import React from "react";
import { render } from "../jest.utils";
import { PodcasterRouter } from "./router";

describe("PodcasterRouter", () => {
  test("debe renderizar el componente", () => {
    render(<PodcasterRouter />);

    // expect(setInitialValuesFromStorageSpy).toHaveBeenCalledTimes(1);
  });
});
