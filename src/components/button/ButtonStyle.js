import styled from "styled-components";

export const ButtonField = styled.button`
    padding: 10px 20px;
    background: ${(props) => (props.variant === "text" ? "none" : "#ffc701")};

    font-family: Sora;
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: center;


    color: #000;
    border: 0px;
    border-radius: 5px;
    /* font-weight: bold; */
    cursor: pointer;
`;