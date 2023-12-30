import styled from "styled-components";

export const ExploreWrapper = styled.div`
    padding-top: 56px;
    padding-bottom: 50px;

    h1 {
        font-size: 32px;
        text-align: center;
        text-transform: uppercase;
    }

    h3 {
        font-family: Montserrat;
        font-size: 24px;
        font-weight: 400;
        line-height: 29px;
        letter-spacing: 0em;
        text-align: left;

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

    hr {
        width: 150px;
        /* border: 1px solid #000; */
        float: left;
        margin-top: -20px;
    }
`;

export const SliderCol = styled.div`
    overflow: hidden;
`
export const SliderWrapper = styled.div`
    position: relative;
    width: 100%;
`;

export const Slide = styled.div`
    width: 100%;
    height: 500px;
    background: #e5e5e5;
    background-image: url(${(props) => props.bg});
    background-size: cover;
    background-position: center;
`;

export const ArrowIcon = styled.div`
    background: #fff;
    padding: 10px;
    cursor: pointer;
    gap: 20px;
`;

export const Arrow = styled.div`
    display: flex;
    padding: 20px;
    position: absolute;
    z-index: 1;
    bottom: 30px;
    left: 30px;
    gap: 20px
`;