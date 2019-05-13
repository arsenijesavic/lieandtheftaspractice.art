import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
//import styled from 'styled-components'
import { Flex, Box } from '@rebass/grid'
import Section from '../../../components/Section'
//import Collapsible from 'react-collapsible'
import getWidth from '../../../utils/getWidth'

const About = () => {
  const { data } = useStaticQuery(graphql`
    query AboutPage {
      data: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { fileAbsolutePath: { regex: "/(about)/" } }
      ) {
        edges {
          node {
            fileAbsolutePath
            html
            id
            frontmatter {
              phases {
                name
                detals
              }
            }
          }
        }
      }
    }
  `)

  const about = data.edges[0].node.html
  const phases = data.edges[0].node.frontmatter.phases

  return (
    <Section style={{ minHeight: '100vh' }}>
      <h2 style={{ fontWeight: '100', marginTop: '129px' }}>ABOUT</h2>
      <Flex flexWrap="wrap">
        <Box width={getWidth(12)} py={2}>
          <div
            style={{ columns: '300px 2' }}
            dangerouslySetInnerHTML={{ __html: about }}
          />
        </Box>
        <Box width={getWidth(12)} py={2}>
          <Flex flexDirection="column" style={{ height: '100%' }}>
            {phases.map((v, i) => (
              <Box key={i} mb={2}>
                <h4 style={{ margin: '0', padding: '0.5em 0' }}>{v.name}</h4>
              </Box>
            ))}
          </Flex>
        </Box>
      </Flex>
    </Section>
  )
}

export default About
