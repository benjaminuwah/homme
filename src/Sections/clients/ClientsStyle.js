import styled from "styled-components";

export const ClientsWrapper = styled.div`
    padding: 50px 0px;

    h1 {
        color: #000;
        text-align: center;
        font-family: Sora;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
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

    .clients {
        display: flex;
        opacity: 50%;
    }

    .client_img {
        cursor: pointer;
    }

    @media (max-width: 768px) {

        .clients {
            display: flex
        }


        img {
            width: 100%;
            display: block;
            flex-wrap: wrap;
        }
    }
`;