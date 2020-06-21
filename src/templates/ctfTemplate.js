import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Template({data}) {
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;

    return (
        <Layout>
        <div className="ctf-writeup-container">
            <div className="ctf-writeup">
                <h1>{frontmatter.ctf}: {frontmatter.title}</h1>
                <h3>{frontmatter.date}</h3>
                <h3>Tags: {frontmatter.tags}</h3>
                <div className="ctf-writeup-content" dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        </div>
        </Layout>
    )
}

export const pageQuery = graphql`
    query($ctf: String!, $title: String!) {
        markdownRemark(frontmatter: {ctf: {eq: $ctf}, title: {eq: $title}}) {
            html
            frontmatter {
                date(formatString: "YYYY-MM-DD")
                title
                tags
                ctf
            }
        }
    }`