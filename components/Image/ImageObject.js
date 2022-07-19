import styled from "styled-components";
import Image from "next/image";

const ImageObject = styled(Image)`
  display: ${props => props.theme.style.imageObject.display};
  max-width: ${props => props.theme.style.imageObject.maxWidth};
  margin: ${props => props.theme.style.imageObject.margin};
  scroll-margin-top: 70px;
`

export default ImageObject
