import styled from "styled-components";

const SideNavDropdownContainer = styled.div`
  height: 20px;
  width: 20px;
  text-align: center;
  cursor: pointer;
  transform: rotate(-90deg);

  ${props => props.active && `
    transform: rotate(0deg);
  `}
`

export default SideNavDropdownContainer
