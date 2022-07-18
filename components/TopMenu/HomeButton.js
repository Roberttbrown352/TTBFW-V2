import styled from "styled-components";

const HomeButton = styled.button`
  height: ${props => props.theme.style.homeButton.height};
  width: ${props => props.theme.style.homeButton.width};
  text-align: ${props => props.theme.style.homeButton.textAlign};
`

export default HomeButton
