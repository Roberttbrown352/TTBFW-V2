import styled from "styled-components";

const SmallHeader = styled.h3`
  margin-top: ${props => props.theme.smallHeader.marginTop};
  margin-bottom: ${props => props.theme.smallHeader.marginBottom};
  font-weight: ${props => props.theme.smallHeader.fontWeight};
  font-family: ${props => props.theme.smallHeader.fontFamily};
  font-size: ${props => props.theme.smallHeader.fontSize};
  color: ${props => props.theme.smallHeader.color};
  text-transform: ${props => props.theme.smallHeader.textTransform};
`

export default SmallHeader
