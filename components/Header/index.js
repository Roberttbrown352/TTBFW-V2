import AsideHeader from "./AsideHeader";
import AbilityHeader from "./AbilityHeader";
import LargeHeader from "./LargeHeader"
import MediumHeader from "./MediumHeader";
import SmallHeader from "./SmallHeader"

export default function Header({type, children}){

  if(type === "aside"){
    return(
      <AsideHeader>{children}</AsideHeader>
    )
  }

  if(type === "ability"){
    return(
      <AbilityHeader>{children}</AbilityHeader>
    )
  }

  if(type === "large"){
    return(
      <LargeHeader>{children}</LargeHeader>
    )
  }

  if(type === "medium"){
    return(
      <MediumHeader>{children}</MediumHeader>
    )
  }

  if(type === "small"){
    return(
      <SmallHeader>{children}</SmallHeader>
    )
  }

  return <LargeHeader>{children}</LargeHeader>
}
