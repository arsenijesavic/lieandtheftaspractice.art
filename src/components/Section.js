import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  padding: ${props => (props.full ? '' : '32px 0 64px 0')};
  position: relative;
  background: ${props => (props.bg ? props.bg : '#fff')};
`

const Wrap = styled.div`
  max-width: ${props => (props.full ? '100%' : '960px')};
  margin: 0 auto;
`

export default ({ children, ...rest }) => (
  <Section {...rest}>
    <Wrap {...rest}>{children}</Wrap>
  </Section>
)
