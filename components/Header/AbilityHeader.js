import styled from "styled-components";

const AbilityHeader = styled.h3`
  margin-top: ${props => props.theme.abilityHeader.marginTop};
  margin-bottom: ${props => props.theme.abilityHeader.marginBottom};
  font-weight: ${props => props.theme.abilityHeader.fontWeight};
  font-family: ${props => props.theme.abilityHeader.fontFamily};
  font-size: ${props => props.theme.abilityHeader.fontSize};
  color: ${props => props.theme.abilityHeader.color};
  text-transform: ${props => props.theme.abilityHeader.textTransform};
`

export default AbilityHeader
