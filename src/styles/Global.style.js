import { createGlobalStyle } from "styled-components";
import theme from "../theme";

export const GlobalStyle= createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Orbitron', sans-serif;
    }

    body{
        background: ${theme.color.default};
        color: ${theme.color.primary};
    }
`;