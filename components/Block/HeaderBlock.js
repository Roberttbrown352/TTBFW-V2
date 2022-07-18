import styled from "styled-components";

const HeaderBlock = styled.section`
  margin: ${props => props.theme.style.headerBlock.margin};
  color: ${props => props.theme.color.headerBlock.color};
  border-radius: ${props => props.theme.style.headerBlock.borderRadius};
  background-color: ${props => props.theme.color.headerBlock.backgroundColor};
  padding: ${props => props.theme.style.headerBlock.padding};
  font-style: ${props => props.theme.style.headerBlock.fontStyle};
  font-weight: ${props => props.theme.style.headerBlock.fontWeight};
  font-family: ${props => props.theme.style.headerBlock.fontFamily};
  font-size: ${props => props.theme.style.headerBlock.fontSize};
  line-height: ${props => props.theme.style.headerBlock.lineHeight};
  letter-spacing: ${props => props.theme.style.headerBlock.letterSpacing};
  transition: background 500ms ease-in-out, color 1000ms ease-in-out;
`
export default HeaderBlock
