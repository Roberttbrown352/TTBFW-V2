import styled from "styled-components";

const SideNavContent = styled.div`
  background-color: ${props => props.theme.color.sideNavContent.backgroundColor};
  border-radius: 8px 8px 0px 0px;
  padding: 0px 0px 10px 0px;
  max-height: 100%;
  overflow-y: auto;
  max-width: 100%;
  overflow-x: hidden;
  visibility: ${props => props.visibility};
  transition: background 500ms ease-in-out, color 1000ms ease-in-out;
`

export default SideNavContent
