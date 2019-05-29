import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Flex, Box } from '@rebass/grid'
import Section from '../../../components/Section'
import Title from '../../../components/Title'
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
            <Link to={v.fields.slug}>
              <PracticeWrap>
                <Img
                  fluid={v.frontmatter.featuredimage.childImageSharp.fluid}
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
                templateKey
                title
                type
                date(formatString: "MMMM DD, YYYY")
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

  const data = practices.edges.reduce((obj, p) => {
    const { type } = p.node.frontmatter

    return {
      ...obj,
      [type]: [...(obj[type] ? obj[type] : []), ...p.node],
    }
  }, {})

  return (
    <Section id="practice" full style={{ background: '#F2F2F2' }}>
      <Wrap>
        <Title name="PRACTICES" />
        {Object.keys(data).map((v, i) => (
          <Practice key={i} name={v} data={data[v]} />
        ))}
      </Wrap>
    </Section>
  )
}

export default Practices
