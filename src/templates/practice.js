import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Img from 'gatsby-image'

const Practice = ({ data }) => {
  const {
    html,
    frontmatter: { title, authors, featuredimage },
  } = data.markdownRemark

  return (
    <Layout>
      <Img
        id="js-big-box"
        fluid={featuredimage.childImageSharp.fluid}
        style={{
          width: '100%',
          objectFit: 'cover',
        }}
      />
      <h1>{title}</h1>
      {authors.map((v, i) => (
        <div key={i}>
          <h4>{v.author}</h4>
        </div>
      ))}
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

Practice.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Practice

export const pageQuery = graphql`
  query PracticeByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        authors {
          author
        }
        date(formatString: "MMMM DD, YYYY")
        featuredpost
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 120, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
