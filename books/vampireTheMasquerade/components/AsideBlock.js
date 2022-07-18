import styled from "styled-components";
import AsideBlock from "../../../components/Block/AsideBlock";

const NewAsideBlock = styled(AsideBlock)`
  border: solid;
  border-width: 10px 0px;
  border-color: ${props => props.theme.color.special.asideBlock.borderColor};
  padding: 30px;
  margin: 40px 0;
  transition: background 500ms ease-in-out, color 1000ms ease-in-out;
`

export default NewAsideBlock
