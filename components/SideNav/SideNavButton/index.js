import SideNavButtonContainer from "./SideNavButtonContainer";
import Close from "../../Icons/Close";

export default function SideNavButton({setVisibility, visibility}){

  if(visibility === "hidden"){
    return <></>
  }

  return(
    <SideNavButtonContainer visibility={visibility} onClick={() => {setVisibility("hidden")}}>
      <Close />
    </SideNavButtonContainer>
  )
}
