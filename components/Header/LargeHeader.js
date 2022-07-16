import styled from "styled-components";

const LargeHeader = styled.h1`
  margin-top: ${props => props.theme.largeHeader.marginTop};
  margin-bottom: ${props => props.theme.largeHeader.marginBottom};
  font-weight: ${props => props.theme.largeHeader.fontWeight};
  font-family: ${props => props.theme.largeHeader.fontFamily};
  font-size: ${props => props.theme.largeHeader.fontSize};
  color: ${props => props.theme.largeHeader.color};
  text-transform: ${props => props.theme.largeHeader.textTransform};
`

export default LargeHeader
