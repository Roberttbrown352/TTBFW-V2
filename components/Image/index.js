import ImageCenter from "./ImageCenter";
import ImageRight from "./ImageRight";
import ImageObject from "./ImageObject";

export default function Image({src, alt, type, width}){
  if(type === "center"){
    return (
      <ImageCenter>
        <ImageObject src={src} alt={alt} />
      </ImageCenter>
    )
  }

  if(type === "right"){
    return (
      <ImageRight width={width}>
        <ImageObject src={src} alt={alt} />
      </ImageRight>
    )
  }

  return (
    <ImageCenter>
      <ImageObject src={src} alt={alt} />
    </ImageCenter>
  )
}
