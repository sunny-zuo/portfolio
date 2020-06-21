/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: ['gatsby-plugin-react-helmet', 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'md-ctf-writeups',
      path: `${__dirname}/src/md-ctf-writeups`
    }
  },
  'gatsby-transformer-remark'],
}
