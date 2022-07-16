import styled from "styled-components";
import Image from "next/image";

const ImageObject = styled(Image)`
  display: ${props => props.theme.imageObject.display};
  max-width: ${props => props.theme.imageObject.maxWidth};
  margin: ${props => props.theme.imageObject.margin};
`

export default ImageObject
