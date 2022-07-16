import styled from "styled-components";

const ImageCenter = styled.div`
  max-width: ${props => props.theme.imageCenter.maxWidth};
  margin: ${props => props.theme.imageCenter.margin};
  display: ${props => props.theme.imageCenter.display};
  margin-bottom: ${props => props.theme.imageCenter.marginBottom};
  position: ${props => props.theme.imageCenter.position};
  padding: ${props => props.theme.imageCenter.padding};
`

export default ImageCenter
