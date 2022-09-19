import React, { ReactElement } from "react";
import { render as rtlRender, RenderResult } from "@testing-library/react";
import { theme } from "./theme";
import { ThemeProvider } from "theme-ui";

//REDUX STORE
// import { Provider } from "react-redux";
// import Store from "./store";

interface Props {
  children?: ReactElement;
}

export const render = (
  ui: ReactElement,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  { ...renderOptions }: any = {}
): RenderResult => {
  const Wrapper = ({ children }: Props) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from "@testing-library/react";
