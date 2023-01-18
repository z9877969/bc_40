import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyled";
import { darkTheme, lightTheme } from "./themes";

const MainStyledWrapper = ({ children }) => {
  const themeType = "light";
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={themeType === "dark" ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </>
  );
};

export default MainStyledWrapper;
