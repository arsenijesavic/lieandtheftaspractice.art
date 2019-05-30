import React from 'react'
import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Flex, Box } from '@rebass/grid'
import getWidth from '../utils/getWidth'
import Layout from '../components/Layout'
import Header from '../components/header'
import Section from '../components/Section'

const PracticeWrap = styled.div`
  overflow: hidden;
`

const TeamMember = ({ data, ...props }) => {
  const {
    fields: { practices },
    frontmatter,
    html,
  } = data.markdownRemark

  return (
    <Layout style={{ cursor: `url('/img/arrow.png'), auto` }}>
      <Header />
      <Section onClick={() => props.navigate('/#team')}>
        <Flex style={{ padding: '32px 0' }}>
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

        {practices.length > 0 && (
          <Flex flexWrap="wrap">
            <Box width={getWidth(12)} p={2}>
              <h4>practices</h4>
            </Box>
            {practices.map((v, i) => (
              <Box key={i} width={getWidth(3)} p={2}>
                <Link to={v.url}>
                  <PracticeWrap>
                    <Img
                      fluid={v.featuredimage.childImageSharp.fluid}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </PracticeWrap>
                </Link>
              </Box>
            ))}
          </Flex>
        )}
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
      fields {
        practices {
          title
          url
          date(formatString: "MMMM DD, YYYY")
          featuredimage {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }

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
