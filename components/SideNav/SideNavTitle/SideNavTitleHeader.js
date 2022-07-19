import styled from "styled-components";

const SideNavTitleHeader = styled.h4`
  font-size: 18px;
  margin: 0;
  padding: 0px 16px;
  width: 500px;
  color: ${props => props.theme.color.sideNavTitleHeader.color};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export default SideNavTitleHeader
