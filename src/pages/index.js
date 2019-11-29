import React from "react"
import Layout from "../components/Layout"
import Header from "../components/header"
import { Hero, About, Practice, Team, Contact } from "../components/home"

const IndexPage = () => (
  <Layout>
    <Hero />
    <Header type="scroll" />
    <About />
    <Practice />
    <Team />
    <Contact />
  </Layout>
)

export default IndexPage
