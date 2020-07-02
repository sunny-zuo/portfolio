import React from "react";
import Header from "../components/header";
import Layout from "../components/layout";
import CTFCard from "../components/ctfcard";
import PageHelmet from "../components/pageHelmet";
import { graphql } from 'gatsby';
import { useLocation } from '@reach/router';
import queryString from 'query-string';

export default function CTFWriteups({data}) {
    const location = useLocation();
    const searchQuery = getSearchQueries(location.search);
    const Posts = data.allMarkdownRemark.edges.filter(edge => matchSearch(edge, searchQuery)).map(edge => <CTFCard title={edge.node.frontmatter.title} date={edge.node.frontmatter.date} ctf={edge.node.frontmatter.ctf} tags={edge.node.frontmatter.tags} key={edge.node.frontmatter.title}/>)
    const pageTitle = (searchQuery?.ctf) ? `${searchQuery.ctf.replace(/[^a-zA-Z0-9 ]/g, '')} Writeups` : "CTF Writeups";

    if (Posts.length === 0) {
        const style = {
            textAlign: 'left',
            fontSize: '20px',
            fontWeight: '400'
        }
        let baseText = 'Unfortunately, no writeups were found ';
        baseText += (searchQuery?.ctf) ? `for "${searchQuery.ctf.replace(/[^a-zA-Z0-9 ]/g, '')}"` : '';
        baseText += (searchQuery?.tag) ? ` with tag "${searchQuery.tag.replace(/[^a-zA-Z0-9 ]/g, '')}".` : '.';
        Posts.push(<h1 style={style}>{baseText}</h1>)
    }
    return (
        <Layout>
            <PageHelmet title={pageTitle} />
            <Header headerText={pageTitle} />
                <div className="ctfCards" style={{ textAlign: "center" }}>
                    {Posts}
                </div>
        </Layout>
    )
}

const matchSearch = (edge, searchQuery) => {
    if (searchQuery) {
        const { tag, ctf } = searchQuery;
        if (tag) {
            if (!edge.node.frontmatter.tags.includes(tag.toLowerCase())) {
                return false;
            }
        }
        if (ctf) {
            if (edge.node.frontmatter.ctf.toLowerCase() !== ctf.toLowerCase()) {
                return false;
            }
        }
        return true;
    }
    return true;
}

const getSearchQueries = (query) => {
    if (query) {
        const searchQuery = queryString.parse(query);
        return searchQuery;
    }
}

export const pageQuery = graphql`{
        allMarkdownRemark(
            sort: { order: [DESC, ASC], fields: [frontmatter___date, frontmatter___title]}
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