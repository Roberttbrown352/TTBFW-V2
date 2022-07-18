import styled from "styled-components";

const TitleHeader = styled.h1`
  margin-top: 0px;
  margin-bottom: 10px;
  color: ${props => props.theme.color.special.titleHeader.color};
  text-transform: uppercase;
  text-align: center;
  font-family: Gill;
  font-size: 36px;
  letter-spacing: 4px;
  font-weight: 400;
  transition: background 500ms ease-in-out, color 1000ms ease-in-out;
`

export default TitleHeader
