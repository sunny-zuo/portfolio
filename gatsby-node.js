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
                        slug
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
            path: node.frontmatter.slug,
            component: ctfTemplate,
            context: {
                slug: node.frontmatter.slug
            }
        })
    })
}