import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Section from '../../../components/Section'
import Image from '../../../components/Image'
// import getWidth from '../../../utils/getWidth'

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
            }
          }
        }
      }
    }
  `)

  console.log(practices)

  return (
    <Section full style={{ height: '100vh' }}>
      <h1 style={{ margin: '0', padding: '16px' }}>
        LIE and THEFT as PRACTICE
      </h1>

      <Image style={{}} alt="fu" src="img/hero.png" />
    </Section>
  )
}

export default Hero
