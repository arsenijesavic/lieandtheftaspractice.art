import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout'
import Section from '../components/Section'
import Img from 'gatsby-image'

const Practice = ({ data }) => {
  const {
    html,
    frontmatter: { title, authors, featuredimage },
  } = data.markdownRemark

  return (
    <Layout>
      <Section>
        <Img
          id="js-big-box"
          fluid={featuredimage.childImageSharp.fluid}
          style={{
            width: '100%',

            objectFit: 'cover',
            height: '50vh',
          }}
        />
        <h2 style={{ fontWeight: '100' }}>{title.toUpperCase()}</h2>
        {authors.map((v, i) => (
          <Link key={i} to={'slug'}>
            <h4 style={{ padding: '0', margin: '0' }}>{v.author}</h4>
          </Link>
        ))}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Section>
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
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
