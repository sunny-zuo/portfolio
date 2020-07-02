import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import PageHelmet from "../components/pageHelmet"

export default function PageNotFound() {
    const h2Styles = {
        fontFamily: `'Roboto', sans-serif`,
        fontSize: '18px',
        fontWeight: '400'
    }
    return (
        <Layout>
            <PageHelmet title="Page Not Found" />
            <Header headerText="Page Not Found" />
            <h2 style={h2Styles}>Oops! The page you're looking for could not be found.</h2>
        </Layout>
    )
}