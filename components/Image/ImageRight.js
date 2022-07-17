import styled from "styled-components";

const ImageRight = styled.div`
  width: ${props => props.width};
  max-width: ${props => props.theme.style.imageRight.maxWidth};
  margin: ${props => props.theme.style.imageRight.margin};
  display: ${props => props.theme.style.imageRight.display};
  margin-bottom: ${props => props.theme.style.imageRight.marginBottom};
  margin-left: ${props => props.theme.style.imageRight.marginLeft};
  position: ${props => props.theme.style.imageRight.position};
  padding: ${props => props.theme.style.imageRight.padding};
  float: ${props => props.theme.style.imageRight.float};
`

export default ImageRight
