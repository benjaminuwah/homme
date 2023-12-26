import styled from "styled-components";

export const StudiesWrapper = styled.div`
    padding: 50px 0px;

    h1 {
        font-size: 32px;
        text-align: center;
        text-transform: uppercase;
    }

    p {
        color: #000;
        text-align: center;
        font-family: Sora;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .text {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-top: 40px;

        h1 {
            color: #000;
            font-family: Montserrat;
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            text-transform: capitalize;
        }

        p {
            color: #575757;
            font-family: Sora;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }
    }
`