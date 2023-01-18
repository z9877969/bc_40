const theme = {
  color: {
    success: "green",
    warning: "orange",
    error: "red",
  },
  fontSize: {},
  bg: {},
  spasing: [],
};

export const lightTheme = {
  ...theme,
  color: {
    success: "lightgreen",
    warning: "lightorange",
    error: "lightred",
  },
  bg: {},
};

export const darkTheme = {
  ...theme,
  color: {
    success: "darkgreen",
    warning: "darkorange",
    error: "darkred",
  },
  bg: {},
};
