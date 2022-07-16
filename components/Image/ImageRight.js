import styled from "styled-components";

const ImageRight = styled.div`
  width: ${props => props.width};
  max-width: ${props => props.theme.imageRight.maxWidth};
  margin: ${props => props.theme.imageRight.margin};
  display: ${props => props.theme.imageRight.display};
  margin-bottom: ${props => props.theme.imageRight.marginBottom};
  margin-left: ${props => props.theme.imageRight.marginLeft};
  position: ${props => props.theme.imageRight.position};
  padding: ${props => props.theme.imageRight.padding};
  float: ${props => props.theme.imageRight.float};
`

export default ImageRight
