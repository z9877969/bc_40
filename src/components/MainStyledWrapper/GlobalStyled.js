import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

ul {
  list-style: none;
  padding: 0;
}

ul,
li,
h1,
h2,
h3,
p {
  margin: 0;
}

img {
  display: block;
  width: 100%;
}

button:active {
  transform: scale(0.95);
}
`;
