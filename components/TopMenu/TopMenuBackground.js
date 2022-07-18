import styled from "styled-components";

const TopMenuBackground = styled.nav`
  background: ${props => props.theme.style.topMenuBackground.background};
  background-color: ${props => props.theme.color.topMenuBackground.backgroundColor};
  position: ${props => props.theme.style.topMenuBackground.position};
  z-index: ${props => props.theme.style.topMenuBackground.zIndex};
  top: ${props => props.theme.style.topMenuBackground.top};;
  height: ${props => props.theme.style.topMenuBackground.height};
  width: ${props => props.theme.style.topMenuBackground.width};
`

export default TopMenuBackground
