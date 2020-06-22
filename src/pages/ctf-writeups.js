import React from "react";
import Header from "../components/header";
import Layout from "../components/layout";
import CTFCard from "../components/ctfcard";

export default function CTFWriteups({data}) {
    const Posts = data.allMarkdownRemark.edges.map(edge => <CTFCard title={edge.node.frontmatter.title} date={edge.node.frontmatter.date} ctf={edge.node.frontmatter.ctf} tags={edge.node.frontmatter.tags} />)
    return (
        <Layout>
        <Header headerText="CTF Writeups"/>
            <div className="ctfCards" style={{ textAlign: "center" }}>
                {Posts}
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`{
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date]}
            limit: 1000
        ) {
            edges {
                node {
                    frontmatter {
                        ctf
                        title
                        tags
                        date(formatString: "YYYY-MM-DD")
                    }
                }
            }
        }
    }`