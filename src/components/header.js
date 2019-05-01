import React from 'react'
import styled from 'styled-components'

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
          <li>about</li>
          <li>practice</li>
          <li>team</li>
          <li>contact</li>
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
