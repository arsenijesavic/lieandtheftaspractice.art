import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Wrap = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 900;
  padding: 1em 0;
  background: white;
`
const Iner = styled.div`
  width: 960px;
  margin: 0 auto;
`

const Nav = styled.nav`
  width: 50%;
  > ul {
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;

    > li {
      cursor: pointer;
    }
  }
`

const Header = () => (
  <Wrap>
    <Iner>
      <Nav>
        <ul>
          <li>
            <Link to="/#about">about</Link>
          </li>
          <li>
            <Link to="/#practice">practice</Link>
          </li>
          <li>
            <Link to="/#team">team</Link>
          </li>
          <li>
            <Link to="/#contact">contact</Link>
          </li>
        </ul>
      </Nav>
    </Iner>
  </Wrap>
)

Header.propTypes = {}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
