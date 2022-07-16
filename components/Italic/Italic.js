import styled from "styled-components";

const Italic = styled.p`
  font-style: ${props => props.theme.italic.fontStyle};
  color: ${props => props.theme.italic.color};
`

export default Italic
