import React, { useState } from "react"
import NavBarLinks from "./navBarLinks"
import Logo from "./logo"
import { Navigation, 
        Toggle, 
        Navbox, 
        Hamburguer } 
from "../../styles/navBar/navBarStyles"

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