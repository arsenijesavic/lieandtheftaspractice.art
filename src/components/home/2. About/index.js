import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Flex, Box } from "@rebass/grid"
import Section from "../../../components/Section"
import Title from "../../../components/Title"
//import Collapsible from 'react-collapsible'
import getWidth from "../../../utils/getWidth"
import posed from "react-pose"

const Accordion = posed.div({
  closed: { height: 0 },
  open: { height: "auto" },
})

const About = () => {
  const { data, phase } = useStaticQuery(graphql`
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
              heroPhoto {
                childImageSharp {
                  fluid(quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }

      phase: allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___from] }
        filter: { fileAbsolutePath: { regex: "/(phase)/" } }
      ) {
        edges {
          node {
            html
            frontmatter {
              name
            }
          }
        }
      }
    }
  `)

  const about = data.edges[0].node.html
  const phases = phase.edges.map(v => ({
    name: v.node.frontmatter.name,
    details: v.node.html,
  }))

  const [open, setOpen] = useState(-1)

  return (
    <Section id="about">
      <Title name="ABOUT" />
      <Flex flexWrap="wrap">
        <Box width={getWidth(12)} py={2}>
          <div
            style={{
              columns: "300px 2",
              columnGap: "5em",
              breakInside: "avoid",
              textAlign: "justify",
            }}
            dangerouslySetInnerHTML={{ __html: about }}
          />
        </Box>
        <Box width={getWidth(12)} py={2}>
          <Flex flexDirection="column" style={{ height: "100%" }}>
            {phases &&
              phases.map((v, i) => (
                <Box
                  key={i}
                  mb={2}
                  onClick={() => setOpen(open === i ? false : i)}
                  style={{ cursor: "pointer" }}
                >
                  <h4
                    style={{
                      margin: "0",
                      padding: "0.5em 0",
                      fontWeight: "500",
                    }}
                  >
                    {v.name}
                  </h4>
                  <Accordion
                    style={{
                      overflow: "hidden",
                      columns: "300px 2",
                      columnGap: "5em",
                      breakInside: "avoid",
                      textAlign: "justify",
                      height: 0,
                    }}
                    pose={open === i ? "open" : "closed"}
                  >
                    <div
                      style={{ columns: "300px 2" }}
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
