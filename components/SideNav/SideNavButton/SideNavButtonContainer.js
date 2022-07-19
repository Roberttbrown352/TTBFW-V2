import SideNavDropdownContainer from "../SideNavDropdown/SideNavDropdownContainer";
import styled from "styled-components";

const SideNavButtonContainer = styled(SideNavDropdownContainer)`
  visibility: hidden;

  @media (max-width: 1900px) {
    visibility: visible;
  }
`

export default SideNavButtonContainer
