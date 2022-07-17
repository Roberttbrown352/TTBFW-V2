import styled from "styled-components";

const SmallHeader = styled.h3`
  margin-top: ${props => props.theme.style.smallHeader.marginTop};
  margin-bottom: ${props => props.theme.style.smallHeader.marginBottom};
  font-weight: ${props => props.theme.style.smallHeader.fontWeight};
  font-family: ${props => props.theme.style.smallHeader.fontFamily};
  font-size: ${props => props.theme.style.smallHeader.fontSize};
  color: ${props => props.theme.color.smallHeader.color};
  background-color: ${props => props.theme.color.smallHeader.backgroundColor};
  text-transform: ${props => props.theme.style.smallHeader.textTransform};
`

export default SmallHeader
