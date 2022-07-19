import SideNavExpandContainer from "./SideNavExpandContainer";
import Expand from "../../Icons/Expand"

export default function SideNavExpand({setVisibility, visibility}){
  return(
    <SideNavExpandContainer onClick={() => {setVisibility("visible")}}
    visibility={(visibility === "hidden" ? "visible" : "hidden")}>
      <Expand />
    </SideNavExpandContainer>
  )
}
