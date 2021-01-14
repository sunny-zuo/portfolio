import React from "react";
import PageHelmet from "../components/pageHelmet"
import Layout from "../components/layout"

export default function Goose() {
    const redirectLink = 'https://github.com/sunny-zuo/sir-goose-bot';
    window.location.replace(redirectLink);
    return (
        <Layout>
            <PageHelmet title="Sir Goose Bot" />
            <a href={redirectLink} style={{ textDecoration: 'none', color: 'black' }}>
                <h1>Redirecting to Sir Goose Bot...</h1>
                <p>Click here if you aren't redirected automatically.</p>
            </a>
        </Layout>
    )
}