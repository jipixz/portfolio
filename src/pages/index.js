import React from "react"
import Layout from "../components/layout"
import Typed from "react-typed"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons"
import Navbar from "../components/navbar/navbar"

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <div className="container">
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
            className="titulo"
            strings={["Welcome to my portfolio",
                      "Swipe down to know more about me 😉"]}
            typeSpeed={30}
            backSpeed={60}
            backDelay={2200}
          />
        
        <FontAwesomeIcon className="arrowDown" icon={faArrowCircleDown} size="3x" color="white"/>
      </div>
    </Layout>
  )
}