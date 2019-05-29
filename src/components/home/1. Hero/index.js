import React from 'react'
import Section from '../../../components/Section'
import Image from '../../../components/Image'
// import getWidth from '../../../utils/getWidth'

const Hero = () => {
  return (
    <Section full style={{ height: '100vh', marginBottom: '64px' }}>
      <h1 style={{ margin: '0', padding: '16px' }}>
        LIE and THEFT as PRACTICE
      </h1>
      <Image alt="fu" src="img/hero.jpg" />
    </Section>
  )
}

export default Hero
