import React from "react"
import Layout from "../components/layout"
import Typed from "react-typed"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Home() {
  return (
    <Layout>
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
        <div className="titulo">
          <Typed
            strings={["Welcome to my portfolio",
                      "Swipe down to know more about me 😉"]}
            typeSpeed={30}
            backSpeed={60}
            backDelay={2200}
          />
        </div>
        <FontAwesomeIcon className="arrowDown" icon="sort-down"/>
      </div>
    </Layout>
  )
}