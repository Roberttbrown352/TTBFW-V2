import styled from "styled-components";

const AbilityHeader = styled.h3`
  margin-top: ${props => props.theme.style.abilityHeader.marginTop};
  margin-bottom: ${props => props.theme.style.abilityHeader.marginBottom};
  font-weight: ${props => props.theme.style.abilityHeader.fontWeight};
  font-family: ${props => props.theme.style.abilityHeader.fontFamily};
  font-size: ${props => props.theme.style.abilityHeader.fontSize};
  color: ${props => props.theme.color.abilityHeader.color};
  background-color: ${props => props.theme.color.abilityHeader.backgroundColor};
  text-transform: ${props => props.theme.style.abilityHeader.textTransform};
  scroll-margin-top: 70px;
  transition: background 500ms ease-in-out, color 1000ms ease-in-out;
`

export default AbilityHeader
