import styled from 'styled-components'

const Section = styled.section`
  max-width: ${props => (props.full ? '100%' : '960px')};
  min-height: 100vh;
  margin: 0 auto;
  position: relative;
`

export default Section
