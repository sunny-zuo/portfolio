import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import ThingsUsed from "../components/thingsUsed"

export default function About() {
    return (
        <Layout>
        <Header headerText="About Me"/>
        <ThingsUsed />
        </Layout>
    )
}