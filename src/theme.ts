import type { Theme } from "theme-ui";

export const theme: Theme = {
  fonts: {
    heading: '"Jost",Helvetica,Arial,serif;',
    display: '"Jost",Helvetica,Arial,serif;',
    body: '"Jost",Helvetica,Arial,serif;',
    text: '"Jost",Helvetica,Arial,serif;',
  },
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#2978BE",
    body: "#d6d6d6",
    lightblue: "#F9F9F9",
  },
  text: {
    default: {
      color: "text",
      fontSize: 2,
      fontFamily: "text",
      display: "block",
      mb: 2,
    },
    span: {
      color: "text",
      fontSize: 2,
      fontFamily: "text",
    },
    italic: {
      fontStyle: "italic",
      fontFamily: "text",
    },
    title: {
      fontSize: 3,
      fontWeight: "bold",
      fontFamily: "text",
      display: "block",
    },
    heading: {
      fontFamily: "text",
      fontWeight: "bold",
      fontSize: 4,
      color: "primary",
    },
    h3: {
      fontFamily: "text",
      fontWeight: "bold",
      fontSize: 4,
      mb: 3,
    },
  },
  cards: {
    primary: {
      padding: "2",
      borderRadius: 4,
      boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)",
      height: "fit-content",
    },
  },

  styles: {
    a: {
      "&:-webkit-any-link": {
        textDecoration: "none",
      },
    },
    hr: {
      color: "body",
    },
  },
};
