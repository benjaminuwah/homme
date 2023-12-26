import styled from "styled-components";

export const NavWrapper = styled.div`
    padding: 27px 0px;
    background: #fffcf0;
    width: 100%;
    position: fixed;
    z-index: 100;

    .menu-icon {
        display: none;
        position: absolute;
        right: 0;
    }

    .show {
        display: block;
    }

    @media (max-width: 768px) {
        border-bottom: 1px solid grey;

        .menu-icon {
            display: block;
            right: 0;
            position: absolute;
    }
    }
`;

export const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const Menu = styled.div`
    li {
        display: inline;
        padding: 0px 15px;
    }

    a {
        color: #000;
        &:hover {
            color: #ffc701;
        }
    }

    @media (max-width: 768px) {
        display: none;

        ul {
            margin: 0;
            padding: 0;
        }

        li {
            padding: 20px 0;
            display: block;
        }
    }
    
`;

export const BtnGroup = styled.div`
    display: flex;

    @media (max-width: 768px) {
        display: none;
        flex-direction: column;
    }
`