import styled from "styled-components"

export const Container = styled.div`
    padding: .5em;
    background: #000B38;
    font-family: "Open sans";
    border-top: 2px solid #787878;
`

export const Title = styled.h1`
    font-size: 1rem;
    text-align: center;
    color: #7DBCFA;
`

export const Text = styled.p`
    font-size: 16px;
    text-align: center;
    color: white;
`

export const LinkedinLinkStyle = styled.a`
    text-decoration: none;
    color: #FEB8FF;
    position: relative;
    margin-left: 6px;
    transition: all 200ms ease-in;
    
    :after {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 0%;
        content: ".";
        color: transparent;
        background: #feb8ff;
        height: 2px;
        transition: all 0.4s ease-in;
    }
    
    :hover {
        color: #7DBCFA;
        ::after {
            width: 100%
        }
    }
`

export const Social = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`