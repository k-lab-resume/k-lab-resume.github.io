const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const blogPost = path.resolve(`./src/templates/blog-post.js`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMarkdownRemark(sort: { frontmatter: { date: ASC } }, limit: 300) {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `)

  const posts = result.data.allMarkdownRemark.nodes
  if (posts.length > 0) {
    posts.forEach((post) => {
      createPage({
        path: post.fields.slug,
        component: blogPost,
        context: {
          id: post.id,
        },
      })
    })
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`
    type SiteSiteMetadata {
      siteUrl: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      date: Date @dateformat
      update: Date @dateformat
      keywords: String
      summary: String
    }

    type Fields {
      slug: String
    }
  `)
}
