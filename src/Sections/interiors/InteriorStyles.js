import styled from "styled-components";

export const InteriorWrapper = styled.div`
    padding: 100px 0px;

    h1 {
        font-size: 32px;
        text-transform: uppercase;
    }

    p {
        color: #000;
        font-family: Sora;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .main {
        justify-content: space-between;
        display: flex;
        align-items: center;
        margin-bottom: 50px;
    }

    .gallery {
        display: flex;
        gap: 5%;
    }

    .text {
        width: 30%;

        h1 {
            font-family: Sora;
            font-size: 24px;
            font-weight: 300;
            line-height: 30px;
            letter-spacing: 0em;
            text-align: left;
        }

        p {
            font-family: Sora;
            font-size: 14px;
            font-weight: 400;
            line-height: 18px;
            letter-spacing: 0em;
            text-align: left;
        }

        hr {
            width: 2px;
            height: 230px;
            border: 0;
            background: #000;
        }

        h4 {
            font-family: Sora;
            font-size: 16px;
            font-weight: 400;
            line-height: 20px;
            letter-spacing: 0em;
            text-align: left;
            text-transform: capitalize;
        }

        h6 {
            font-family: Sora;
            font-size: 14px;
            font-weight: 400;
            line-height: 18px;
            letter-spacing: 0em;
            text-align: left;
        }

        span {
            color: #575757;
            font-family: Sora;
            font-size: 14px;
            font-weight: 400;
            line-height: 18px;
            letter-spacing: 0em;
            text-align: left;
        }
    }

    .images {
        display: grid;
        grid-row: auto;
        grid-template-columns: 1fr 1fr;
        overflow-x: scroll;
        gap: 30px;

        img {
            width: 800px;
            object-fit: cover;
        }
    }

    @media (max-width:780px) {
        .main {
            display: block;
            margin: 10px 0;
        }

        .gallery {
            display: block;
        }

        .text {
            width: 100%;
        }

        hr {
            display: none;
        }
    }
`;