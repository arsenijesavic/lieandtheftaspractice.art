import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Flex, Box } from '@rebass/grid'
import Section from '../../../components/Section'
import getWidth from '../../../utils/getWidth'

const PracticeWrap = styled.div`
  height: 200px;
  overflow: hidden;
`
const Practice = ({ frontmatter }) => (
  <PracticeWrap>
    <Img
      fluid={frontmatter.featuredimage.childImageSharp.fluid}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      }}
    />
  </PracticeWrap>
)

const Practices = () => {
  const { practices } = useStaticQuery(graphql`
    query PracticesPage {
      practices: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { templateKey: { eq: "practice" } } }
      ) {
        edges {
          node {
            excerpt(pruneLength: 400)
            id
            fields {
              slug
            }
            frontmatter {
              title
              templateKey
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
      }
    }
  `)

  return (
    <Section>
      <h2>practices</h2>
      <Flex flexWrap="wrap">
        {practices.edges.map((v, i) => (
          <Box width={getWidth(3)} p={2}>
            <Link key={i} style={{ width: '100%' }} to={v.node.fields.slug}>
              <Practice {...v.node} />
            </Link>
          </Box>
        ))}
      </Flex>
    </Section>
  )
}

export default Practices
