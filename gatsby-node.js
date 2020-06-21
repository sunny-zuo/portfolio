exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions

    const ctfTemplate = require.resolve('./src/templates/ctfTemplate.js');

    const result = await graphql(`{
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date]}
            limit: 1000
        ) {
            edges {
                node {
                    frontmatter {
                        ctf
                        title
                    }
                }
            }
        }
    }`)

    if (result.erros) {
        reporter.panicOnBuild(`Error with GraphQL query`);
        return;
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: `/ctf-writeups/${node.frontmatter.ctf.replace(/\s/g, "-").toLowerCase().replace(/[^a-zA-Z0-9-]/g, "")}/${node.frontmatter.title.replace(/\s/g, "-").toLowerCase().replace(/[^a-zA-Z0-9-]/g, "")}`,
            component: ctfTemplate,
            context: {
                ctf: node.frontmatter.ctf,
                title: node.frontmatter.title
            }
        })
    })
}