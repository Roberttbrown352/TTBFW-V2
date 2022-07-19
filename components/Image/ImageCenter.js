import styled from "styled-components";

const ImageCenter = styled.div`
  max-width: ${props => props.width ? props.width : props.theme.style.imageCenter.maxWidth};
  margin: ${props => props.theme.style.imageCenter.margin};
  display: ${props => props.theme.style.imageCenter.display};
  margin-bottom: ${props => props.theme.style.imageCenter.marginBottom};
  position: ${props => props.theme.style.imageCenter.position};
  padding: ${props => props.theme.style.imageCenter.padding};
  justify-content: ${props => props.theme.style.imageCenter.justifyContent};
  scroll-margin-top: 70px;
`

export default ImageCenter
