import styled from "styled-components";

const SideNavExpandContainer = styled.div`
  height: 40px;
  width: 40px;
  position: absolute;
  left: 10px;
  background-color: #800008;
  text-align: center;
  cursor: pointer;
  border-radius: 40px;
  visibility: ${props => props.visibility};
  display: flex;
  justify-content: center;
  align-items: center;
`

export default SideNavExpandContainer
