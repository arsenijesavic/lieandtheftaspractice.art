import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Flex, Box } from '@rebass/grid'
import Section from '../../../components/Section'
import { Tooltip } from 'react-tippy'
import getWidth from '../../../utils/getWidth'

const MemberWrap = styled(Box)`
  overflow: hidden;
`
const Member = ({ frontmatter }) => (
  <MemberWrap width={getWidth(3)} p={2}>
    <Tooltip title="Welcome to React" trigger="mouseenter" followCursor={true}>
      <Img
        fluid={frontmatter.photo.childImageSharp.fluid}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </Tooltip>
  </MemberWrap>
)

const Team = () => {
  const { team } = useStaticQuery(graphql`
    query TeamPage {
      team: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___name] }
        filter: { frontmatter: { templateKey: { eq: "team-member" } } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              name
              photo {
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
    <Section style={{ height: '100vh' }}>
      <h2>team</h2>
      <Flex flexWrap="wrap">
        {team.edges.map((v, i) => (
          <Member key={i} {...v.node} />
        ))}
      </Flex>
    </Section>
  )
}

export default Team
