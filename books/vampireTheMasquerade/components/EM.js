import styled from "styled-components";

const EM = styled.em`
  fontStyle: italic;
  color: ${props => props.theme.color.special.em.color};
  transition: background 500ms ease-in-out, color 1000ms ease-in-out;
`

export default EM
