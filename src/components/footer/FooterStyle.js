import styled from "styled-components";

export const FooterWrapper = styled.div`
    background: #000;
    padding: 100px 0;
    color: #fff;
    

    .footer_area {
        display: flex;
        align-items: center;
    }

    a {
        color: #787878;
        font-size: 14px;
    }

    .footer_1 {
        display: block;
        width: 30%;

        h1 {
            font-size: 24px;

            span {
                color: #ffc701;            
            }
        }
    }

    .footer_2 {
        display: flex;
        width: 70%;
        justify-content: space-between;
    }

    .line {
        margin: 88px 0;

        hr {
            border: none;
            height: 1px;
            background: #303030;
        }
    }

    .social_icons {
        display: flex;
        gap: 40px;
        justify-content: center;
    }

    .icon {
        border: 1px solid #787878;
        padding: 10px;
        border-radius: 100px;
    }

    .copyright {
        font-family: Sora;
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 0em;
        text-align: center;
    }

    @media (max-width: 768px) {
        .footer_area {
            display: block;
            
        }

        .footer_1 {
            width: 100%;
        }

        .footer_2 {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
        }


    }
`;