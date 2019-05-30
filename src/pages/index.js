import React from 'react'
//import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import Header from '../components/header'
import { Hero, About, Practice, Team, Contact } from '../components/home'

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Header type="scroll" />
      <About />
      <Practice />
      <Team />
      <Contact />
    </Layout>
  )
}

// IndexPage.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.shape({
//       frontmatter: PropTypes.object,
//     }),
//   }),
// }

export default IndexPage
