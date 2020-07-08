import React from "react";
import Layout from "../components/layout";
import CTFCard from "../components/ctfcard";
import PageHelmet from "../components/pageHelmet";
import { graphql } from 'gatsby';
import queryString from 'query-string';
import "../styles/ctf-writeups.css"
import { navigate } from "@reach/router";

class CTFWriteups extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasMounted: false
        }
    }

    componentDidMount() {
        this.setState({ hasMounted: true });
    }

    handleInputChange(event) {
        const currentQuery = getSearchQueries(window.location.search);

        let query = (currentQuery?.ctf) ? `?ctf=${currentQuery.ctf}&` : '?';
        query += (currentQuery?.tag) ? `tag=${currentQuery.tag}&` : '';

        if (event.target.value !== "") {
            query += `q=${event.target.value}`;
        }
        // remove trailing '&' to clean up query string
        if (query.slice(-1) === '&') {
            query = query.substr(0, query.length - 1);
        }
        navigate(`/ctf-writeups/${query}`);
    }

    render() {
        const { data, location } = this.props;

        if (!this.state.hasMounted) {
            return null;
        }

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
                <div className="ctfCardHead">
                    <h1>{pageTitle}</h1>
                    <form>
                        <input type="text" name="searchQuery" aria-label="Search Query" placeholder="Search Writeups" defaultValue={getCurrentSearch(location.search)} onChange={this.handleInputChange}></input>
                    </form>
                </div>
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
            let matchFound = false;
            for (let i = 0; i < tagArray.length; i++) {
                if (tag.localeCompare(tagArray[i], undefined, { sensitivity: 'base' }) === 0) { matchFound = true; }
            }
            if (!matchFound) {
                return false;
            }
        }
        if (ctf) {
            if (ctf.localeCompare(edge.node.frontmatter.ctf, undefined, { sensitivity: 'base' }) !== 0) {
                return false;
            }
        }
        if (q) {
            // For a general query, we will match incomplete and portions of a search (and not just exact)
            if (edge.node.frontmatter.ctf.toLowerCase().includes(q.toLowerCase()) && !(ctf)) { // don't check ctfs if ctf query is set
                return true;
            }
            if (edge.node.frontmatter.tags.toLowerCase().includes(q.toLowerCase())) {
                return true;
            }
            if (edge.node.frontmatter.title.toLowerCase().includes(q.toLowerCase())) {
                return true;
            }
            else {
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

const getCurrentSearch = (query) => {
    if (query) {
        const searchQuery = queryString.parse(query);
        if (searchQuery.q) {
            return searchQuery.q;
        }
    }

    return "";
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