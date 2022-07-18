import styled from "styled-components";

const ThemeButton = styled.button`
  height: ${props => props.theme.style.themeButton.height};
  width: ${props => props.theme.style.themeButton.width};
  text-align: ${props => props.theme.style.themeButton.textAlign};
`

export default ThemeButton
