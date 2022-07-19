import AsideHeader from "./AsideHeader";
import AbilityHeader from "./AbilityHeader";
import LargeHeader from "./LargeHeader"
import MediumHeader from "./MediumHeader";
import SmallHeader from "./SmallHeader"

export default function Header({type, children, id}){

  if(type === "aside"){
    return(
      <AsideHeader id={id}>{children}</AsideHeader>
    )
  }

  if(type === "ability"){
    return(
      <AbilityHeader id={id}>{children}</AbilityHeader>
    )
  }

  if(type === "large"){
    return(
      <LargeHeader id={id}>{children}</LargeHeader>
    )
  }

  if(type === "medium"){
    return(
      <MediumHeader id={id}>{children}</MediumHeader>
    )
  }

  if(type === "small"){
    return(
      <SmallHeader id={id}>{children}</SmallHeader>
    )
  }

  return <LargeHeader id={id}>{children}</LargeHeader>
}
