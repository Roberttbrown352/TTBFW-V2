import styled from "styled-components";

const Page = styled.section`
  background-color: ${props => props.theme.color.page.backgroundColor};
  max-width: ${props => props.theme.style.page.maxWidth};
  font-size: ${props => props.theme.style.page.fontSize};
  color: ${props => props.theme.color.page.color};
  margin: ${props => props.theme.style.page.margin};
  padding-top: ${props => props.theme.style.page.paddingTop};
  padding-bottom: ${props => props.theme.style.page.paddingBottom};
  line-height: ${props => props.theme.style.page.lineHeight};
  position: ${props => props.theme.style.page.position};
  font-family: ${props => props.theme.style.page.fontFamily};
`

export default Page
