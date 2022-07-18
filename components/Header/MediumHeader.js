import styled from "styled-components";

const MediumHeader = styled.h2`
  margin-top: ${props => props.theme.style.mediumHeader.marginTop};
  margin-bottom: ${props => props.theme.style.mediumHeader.marginBottom};
  font-weight: ${props => props.theme.style.mediumHeader.fontWeight};
  font-family: ${props => props.theme.style.mediumHeader.fontFamily};
  font-size: ${props => props.theme.style.mediumHeader.fontSize};
  color: ${props => props.theme.color.mediumHeader.color};
  background-color: ${props => props.theme.color.mediumHeader.backgroundColor};
  text-transform: ${props => props.theme.style.mediumHeader.textTransform};
  transition: background 500ms ease-in-out, color 1000ms ease-in-out;
`

export default MediumHeader
