import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import TagHolder from "../components/tagHolder"
import PageHelmet from "../components/pageHelmet"
import "../styles/ctfTemplate.css"

export default function Template({data}) {
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;

    return (
        <Layout>
            <PageHelmet title={frontmatter.title} />
            <div className="ctf-writeup-container">
                <div className="ctf-writeup">
                    <h1>{frontmatter.ctf}: {frontmatter.title}</h1>
                    <h3>{frontmatter.date}</h3>
                    <TagHolder tags={frontmatter.tags} title={frontmatter.title} location="template" />
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