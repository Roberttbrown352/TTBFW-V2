import styled from "styled-components";

const TopMenuContainer = styled.nav`
  height: ${props => props.theme.style.topMenuContainer.height};
  width: ${props => props.theme.style.topMenuContainer.width};
  display: ${props => props.theme.style.topMenuContainer.display};
  align-items: ${props => props.theme.style.topMenuContainer.alignItems};
  padding: ${props => props.theme.style.topMenuContainer.padding};
`

export default TopMenuContainer
