import styled from "styled-components";

const SideNavSubHeaderContainer = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  position: relative;
  left: 5px;
  color: #8d8d8d;
  height: 20px;
  cursor: pointer;

  &:hover {
    background-color: rgb(128, 0, 0, 0.3)
  }

  ${props => props.primary && `
    background-color: #800008;
    color: #FFFFFF;

    &:hover {
      background-color: #800008;
      color: #FFFFFF;
    }
  `}
`

export default SideNavSubHeaderContainer
