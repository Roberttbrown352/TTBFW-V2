import HeaderBlock from "./HeaderBlock";
import AsideBlock from "./AsideBlock"

export default function Block({type, children}){

  if(type === "header"){
    return <HeaderBlock>{children}</HeaderBlock>
  }

  if(type === "aside"){
    return <AsideBlock>{children}</AsideBlock>
  }

  return <HeaderBlock>{children}</HeaderBlock>
}
