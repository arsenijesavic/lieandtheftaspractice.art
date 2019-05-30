import React from 'react'
import styled from 'styled-components'
import { Link as ScrollLink } from 'react-scroll'
import { Link as GatsbyLink } from 'gatsby'

const Wrap = styled.header`
  position: sticky;
  top: 0;
  z-index: 900;
  padding: 0.5em;
  background: white;
  display: flex;
  justify-content: flex-end;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`
const Iner = styled.div`
  width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
`

const Nav = styled.nav`
  width: 50%;
  align-self: center;

  > ul {
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;

    > li {
      cursor: pointer;
      padding: 0;
      margin: 0;
      > a.active {
        border-bottom: 1px solid black;
      }
      > a {
        text-transform: uppercase;
        color: black;
      }
    }
  }
`

const Header = ({ type }) => {
  const Link = type === 'scroll' ? ScrollLink : GatsbyLink
  return (
    <Wrap>
      <Iner>
        <Nav>
          <ul>
            {[
              ...(type !== 'scroll' ? ['home'] : []),
              'about',
              'practice',
              'team',
              'contact',
            ].map((link, i) => (
              <li key={i}>
                <Link
                  activeClass="active"
                  to={type === 'scroll' ? link : `/#${link}`}
                  offset={-40}
                  spy={true}
                  hashSpy={true}
                  smooth={true}
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </Nav>
        <div style={{ position: 'relative', right: '-55px' }}>
          <a
            href="https://www.goethe.de/ins/cs/sr/kul/sup/ngt/ltp.html"
            target="_tab"
          >
            <img
              src="/img/GI_Logo.png"
              style={{ height: '50px', objectFit: 'cover' }}
              alt=""
            />
          </a>
        </div>
      </Iner>
    </Wrap>
  )
}

Header.propTypes = {}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
