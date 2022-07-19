import SideNavDropdownContainer from "./SideNavDropdownContainer";
import Arrow from "../../Icons/Arrow";

export default function SideNavDropdown({type, active}){
  if(type === "none"){
    return(
      <SideNavDropdownContainer />
    )
  }

  return (
    <SideNavDropdownContainer active={active}>
      <Arrow />
    </SideNavDropdownContainer>
  )
}
