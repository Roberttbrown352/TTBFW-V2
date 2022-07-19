import SideNavTitleContainer from "./SideNavTitleContainer";
import SideNavTitleHeader from "./SideNavTitleHeader";
import SideNavButton from "../SideNavButton";

export default function SideNavTitle({title, setVisibility, visibility}){

  return (
    <SideNavTitleContainer>
      <SideNavTitleHeader>
        {title}
      </SideNavTitleHeader>
      <SideNavButton setVisibility={setVisibility} visibility={visibility} />
    </SideNavTitleContainer>
  )
}

// setVisibility("hidden")
