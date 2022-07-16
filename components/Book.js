import styled from "styled-components";

const Book = styled.main`
  background-color: ${props => props.theme.book.backgroundColor};
  height: ${props => props.theme.book.height};
  width: ${props => props.theme.book.width};
`

export default Book
