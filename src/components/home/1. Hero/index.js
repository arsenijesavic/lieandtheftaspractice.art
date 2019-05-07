import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Flex, Box } from '@rebass/grid'
import Section from '../../../components/Section'
import Image from '../../../components/Image'
// import getWidth from '../../../utils/getWidth'

const Inner = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 90;
  background: rgba(255, 255, 255, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Overflow = ({ data }) => (
  <Inner>
    <Box>
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
            }
          }
        }
      }
    }
  `)

  return (
    <Section full>
      <Overflow data={practices} />
      <Image
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        }}
        alt="fu"
        src="img/hero.jpg"
      />
    </Section>
  )
}

export default Hero
