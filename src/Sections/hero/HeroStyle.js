import styled from "styled-components";

export const HeroWrapper = styled.div`
    position: relative;
    padding-top: 120px;

    h1 {
        margin-top: 15%;
    }

    .marq {
        position: absolute;
        bottom: 15%;
    }

    .text {
        font-size: 140px;
        font-weight: 700;
        text-transform: uppercase;
        font-family: Arial, Helvetica, sans-serif;

        -webkit-text-stroke: 1px #000;
        -webkit-text-fill-color: rgba(255, 255, 255, 0);
    }
`