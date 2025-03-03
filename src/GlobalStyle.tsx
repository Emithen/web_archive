import { Global, css } from "@emotion/react";

const GlobalStyle = () => (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
      }

      body {
        font-family: Arial, sans-serif;
        background-color: #f5f5f5;
      }
    `}
  />
);

export default GlobalStyle;
