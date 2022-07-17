import styled from "styled-components";

const AsideHeader = styled.h5`
  margin-top: ${props => props.theme.style.asideHeader.marginTop};
  margin-bottom: ${props => props.theme.style.asideHeader.marginBottom};
  font-weight: ${props => props.theme.style.asideHeader.fontWeight};
  font-family: ${props => props.theme.style.asideHeader.fontFamily};
  font-size: ${props => props.theme.style.asideHeader.fontSize};
  color: ${props => props.theme.color.asideHeader.color};
  background-color: ${props => props.theme.color.asideHeader.backgroundColor};
  text-transform: ${props => props.theme.style.asideHeader.textTransform};
`

export default AsideHeader
