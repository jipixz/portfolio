import React from "react"
import * as indexStyles from "./index.module.css"
import Layout from "../components/layout"
import Navbar from "../components/navbar/navbar"
import Hero from "../components/hero/hero"
import AboutMe from "../components/aboutMe/aboutMe"
import Education from "../components/education/education"
import MyProjects from "../components/myProjects/myProjects"
import Skills from "../components/skills/skills"
import Contact from "../components/contact/contact"
import Footer from "../components/footer/footer"
import ScrollBar from "../components/scrollBar/scrollBar"
import Social from "../components/socials/socials"

import { Content } from "../styles/content.js"
import { Section } from "../styles/section.js"

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <ScrollBar />
      <Hero />
      <Section>
        <Social />
        <Content>
          <AboutMe />
          <MyProjects/>
          <Education/>
          <Skills/>
          <Contact/>
        </Content>
      </Section>
      <Footer/>
    </Layout>
  )
}