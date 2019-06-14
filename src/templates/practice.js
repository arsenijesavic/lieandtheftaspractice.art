import React from 'react'
import rehypeReact from 'rehype-react'

import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'

import { Flex, Box } from '@rebass/grid'
import Layout from '../components/Layout'
import Header from '../components/header'
import Section from '../components/Section'
import Img from 'gatsby-image'

const Frame = props => {
  return (
    <div style={{ position: 'relative', paddingTop: '56.25%' }}>
      <iframe
        title="unique"
        src={props.src}
        frameBorder="0"
        allowFullScreen
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  )
}

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { iframe: Frame },
}).Compiler

const Practice = ({ data, ...props }) => {
  const {
    htmlAst,
    fields: { authors },
    frontmatter: { title, featuredimage },
  } = data.markdownRemark

  return (
    <Layout style={{ cursor: `url('/img/arrow.png'), auto` }}>
      <Header />
      <Section onClick={() => props.navigate('/#team')}>
        <div
          style={{
            width: '960px',
            height: '368px',
          }}
        >
          <Img
            fluid={featuredimage.childImageSharp.fluid}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </div>
        <h2 style={{ padding: '0.5em 0', margin: '0' }}>
          {title.toUpperCase()}
        </h2>

        <Flex>
          {authors &&
            authors.map((v, i) => (
              <Link key={i} to={v.url} style={{ color: '#000' }}>
                <Box px={2}>
                  <h4>
                    {v.name}
                    {i !== authors.length - 1 && ','}{' '}
                  </h4>
                </Box>
              </Link>
            ))}
        </Flex>

        {htmlAst && renderAst(htmlAst)}
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
      fields {
        slug

        authors {
          name
          url
        }
      }

      htmlAst

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
