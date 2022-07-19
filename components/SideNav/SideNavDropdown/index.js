import SideNavDropdownContainer from "./SideNavDropdownContainer";

export default function SideNavDropdown({type}){
  if(type === "none"){
    return(
      <SideNavDropdownContainer />
    )
  }

  return (
    <SideNavDropdownContainer>
      {`>`}
    </SideNavDropdownContainer>
  )
}
