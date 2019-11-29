import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { Flex, Box } from '@rebass/grid'
import Section from '../../../components/Section'
import Title from '../../../components/Title'
import getWidth from '../../../utils/getWidth'

const Practice = ({ name, data }) => (
  <Flex flexWrap="wrap">
    <Box width={getWidth(12)}>
      <h3 style={{ fontWeight: '500', margin: '1em 0' }}>
        {name.toUpperCase()}
      </h3>
    </Box>

    <Box width={getWidth(12)}>
      <Flex flexWrap="wrap">
        {data.map((v, i) => (
          <Box
            key={i}
            style={{ borderBottom: '1px solid black' }}
            width={getWidth(12)}
            p={2}
          >
            <Link style={{ color: '#000' }} to={v.fields.slug}>
              <h4 style={{ fontWeight: '100', margin: '0' }}>
                - {v.frontmatter.title}
              </h4>
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
    `
  )

  const data =
    practices &&
    practices.edges &&
    practices.edges.reduce((obj, p) => {
      const { type } = p.node.frontmatter

      return {
        ...obj,
        [type]: [...(obj && obj[type] ? obj[type] : []), p.node],
      }
    }, {})

  return (
    <Section id="practice" bg="#F2F2F2">
      <Title name="PRACTICES" />
      {data &&
        Object.keys(data).map((v, i) => (
          <Practice key={i} name={v} data={data[v]} />
        ))}
    </Section>
  )
}

export default Practices
