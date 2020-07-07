import React from "react"
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
            <h1>Page Not Found</h1>
            <h2 style={h2Styles}>Oops! The page you're looking for could not be found.</h2>
        </Layout>
    )
}