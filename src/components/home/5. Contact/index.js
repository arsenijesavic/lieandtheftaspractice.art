import React from 'react'
//import Img from 'gatsby-image'
//import styled from 'styled-components'
import { Flex, Box } from '@rebass/grid'
import Section from '../../../components/Section'
import Title from '../../../components/Title'
//import getWidth from '../../../utils/getWidth'

const Contact = () => {
  return (
    <Section id="contact">
      <Flex flexDirection="column" justifyContent="space-between">
        <Box>
          <Title name="CONTACT" />
        </Box>

        <Box>
          <h4 style={{ fontWeight: '500' }}>
            <a
              style={{ color: '#000' }}
              href="mailto:lieandtheftaspractice@gmail.com"
            >
              lieandtheftaspractice@gmail.com
            </a>
          </h4>
          <h4 style={{ fontWeight: '500' }}>
            <a
              style={{ color: '#000' }}
              href="mailto:contact@darkodragicevic.com"
            >
              contact@darkodragicevic.com
            </a>
          </h4>
          <h4 style={{ fontWeight: '500' }}>
            <a
              style={{ color: '#000' }}
              href="mailto:zorica.milisavljevic@goethe.de"
            >
              zorica.milisavljevic@goethe.de
            </a>
          </h4>
        </Box>
      </Flex>
    </Section>
  )
}
export default Contact
