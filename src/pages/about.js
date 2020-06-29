import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import PageHelmet from "../components/pageHelmet"
import ThingsUsed from "../components/thingsUsed"

export default function About() {
    return (
        <Layout>
            <PageHelmet title="About Me" />
            <Header headerText="About Me"/>
            <ThingsUsed />
        </Layout>
    )
}