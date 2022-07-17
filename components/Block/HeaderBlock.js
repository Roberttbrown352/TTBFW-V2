import styled from "styled-components";

const HeaderBlock = styled.section`
  margin: ${props => props.theme.headerBlock.margin};
  color: ${props => props.theme.headerBlock.color};
  border-radius: ${props => props.theme.headerBlock.borderRadius};
  background-color: ${props => props.theme.headerBlock.backgroundColor};
  padding: ${props => props.theme.headerBlock.padding};
  font-style: ${props => props.theme.headerBlock.fontStyle};
  font-weight: ${props => props.theme.headerBlock.fontWeight};
  font-family: ${props => props.theme.headerBlock.fontFamily};
  font-size: ${props => props.theme.headerBlock.fontSize};
  line-height: ${props => props.theme.headerBlock.lineHeight};
  letter-spacing: ${props => props.theme.headerBlock.letterSpacing};
`
export default HeaderBlock
