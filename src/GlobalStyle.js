import { createGlobalStyle, styled } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0px;
        background: #FFFCF0;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
    }

    h1 {
        font-size: 48px;
    }

    a {
        text-decoration: none;
    }
`;

export const Container = styled.div`
    width: 85%;
    max-width: 1200px;
    margin: auto;
    position: relative;
`;


export default GlobalStyle;