import styled from "styled-components";

const SideNavContainer = styled.div`
  width: 375px;
  position: fixed;
  top: 95px;
  bottom: 24px;
  left: calc(50% - 950px);
  border-radius: 8px 8px 0px 0px;
  z-index: 1;
  margin: 1px;

  @media (max-width: 1900px) {
    left: 0;
    bottom: 0;
  }
`

export default SideNavContainer
