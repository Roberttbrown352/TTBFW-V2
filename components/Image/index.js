import ImageCenter from "./ImageCenter";
import ImageRight from "./ImageRight";
import ImageObject from "./ImageObject";

export default function Image({src, alt, type, width, height}){
  if(type === "center"){
    return (
      <ImageCenter>
        <ImageObject src={src} alt={alt} width={width} height={height}/>
      </ImageCenter>
    )
  }

  if(type === "right"){
    return (
      <ImageRight width={width}>
        <ImageObject src={src} alt={alt} width={width} height={height}/>
      </ImageRight>
    )
  }

  return (
    <ImageCenter>
      <ImageObject src={src} alt={alt} width={width} height={height}/>
    </ImageCenter>
  )
}
