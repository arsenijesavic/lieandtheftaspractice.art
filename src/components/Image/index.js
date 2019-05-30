import styled from 'styled-components'

export default styled.div`
  width: 100%;
  height: 100%;
  background-color: none;
  background-image: url("${props => props.src}");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
