import styled from "styled-components";

const LargeHeader = styled.h1`
  margin-top: ${props => props.theme.style.largeHeader.marginTop};
  margin-bottom: ${props => props.theme.style.largeHeader.marginBottom};
  font-weight: ${props => props.theme.style.largeHeader.fontWeight};
  font-family: ${props => props.theme.style.largeHeader.fontFamily};
  font-size: ${props => props.theme.style.largeHeader.fontSize};
  color: ${props => props.theme.color.largeHeader.color};
  background-color: ${props => props.theme.color.largeHeader.backgroundColor};
  text-transform: ${props => props.theme.style.largeHeader.textTransform};
  transition: background 500ms ease-in-out, color 1000ms ease-in-out;
`

export default LargeHeader
