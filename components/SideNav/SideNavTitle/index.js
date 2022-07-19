import SideNavTitleContainer from "./SideNavTitleContainer";
import SideNavTitleHeader from "./SideNavTitleHeader";

export default function SideNavTitle({title}){

  return (
    <SideNavTitleContainer>
      <SideNavTitleHeader>
        {title}
      </SideNavTitleHeader>
    </SideNavTitleContainer>
  )
}
