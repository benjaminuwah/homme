import styled from "styled-components";

export const NavWrapper = styled.div`
    padding: 27px 0px;
    background: #fffcf0;
    /* background: black; */
    width: 100%;
    position: fixed;
    z-index: 100;
`;

export const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Menu = styled.div`
    li {
        display: inline;
        padding: 0px 15px;
    }

    a {
        color: #000;
    }
    
`;

