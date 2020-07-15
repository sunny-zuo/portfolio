import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import TagHolder from "../components/tagHolder"
import PageHelmet from "../components/pageHelmet"
import "../styles/ctf-template.css"

export default function Template({data, pageContext}) {
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;
    const { prev, next } = pageContext;

    const formatPath = (ctf, title) => {
        return `/ctf-writeups/` +
            ctf.replace(/\s/g, "-").toLowerCase().replace(/[^a-zA-Z0-9-]/g, "") + "/" + // space -> dash, lowercase, remove non alphanumeric plus dash
            title.replace(/\s/g, "-").toLowerCase().replace(/[^a-zA-Z0-9-]/g, "")
    } 

    return (
        <Layout>
            <PageHelmet title={frontmatter.title} />
            <div className="ctf-writeup-container">
                <div className="ctf-writeup">
                    <h1><Link to={`/ctf-writeups/?ctf=${frontmatter.ctf}`} style={{ textDecoration: "underline", color: "black" }}>{frontmatter.ctf}</Link>: {frontmatter.title}</h1>
                    <h3>{frontmatter.date}</h3>
                    <TagHolder tags={frontmatter.tags} title={frontmatter.title} location="template" />
                    <div className="ctf-writeup-content" dangerouslySetInnerHTML={{ __html: html }} />
                </div>
            </div>
            <div className="pagination">
                {next && <Link to={formatPath(next.frontmatter.ctf, next.frontmatter.title)}><div className="left"><p>Next<br />{next.frontmatter.title}</p></div></Link>}
                {prev && <Link to={formatPath(prev.frontmatter.ctf, prev.frontmatter.title)}><div className="right"><p>Previous<br />{prev.frontmatter.title}</p></div></Link>}
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