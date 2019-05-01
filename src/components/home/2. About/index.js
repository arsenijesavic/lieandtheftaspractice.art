import React from 'react'

//import styled from 'styled-components'
import { Flex, Box } from '@rebass/grid'
import Section from '../../../components/Section'
import Collapsible from 'react-collapsible'
import getWidth from '../../../utils/getWidth'

const About = ({ data }) => (
  <Section style={{ height: '100vh' }}>
    <h2>about</h2>
    <Flex>
      <Box width={getWidth(8)} pr={4}>
        <p style={{ padding: 0, margin: 0 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos deserunt
          laborum delectus obcaecati ad cumque sit commodi molestias, quisquam
          dolor iure quaerat corrupti quasi alias, repellat, enim repudiandae
          culpa ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
          deserunt laborum delectus obcaecati ad cumque sit commodi molestias,
          quisquam dolor iure quaerat corrupti quasi alias, repellat, enim
          repudiandae culpa ex. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eos deserunt laborum delectus obcaecati ad cumque
          sit commodi molestias, quisquam dolor iure quaerat corrupti quasi
          alias, repellat, enim repudiandae culpa ex. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Eos deserunt laborum delectus obcaecati
          ad cumque sit commodi molestias, quisquam dolor iure quaerat corrupti
          quasi alias, repellat, enim repudiandae culpa ex. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Eos deserunt laborum delectus
          obcaecati ad cumque sit commodi molestias, quisquam dolor iure quaerat
          corrupti quasi alias, repellat, enim repudiandae culpa ex.Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Eos deserunt laborum
          delectus obcaecati ad cumque sit commodi molestias, quisquam dolor
          iure quaerat corrupti quasi alias, repellat, enim repudiandae culpa
          ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
          deserunt laborum delectus obcaecati ad cumque sit commodi molestias,
          quisquam dolor iure quaerat corrupti quasi alias, repellat, enim
          repudiandae culpa ex. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eos deserunt laborum delectus obcaecati ad cumque
          sit commodi molestias, quisquam dolor iure quaerat corrupti quasi
          alias, repellat, enim repudiandae culpa ex. Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
        </p>
      </Box>
      <Box width={getWidth(4)}>
        <Collapsible
          trigger="Phase 1"
          triggerStyle={{
            fontWeight: '900',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            totam illum dolorum tempore nisi vitae, nobis esse modi praesentium
            quisquam perspiciatis, exercitationem, quod veniam iure debitis
            dolor nesciunt facere quis.
          </p>
        </Collapsible>

        <Collapsible
          trigger="Phase 2"
          triggerStyle={{ fontWeight: '900', cursor: 'pointer' }}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            totam illum dolorum tempore nisi vitae, nobis esse modi praesentium
            quisquam perspiciatis, exercitationem, quod veniam iure debitis
            dolor nesciunt facere quis.
          </p>
        </Collapsible>
      </Box>
    </Flex>
  </Section>
)

export default About
