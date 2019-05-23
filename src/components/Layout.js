import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import Header from './header'
import { createGlobalStyle } from 'styled-components'

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]')
}

const GlobalStyle = createGlobalStyle`

  body {
    padding: 0;
    margin: 0;
    font-family: 'Arimo', sans-serif;
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
    font-weight: bold;
  }

  h2 {
    font-size: 3.375em;
  }

  h3 {
    font-size: 2.25em;
  }

  h4 {
    font-size: 1.5em;
    font-weight: 900;
  }

  p {
    font-size: 1em;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  console.log(data)

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Lie & Theft as Practice</title>
        <link
          href="https://fonts.googleapis.com/css?family=Arimo:400,700"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <div>
        <Header />
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
