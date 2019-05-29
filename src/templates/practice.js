import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout'
import Section from '../components/Section'
import Img from 'gatsby-image'

const Practice = ({ data }) => {
  const {
    html,
    fields: { authors },
    frontmatter: { title, featuredimage },
  } = data.markdownRemark

  console.log(data)
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
          <Link key={i} to={v.url}>
            <h4 style={{ padding: '0', margin: '0' }}>{v.name}</h4>
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
      fields {
        slug

        authors {
          name
          url
        }
      }

      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
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
