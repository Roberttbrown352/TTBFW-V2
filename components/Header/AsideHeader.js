import styled from "styled-components";

const AsideHeader = styled.h5`
  margin-top: ${props => props.theme.asideHeader.marginTop};
  margin-bottom: ${props => props.theme.asideHeader.marginBottom};
  font-weight: ${props => props.theme.asideHeader.fontWeight};
  font-family: ${props => props.theme.asideHeader.fontFamily};
  font-size: ${props => props.theme.asideHeader.fontSize};
  color: ${props => props.theme.asideHeader.color};
  text-transform: ${props => props.theme.asideHeader.textTransform};
`

export default AsideHeader
