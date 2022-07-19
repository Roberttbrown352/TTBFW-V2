import styled from "styled-components";

const SideNavHeaderContainer = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  height: 20px;
  color: #8D8D8D;
  cursor: pointer;


  &:hover {
    background-color: rgb(128, 0, 0, 0.3)
  }

  ${props => props.active && `
    background-color: none;
    color: #800008;

    &:hover {
      background-color: rgb(128, 0, 0, 0.3)
    }
  `}

  ${props => props.primary && `
    background-color: #800008;
    color: #FFFFFF;

    &:hover {
      background-color: #800008;
      color: #FFFFFF;
    }
  `}
`

export default SideNavHeaderContainer
