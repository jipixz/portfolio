import React from "react"
import Typed from "react-typed"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons"
import * as heroStyles from "./hero.module.css"

export default function Home() {
    return (
        <div className={heroStyles.container}>
            <ul className="cuadrados">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            
            <Typed
                className={heroStyles.titulo}
                strings={["Welcome to my portfolio",
                        "Swipe down to know more about me 😉"]}
                typeSpeed={30}
                backSpeed={60}
                backDelay={2200}
            />
            
            <FontAwesomeIcon 
                className={heroStyles.arrowDown} 
                icon={faArrowCircleDown} 
                size="3x" 
                color="white"
            />
        </div>
    )
}