import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Section from '../../../components/Section'
import Image from '../../../components/Image'
// import getWidth from '../../../utils/getWidth'

const Hero = () => {
  const { hero } = useStaticQuery(graphql`
    query HeroPage {
      hero: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { fileAbsolutePath: { regex: "/(about)/" } }
      ) {
        edges {
          node {
            frontmatter {
              heroPhotoAuthor
              heroPhoto {
                relativePath
              }
            }
          }
        }
      }
    }
  `)

  const author = hero && hero.edges[0].node.frontmatter.heroPhotoAuthor
  const src = hero && hero.edges[0].node.frontmatter.heroPhoto.relativePath

  return (
    <Section id="home" full style={{ height: '90vh' }}>
      <h1 style={{ margin: '0', padding: '16px' }}>
        LIE and THEFT as PRACTICE
      </h1>
      <Image alt={author} title={author} src={`img/${src}`} />
    </Section>
  )
}

export default Hero
