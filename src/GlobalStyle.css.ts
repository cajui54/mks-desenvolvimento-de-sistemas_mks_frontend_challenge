import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 62.5%;
        --secunday-color: #0f52ba;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Montserrat", sans-serif;
    }
    body {
        
    }

`;

export default GlobalStyle;
