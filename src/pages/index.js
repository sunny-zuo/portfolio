import React from "react"
import PageHelmet from "../components/pageHelmet"
import Header from "../components/header"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <PageHelmet title="Home" />
      <Header headerText="Home"/>
      <p>Hello! This page is currently still under construction. In the meantime, check out the About or CTF Writeup pages!</p>
    </Layout>
  )
}