import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "theme-ui";
import reportWebVitals from "./reportWebVitals";
import { PodcasterRouter } from "./router";
import { theme } from "./theme";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PodcasterRouter />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
reportWebVitals();
