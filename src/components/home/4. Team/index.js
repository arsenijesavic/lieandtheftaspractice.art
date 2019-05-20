import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Flex, Box } from '@rebass/grid'
import Section from '../../../components/Section'
import { Tooltip } from 'react-tippy'
import getWidth from '../../../utils/getWidth'

const MemberWrap = styled(Box)`
  overflow: hidden;
  border-bottom: 1px solid #fff;
`

const Wrap = styled.div`
  width: 960px;
  margin: 0 auto;
  padding-bottom: 96px;
`

const Member = ({ slug, name, photo }) => (
  <MemberWrap width={getWidth(6)} py={3}>
    <Tooltip
      html={
        <div
          style={{
            width: '200px',
            height: '200px',
            background: 'red',
          }}
        >
          <Img
            eager={true}
            fluid={photo && photo.childImageSharp.fluid}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'saturate(0%)',
            }}
          />
        </div>
      }
      trigger="mouseenter"
      // position="right"
      // followCursor={true}
    >
      <Link style={{ color: '#fff' }} to={slug}>
        <h4 style={{ padding: '0', margin: '0' }}>{name}</h4>
      </Link>
    </Tooltip>
  </MemberWrap>
)

const Team = () => {
  const { data } = useStaticQuery(graphql`
    query TeamPage {
      data: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___name] }
        filter: { frontmatter: { templateKey: { eq: "team" } } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              name
              order
              photo {
                childImageSharp {
                  fluid(maxWidth: 200, quality: 60) {
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

  const team = data.edges
    .map(v => ({
      ...v.node.fields,
      ...v.node.frontmatter,
    }))
    .sort((a, b) => a.order - b.order)

  return (
    <Section id="team" full style={{ background: '#000' }}>
      <Wrap>
        <h2 style={{ fontWeight: '100', color: '#fff' }}>TEAM</h2>
        <Flex style={{ marginTop: '64px' }} flexWrap="wrap">
          {team.map((v, i) => (
            <Member key={i} {...v} />
          ))}
        </Flex>
      </Wrap>
    </Section>
  )
}

export default Team
