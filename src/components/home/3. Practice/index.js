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

const Wrap = styled.div`
  width: 960px;
  margin: 0 auto;
`

const Practice = ({ name, data }) => (
  <Flex style={{ borderBottom: '1px solid black' }} flexWrap="wrap">
    <Box width={getWidth(2)}>
      <Box mb={2}>
        <h4 style={{ fontWeight: '100' }}>{name.toUpperCase()}</h4>
      </Box>
    </Box>

    <Box width={getWidth(10)} pl={4}>
      <Flex>
        {data.map((v, i) => (
          <Box key={i} width={getWidth(1)} p={2}>
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
    <Section full style={{ background: '#F2F2F2' }}>
      <Wrap>
        <h2 style={{ fontWeight: '100' }}>PRACTICES</h2>
        <Practice name="Banana" data={practices.edges} />
        <Practice name="Banana" data={practices.edges} />
        <Practice name="Banana" data={practices.edges} />
        <Practice name="Banana" data={practices.edges} />
        <Practice name="Banana" data={practices.edges} />
        <Practice name="Banana" data={practices.edges} />
      </Wrap>
    </Section>
  )
}

export default Practices
