import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Flex, Box } from '@rebass/grid'
import Section from '../../../components/Section'
import getWidth from '../../../utils/getWidth'

const PracticeWrap = styled.div`
  overflow: hidden;
`

const Practice = ({ name, data }) => (
  <Flex flexWrap="wrap">
    <Box width={getWidth(2)}>
      <Box style={{ borderTop: '2px solid black' }} mb={2}>
        <h4 style={{ margin: '0', padding: '0.5em 0' }}>{name}</h4>
      </Box>
    </Box>

    <Box width={getWidth(10)} pl={4}>
      <Flex flexWrap="wrap">
        {data.map((v, i) => (
          <Box key={i} width={getWidth(3)} p={2}>
            <Link to={v.node.fields.slug}>
              <PracticeWrap>
                <Img
                  fluid={v.node.frontmatter.featuredimage.childImageSharp.fluid}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </PracticeWrap>
            </Link>
          </Box>
        ))}
      </Flex>
    </Box>
  </Flex>
)

const Practices = () => {
  const { practices } = useStaticQuery(
    graphql`
      query PracticesPage {
        practices: allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "practice" } } }
        ) {
          edges {
            node {
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
                    fluid(maxWidth: 400, quality: 70) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
  )

  return (
    <Section>
      <h2>practices</h2>
      <Practice name="Banana" data={practices.edges} />
    </Section>
  )
}

export default Practices
