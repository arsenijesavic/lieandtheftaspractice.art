import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { createGlobalStyle } from 'styled-components'

import Header from './header'

const GlobalStyle = createGlobalStyle`

  body {
    padding: 0;
    margin: 0;
    font-family: 'Cardo', serif;
  }
  a {
    text-decoration: none;
  }
  ul {
    margin: 0 auto;
    list-style-type: none;
  }

  h1 {
    font-size: 5.063em;
  }

  h2 {
    font-size: 3.375em;
  }

  h3 {
    font-size: 2.25em;
  }

  h4 {
    font-size: 1.5em;
  }

  p {
    font-size: 1em;
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>My Title</title>
          <link
            href="https://fonts.googleapis.com/css?family=Cardo:400,400i,700"
            rel="stylesheet"
          />
        </Helmet>
        <GlobalStyle />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
          }}
        >
          {/* <Header /> */}
          <main>{children}</main>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
