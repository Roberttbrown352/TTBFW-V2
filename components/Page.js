import styled from "styled-components";

const Page = styled.section`
  background-color: ${props => props.theme.page.backgroundColor};
  max-width: ${props => props.theme.page.maxWidth};
  font-size: ${props => props.theme.page.fontSize};
  color: ${props => props.theme.page.color};
  margin: ${props => props.theme.page.margin};
  padding-top: ${props => props.theme.page.paddingTop};
  padding-bottom: ${props => props.theme.page.paddingBottom};
  line-height: ${props => props.theme.page.lineHeight};
  position: ${props => props.theme.page.position};
  font-family: ${props => props.theme.page.fontFamily};
`

export default Page
