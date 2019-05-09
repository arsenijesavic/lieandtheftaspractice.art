import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import { Flex, Box } from '@rebass/grid'
import getWidth from '../utils/getWidth'
import Layout from '../components/Layout'
import Section from '../components/Section'

const TeamMember = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout>
      <Section>
        <Flex style={{ marginTop: '200px' }}>
          <Box width={getWidth(4)} p={2}>
            <Img
              fluid={frontmatter.photo.childImageSharp.fluid}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'saturate(0%)',
              }}
            />
          </Box>
          <Box width={getWidth(6)} p={2}>
            <h2>{frontmatter.name}</h2>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </Box>
        </Flex>
      </Section>
    </Layout>
  )
}

TeamMember.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default TeamMember

export const pageQuery = graphql`
  query TeamMemberByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        name
        photo {
          childImageSharp {
            fluid(maxWidth: 10000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
