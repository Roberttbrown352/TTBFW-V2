import styled from "styled-components";

const AsideBlock = styled.section`
  margin: ${props => props.theme.asideBlock.margin};
  color: ${props => props.theme.asideBlock.color};
  border-radius: ${props => props.theme.asideBlock.borderRadius};
  background-color: ${props => props.theme.asideBlock.backgroundColor};
  padding: ${props => props.theme.asideBlock.padding};
  font-style: ${props => props.theme.asideBlock.fontStyle};
  font-weight: ${props => props.theme.asideBlock.fontWeight};
  font-size: ${props => props.theme.asideBlock.fontSize};
  line-height: ${props => props.theme.asideBlock.lineHeight};
  letter-spacing: ${props => props.theme.asideBlock.letterSpacing};
  box-shadow: ${props => props.theme.asideBlock.boxShadow};
`

export default AsideBlock
