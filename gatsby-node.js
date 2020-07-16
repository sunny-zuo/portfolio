exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions

    const ctfTemplate = require.resolve('./src/templates/ctf-template.js');

    const formatPath = (ctf, title) => {
        return `/ctf-writeups/` +
        ctf.replace(/\s/g, "-").toLowerCase().replace(/[^a-zA-Z0-9-]/g, "") + "/" + // space -> dash, lowercase, remove non alphanumeric plus dash
        title.replace(/\s/g, "-").toLowerCase().replace(/[^a-zA-Z0-9-]/g, "")
    } 

    const result = await graphql(`{
        allMarkdownRemark(
            sort: { order: [DESC, ASC], fields: [frontmatter___date, frontmatter___title]}
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
    
    const posts = result.data.allMarkdownRemark.edges;
    posts.forEach(({ node }, index) => {
        createPage({
            path: formatPath(node.frontmatter.ctf, node.frontmatter.title),
            component: ctfTemplate,
            context: {
                ctf: node.frontmatter.ctf,
                title: node.frontmatter.title,
                prev: index === 0 ? null : posts[index - 1].node,
                next: index === (posts.length - 1) ? null : posts[index + 1].node
            }
        })
    })
}