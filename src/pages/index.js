import React from "react"
import PageHelmet from "../components/pageHelmet"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <PageHelmet title="Home" />
      <h1>Home</h1>
      <p>Hello! This page is currently still under construction. In the meantime, check out the CTF Writeup pages!</p>
    </Layout>
  )
}