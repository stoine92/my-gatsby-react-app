const path = require('path')

  exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve(`src/templates/blog.js`)
    const result = await graphql(`
      query {
        allContentfulTheGatsbyBlog {
          edges {
            node {
              slug
            }
          }
        }
      }
    `)
    result.data.allContentfulTheGatsbyBlog.edges.forEach(edge => {
      createPage({
        path: `/blog/${edge.node.slug}`,
        component: blogPostTemplate,
        context: {
          slug: edge.node.slug,
        },
      })
    })
  }