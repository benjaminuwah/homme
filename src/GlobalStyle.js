import { createGlobalStyle, styled } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0px;
        background: #FFFCF0;
        font-weight: bold;
        font-family: 'Sora', sans-serif;
    }

    h1 {
        font-size: 40px;
        text-transform: capitalize;
        margin: 0;
    }

    h3 {
        font-size: 24px;
    }

    p {
        color: #575757;
    }

    a {
        text-decoration: none;
    }

    li {
        list-style: none;
    }
`;

export const Container = styled.div`
    width: 85%;
    max-width: 1200px;
    margin: auto;
    position: relative;
`;

export const Row = styled.div`
    display: flex;
    gap: 40px;
    >div {
        flex: 1;
    }

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Row_2 = styled.div`
    display: flex;
    gap: 40px;
    >div {
        flex: 2;
    }
`;


export default GlobalStyle;