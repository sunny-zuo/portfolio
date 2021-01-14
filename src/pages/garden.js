import React from "react";
import PageHelmet from "../components/pageHelmet"
import Layout from "../components/layout"

export default function Garden() {
    const redirectLink = 'https://github.com/sunny-zuo/smart-garden';
    window.location.replace(redirectLink);
    return (
        <Layout>
            <PageHelmet title="Smart Garden" />
            <a href={redirectLink} style={{ textDecoration: 'none', color: 'black' }}>
                <h1>Redirecting to Smart Garden...</h1>
                <p>Click here if you aren't redirected automatically.</p>
            </a>
        </Layout>
    )
}