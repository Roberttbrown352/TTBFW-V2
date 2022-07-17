import styled from "styled-components";

const AsideBlock = styled.section`
  margin: ${props => props.theme.style.asideBlock.margin};
  color: ${props => props.theme.color.asideBlock.color};
  border-radius: ${props => props.theme.style.asideBlock.borderRadius};
  background-color: ${props => props.theme.color.asideBlock.backgroundColor};
  padding: ${props => props.theme.style.asideBlock.padding};
  font-style: ${props => props.theme.style.asideBlock.fontStyle};
  font-weight: ${props => props.theme.style.asideBlock.fontWeight};
  font-size: ${props => props.theme.style.asideBlock.fontSize};
  line-height: ${props => props.theme.style.asideBlock.lineHeight};
  letter-spacing: ${props => props.theme.style.asideBlock.letterSpacing};
  box-shadow: ${props => props.theme.style.asideBlock.boxShadow};
`

export default AsideBlock
