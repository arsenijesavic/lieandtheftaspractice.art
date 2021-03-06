import React from 'react'
import { Flex, Box } from '@rebass/grid'
import { Link } from 'react-scroll'

const Title = ({ name, color }) => (
  <div style={{ position: 'relative', left: '-52px', color: color }}>
    <Flex>
      <Box
        style={{ marginTop: '2px', cursor: 'pointer' }}
        alignSelf="center"
        mr={3}
      >
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          duration={500}
        >
          <svg
            width="34"
            height="34"
            viewBox="0 0 23 23"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Page-1" fill="none" fillRule="evenodd">
              <g id="arrow" transform="translate(-1 -1)">
                <g
                  id="Group"
                  transform="translate(1 1)"
                  fill={color ? color : '#000'}
                  fillRule="nonzero"
                >
                  <rect
                    id="Rectangle"
                    transform="rotate(-45 11.09 11.298)"
                    x="-4"
                    y="10.798"
                    width="30.18"
                    height="1"
                  />
                  <polygon
                    id="Path"
                    points="22.3873766 19.14 21.3873766 19.14 21.3873766 1 3.50737664 1 3.50737664 0 22.3873766 0"
                  />
                </g>
                <rect id="Rectangle" width="24" height="24" />
              </g>
            </g>
          </svg>
        </Link>
      </Box>
      <Box>
        <h2 style={{ fontWeight: '100', margin: '0', padding: '0' }}>{name}</h2>
      </Box>
    </Flex>
  </div>
)

export default Title
