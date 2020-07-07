import React from "react";
import Layout from "../components/layout";
import CTFCard from "../components/ctfcard";
import PageHelmet from "../components/pageHelmet";
import { graphql } from 'gatsby';
import queryString from 'query-string';
import "../styles/ctf-writeups.css"

class CTFWriteups extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isClient: false
        }
    }

    componentDidMount() {
        this.setState({ isClient: true });
    }
    
    render() {
        const { data, location } = this.props;

        const searchQuery = getSearchQueries(location.search);
        const Posts = data.allMarkdownRemark.edges.filter(edge => matchSearch(edge, searchQuery)).map(edge => <li key={`${edge.node.frontmatter.ctf}-${edge.node.frontmatter.title}`}><CTFCard title={edge.node.frontmatter.title} date={edge.node.frontmatter.date} ctf={edge.node.frontmatter.ctf} tags={edge.node.frontmatter.tags} key={edge.node.frontmatter.title} /></li>)
        const pageTitle = (searchQuery?.ctf) ? `${searchQuery.ctf.replace(/[^a-zA-Z0-9 ]/g, '')} Writeups` : "CTF Writeups";
        
        if (Posts.length === 0) {
            const style = {
                textAlign: 'left',
                fontSize: '20px',
                fontWeight: '400'
            }
            let baseText = 'Unfortunately, no writeups were found ';
            baseText += (searchQuery?.ctf) ? `for "${searchQuery.ctf.replace(/[^a-zA-Z0-9 ]/g, '')}"` : '';
            baseText += (searchQuery?.tag) ? ` with tag "${searchQuery.tag.replace(/[^a-zA-Z0-9 ]/g, '')}"` : '';
            baseText += (searchQuery?.q) ? ` for the query "${searchQuery.q.replace(/[^a-zA-Z0-9 ]/g, '')}".` : '.';
            Posts.push(<h1 style={style} key='noSearchFound'>{baseText}</h1>)
        } else { // insert dummy cards so that cards are left aligned on the final line
            Posts.push(<li key="dummy1"><div className='ctfCard' style={{ height: "0px" }}></div></li>);
            Posts.push(<li key="dummy2"><div className='ctfCard' style={{ height: "0px" }}></div></li>);
        }
        return (
            <Layout>
                <PageHelmet title={pageTitle} />
                <h1>{pageTitle}</h1>
                <div className="ctfCards" style={{ textAlign: "center" }}>
                    <ul>
                        {Posts}
                    </ul>
                </div>
            </Layout>
        )
    }
}

const matchSearch = (edge, searchQuery) => {
    if (searchQuery) {
        const { tag, ctf, q } = searchQuery;
        if (tag) {
            const tagArray = edge.node.frontmatter.tags.split(", ");
            for (let i = 0; i < tagArray.length; i++) {
                if (tagArray[i] === tag.toLowerCase()) { return true; }
            }
            return false;
        }
        if (ctf) {
            if (edge.node.frontmatter.ctf.toLowerCase() === ctf.toLowerCase()) {
                return true;
            }
            return false;
        }
        if (q) {
            // For a general query, we will match incomplete and portions of a search (and not just exact)
            if (edge.node.frontmatter.ctf.includes(q.toLowerCase())) {
                return true;
            }
            if (edge.node.frontmatter.tags.includes(q.toLowerCase())) {
                return true;
            }
            if (edge.node.frontmatter.title.includes(q.toLowerCase())) {
                return true;
            }
            return false;
        }
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

export default CTFWriteups;