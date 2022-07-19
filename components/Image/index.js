import ImageCenter from "./ImageCenter";
import ImageRight from "./ImageRight";
import ImageObject from "./ImageObject";

export default function Image({src, alt, type, width, height, id}){
  if(type === "center"){
    return (
      <ImageCenter id={id}>
        <ImageObject src={src} alt={alt} width={width} height={height}/>
      </ImageCenter>
    )
  }

  if(type === "right"){
    return (
      <ImageRight width={width} id={id}>
        <ImageObject src={src} alt={alt} width={width} height={height}/>
      </ImageRight>
    )
  }

  return (
    <ImageCenter id={id}>
      <ImageObject src={src} alt={alt} width={width} height={height}/>
    </ImageCenter>
  )
}
