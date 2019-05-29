const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(edge => {
      if (!edge.node.frontmatter.templateKey) return

      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`,
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode, getNodes }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.sourceNodes = ({ actions, getNodes, getNode }) => {
  const { createNodeField } = actions
  getNodes()
    .filter(node => node.internal.type === 'MarkdownRemark')
    .forEach(node => {
      if (node.frontmatter.templateKey === 'practice') {
        const authors = node.frontmatter.authors.map(v => v.author)
        const authorNode = getNodes()
          .filter(node2 => node2.internal.type === 'MarkdownRemark')
          .filter(node2 => node2.frontmatter.templateKey === 'team')
          .filter(node2 => authors.includes(node2.frontmatter.name))
          .map(node2 => ({ ...node2.frontmatter, url: node2.fields.slug }))

        if (authorNode) {
          createNodeField({
            node,
            name: 'authors',
            value: [...authorNode],
          })
        }
      }

      if (node.frontmatter.templateKey === 'team') {
        const practices = getNodes()
          .filter(node2 => node2.internal.type === 'MarkdownRemark')
          .filter(node2 => node2.frontmatter.templateKey === 'practice')
          .filter(node2 =>
            node2.frontmatter.authors
              .map(v => v.author)
              .includes(node.frontmatter.name),
          )
          .map(node2 => ({ ...node2.frontmatter, url: node2.fields.slug }))

        if (practices) {
          createNodeField({
            node,
            name: 'practices',
            value: [...practices],
          })
        }
      }
    })
}
