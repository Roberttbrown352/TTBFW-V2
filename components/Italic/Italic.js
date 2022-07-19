import styled from "styled-components";

const Italic = styled.p`
  font-style: ${props => props.theme.style.italic.fontStyle};
  color: ${props => props.theme.color.italic.color};
  background-color: ${props => props.theme.color.italic.backgroundColor};
  scroll-margin-top: 70px;
  transition: background 500ms ease-in-out, color 1000ms ease-in-out;
`

export default Italic
