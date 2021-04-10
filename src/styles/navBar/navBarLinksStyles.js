import styled from "styled-components"
import { Link } from "gatsby"

export const NavItem = styled(Link)`
    text-decoration: none;
    color: #7dbcfa;
    display: inline-block;
    white-space: nowrap;
    margin: 0 1vw;
    transition: all 200ms ease-in;
    position: relative;

    :after {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 0%;
        content: ".";
        color: transparent;
        background: #feb8ff;
        height: 1px;
        transition: all 0.4s ease-in;
    }

    :hover {
        color: #feb8ff;
        ::after {
            width: 100%
        }
    }

    @media (max-width: 768px) {
        margin: 30px 0;
        font-size: 3 rem;
        z-index: 6;
    }
`