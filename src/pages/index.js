import React from "react"
import Layout from "../components/layout"
import Navbar from "../components/navbar/navbar"
import AboutMe from "../components/aboutMe/aboutMe"
import Education from "../components/education/education"
import MyProjects from "../components/myProjects/myProjects"
import Contact from "../components/contact/contact"
import Footer from "../components/footer/footer"
import Hero from "../components/hero/hero"

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <AboutMe/>
      <MyProjects/>
      <Education/>
      <Contact/>
      <Footer/>
    </Layout>
  )
}