import styled from "styled-components";

const MediumHeader = styled.h2`
  margin-top: ${props => props.theme.mediumHeader.marginTop};
  margin-bottom: ${props => props.theme.mediumHeader.marginBottom};
  font-weight: ${props => props.theme.mediumHeader.fontWeight};
  font-family: ${props => props.theme.mediumHeader.fontFamily};
  font-size: ${props => props.theme.mediumHeader.fontSize};
  color: ${props => props.theme.mediumHeader.color};
  text-transform: ${props => props.theme.mediumHeader.textTransform};
`

export default MediumHeader
