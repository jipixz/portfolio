import React, { useState } from "react"
import NavBarLinks from "./navBarLinks"
import Logo from "./logo"
import styled from "styled-components"

const Navigation = styled.nav`
    height: 5rem;
    display: flex;
    background-color: #000b38;
    position: sticky;
    justify-content: space-between;
    text-transform: uppercase;
    border-bottom: 2px solid #33333320;
    margin: 0 auto;
    padding: 0 5vw;
    z-index: 2;
    align-self: center;
    font-family: "Open sans";
    font-size: 1.2rem;

    @media (max-width: 768px) {
        height: 4rem;
        top: 0;
        left: 0;
        right: 0;
        left: 0;
    }
`

const Toggle = styled.div`
    display: none;
    height: 100%;    
    cursor: pointer;
    padding: 0 1vw;

    @media (max-width: 768px) {
        display: flex;
    }
`

const Navbox = styled.div`
    display: flex;
    height: 100%;
    justify-content: flex-end;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        position: fixed;
        width: 100%;
        justify-content: flex-start;
        padding-top: 10vh;
        background-color: #000B38;
        transition: all 0.3s ease-in;
        top: 4rem;
        left: ${props => (props.open ? "-100%" : "0")};
    }
`

const Hamburguer = styled.div`
    background-color: #feb8ff;
    width: 30px;
    height: 3px;
    transition: all .3s linear;
    align-self: center;
    position: relative;
    transform: ${props => (props.open 
        ? "rotate(-45deg)" 
        : "inherit")
    };

    ::before,
    ::after {
        width: 30px;
        height: 3px;
        background-color: #feb8ff;
        content: "";
        position: absolute;
        transition: all 0.3s linear;
    }

    ::before {
        transform: ${props =>
            props.open 
                ? "rotate(-90deg) translate(-10px, 0px)" 
                : "rotate(0deg)"
        };
        top: -10px;
    }

    ::after {
        opacity: ${props => (props.open
            ? "0"
            : "1"
        )};
        transform: ${props => (props.open
            ? "rotate(90deg)"
            : "rotate(0deg)"
        )};
        top: 10px;
    }
`

export default function Navbar () {
    const [navbarOpen, setNavbarOpen] = useState(false)

    return (
        <Navigation>
            <Logo />
            <Toggle
                navbarOpen={navbarOpen}
                onClick={() => setNavbarOpen(!navbarOpen)}
            >
                {navbarOpen 
                    ? <Hamburguer open /> 
                    : <Hamburguer/>
                }
            </Toggle>
            {navbarOpen ? (
                <Navbox>
                    <NavBarLinks />
                </Navbox>
            ) : (
                <Navbox open>
                    <NavBarLinks />
                </Navbox>
            )}
        </Navigation>
    )
}