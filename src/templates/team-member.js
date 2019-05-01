import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

const TeamMember = ({ data }) => {
  return (
    <Layout>
      <h1>Hello</h1>
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
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
