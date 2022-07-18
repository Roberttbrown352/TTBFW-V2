import styled from "styled-components";

const Book = styled.main`
  background-color: ${props => props.theme.color.book.backgroundColor};
  color: ${props => props.theme.color.book.color};
  height: ${props => props.theme.style.book.height};
  width: ${props => props.theme.style.book.width};
  transition: background 500ms ease-in-out, color 1000ms ease-in-out;
`

export default Book
