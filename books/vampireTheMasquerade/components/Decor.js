import styled from "styled-components";

const Decor = styled.span`
  position: relative;
  margin: 0 10px;
  top: -5px;
  font-family: Bodoni-Ornaments;
  font-size: 20px;
  color: ${props => props.theme.color.special.decor.color};
  transition: background 500ms ease-in-out, color 1000ms ease-in-out;
`

export default Decor
