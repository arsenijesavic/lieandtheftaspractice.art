import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
//import styled from 'styled-components'
import { Flex, Box } from '@rebass/grid'
import Section from '../../../components/Section'
import Title from '../../../components/Title'
//import Collapsible from 'react-collapsible'
import getWidth from '../../../utils/getWidth'
import posed from 'react-pose'

const Accordion = posed.div({
  closed: { height: 0 },
  open: { height: 'auto' },
})

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
                details
              }
            }
          }
        }
      }
    }
  `)

  const about = data.edges[0].node.html
  const phases = data.edges[0].node.frontmatter.phases

  const [open, setOpen] = useState(-1)

  return (
    <Section id="about" style={{ minHeight: '100vh' }}>
      <Title name="ABOUT" />
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
              <Box
                key={i}
                mb={2}
                onClick={() => setOpen(open === i ? false : i)}
                style={{ cursor: 'pointer' }}
              >
                <h4 style={{ margin: '0', padding: '0.5em 0' }}>{v.name}</h4>
                <Accordion
                  style={{ overflow: 'hidden', columns: '300px 2' }}
                  pose={open === i ? 'open' : 'closed'}
                >
                  {console.log(v.details)}
                  <div
                    style={{ columns: '300px 2' }}
                    dangerouslySetInnerHTML={{ __html: v.details }}
                  />
                </Accordion>
              </Box>
            ))}
          </Flex>
        </Box>
      </Flex>
    </Section>
  )
}

export default About
