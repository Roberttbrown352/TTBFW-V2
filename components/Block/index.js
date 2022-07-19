import HeaderBlock from "./HeaderBlock";
import AsideBlock from "./AsideBlock"

export default function Block({type, children, id}){

  if(type === "header"){
    return <HeaderBlock id={id}>{children}</HeaderBlock>
  }

  if(type === "aside"){
    return <AsideBlock id={id}>{children}</AsideBlock>
  }

  return <HeaderBlock id={id}>{children}</HeaderBlock>
}
