export const typography = {
  fontFamily: "Roboto, Arial, sans-serif",

  caption: {
    fontSize: "0.75rem",
    fontWeight: 400,
    lineHeight: 1.66,
    color: "#000",
  },

  overline: {
    fontSize: "0.75rem",
    fontWeight: 500,
    letterSpacing: "0.5px",
    lineHeight: 2.5,
    textTransform: "uppercase",
    color: "#000",
  },

  h1: {
    fontWeight: 600,
    fontSize: "2.25rem",
    lineHeight: 1.2,
    color: "#000",
    "@media (max-width:900px)": { fontSize: "2rem" },
    "@media (max-width:600px)": { fontSize: "1.75rem" },
  },

  h2: {
    fontWeight: 600,
    fontSize: "1.875rem",
    lineHeight: 1.25,
    color: "#000",
    "@media (max-width:900px)": { fontSize: "1.625rem" },
    "@media (max-width:600px)": { fontSize: "1.375rem" },
  },

  h3: {
    fontWeight: 600,
    fontSize: "1.5rem",
    lineHeight: 1.3,
    color: "#000",
    "@media (max-width:900px)": { fontSize: "1.375rem" },
    "@media (max-width:600px)": { fontSize: "1.25rem" },
  },

  h4: {
    fontWeight: 600,
    fontSize: "1.3125rem",
    lineHeight: 1.4,
    color: "#000",
    "@media (max-width:900px)": { fontSize: "1.125rem" },
    "@media (max-width:600px)": { fontSize: "1rem" },
  },

  h5: {
    fontWeight: 600,
    fontSize: "1.125rem",
    lineHeight: 1.5,
    color: "#000",
    "@media (max-width:900px)": { fontSize: "1rem" },
    "@media (max-width:600px)": { fontSize: "0.9375rem" },
  },

  h6: {
    fontWeight: 600,
    fontSize: "1rem",
    lineHeight: 1.6,
    color: "#000",
    "@media (max-width:900px)": { fontSize: "0.9375rem" },
    "@media (max-width:600px)": { fontSize: "0.875rem" },
  },

  button: {
    textTransform: "capitalize",
    fontWeight: 400,
    color: "#000",
    "@media (max-width:600px)": { fontSize: "0.8125rem" },
  },

  body1: {
    fontSize: "0.875rem",
    fontWeight: 400,
    lineHeight: 1.5,
    color: "#000",
    "@media (max-width:900px)": { fontSize: "0.8125rem" },
    "@media (max-width:600px)": { fontSize: "0.75rem" },
  },

  body2: {
    fontSize: "0.75rem",
    letterSpacing: "0rem",
    fontWeight: 600,
    lineHeight: 1.4,
    color: "#000",
    "@media (max-width:900px)": { fontSize: "0.6875rem" },
    "@media (max-width:600px)": { fontSize: "0.625rem" },
  },

  subtitle1: {
    fontSize: "0.875rem",
    fontWeight: 700,
    color: "#9f9f9f",
    "@media (max-width:600px)": { fontSize: "0.8125rem" },
  },

  subtitle2: {
    fontSize: "0.875rem",
    fontWeight: 400,
    color: "#000",
    "@media (max-width:600px)": { fontSize: "0.8125rem" },
  },
};
