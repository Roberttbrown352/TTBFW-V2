import styled from "styled-components";

const AsideLI = styled.li`
  padding: 10px 0px 10px 10px;
  position: relative;
  text-align: left;
  display: flex;

  &:before {
    content: "■";
    display: block;
    position: relative;
    left: -20px;
    margin: 0px -10px 0px 0px;
    width: 10px;
    box-sizing: border-box;
  }
`

export default AsideLI
