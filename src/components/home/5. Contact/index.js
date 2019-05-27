import React from 'react'
//import Img from 'gatsby-image'
//import styled from 'styled-components'
import { Flex, Box } from '@rebass/grid'
import Section from '../../../components/Section'
import Title from '../../../components/Title'
//import getWidth from '../../../utils/getWidth'

const Contact = ({ data }) => (
  <Section id="contact">
    <Flex justifyContent="space-between">
      <Box>
        <Title name="CONTACT" />
      </Box>
      <Box alignSelf="center">
        <h4>
          <a href="mailto:lieandtheftaspractice@gmail.com">
            lieandtheftaspractice@gmail.com
          </a>
        </h4>
      </Box>
    </Flex>
  </Section>
)

export default Contact
