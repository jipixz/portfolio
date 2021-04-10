import React from "react"
import { NavItem } from "../../styles/navBar/navBarLinksStyles"

export default function NavbarLinks () {
    return(
        <>
            <NavItem to="/">Home</NavItem>
            <NavItem to="#about-me">About me</NavItem>
            <NavItem to="#education">Education</NavItem>
            <NavItem to="#projects">My projects</NavItem>
            <NavItem to="#contact">Contact</NavItem>
        </>
    )
}