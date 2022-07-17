import styled from "styled-components";

const Book = styled.main`
  background-color: ${props => props.theme.color.book.backgroundColor};
  color: ${props => props.theme.color.book.color};
  height: ${props => props.theme.style.book.height};
  width: ${props => props.theme.style.book.width};
`

export default Book
