import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
// import Img from 'gatsby-image'
import styled from 'styled-components'
import { Box } from '@rebass/grid'
import Section from '../../../components/Section'
// import getWidth from '../../../utils/getWidth'

const Outer = styled.section`
  z-index: 90;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

const Inner = styled.section`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Overflow = ({ data }) => (
  <Outer>
    <Inner>
      <Box pt={6}>
        <h1>Lie & Theft as Practice</h1>
      </Box>
      {/* <Box>
        <Flex flexWrap="wrap">
          {data.edges.map(v => (
            <Box width={getWidth(3)} p={2}>
              <Img
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                fluid={v.node.frontmatter.featuredimage.childImageSharp.fluid}
                alt="fu"
              />
            </Box>
          ))}
        </Flex>
      </Box> */}
    </Inner>
  </Outer>
)

const Hero = () => {
  const { practices } = useStaticQuery(graphql`
    query HeroSection {
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
              featuredimage
            }
          }
        }
      }
    }
  `)
  return (
    <Section>
      <Overflow data={practices} />
      <img
        alt="fu"
        src="img/hero.jpg"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          opacity: '0.3',
          width: '100%',
          height: '100%',
          objectFit: 'contain',
        }}
      />
    </Section>
  )
}

export default Hero
