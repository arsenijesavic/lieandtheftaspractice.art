import styled from 'styled-components'

const Section = styled.section`
  max-width: ${props => (props.full ? '100%' : '960px')};
  padding: 32px 0 64px 0;
  margin: 0 auto;
  position: relative;
`

export default Section
