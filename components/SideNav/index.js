import SideNavContainer from "./SideNavContainer";
import SideNavContent from "./SideNavContent";
import SideNavTitle from "./SideNavTitle";
import SideNavItems from "./SideNavItems";
import SideNavHeader from "./SideNavHeader";
import SideNavExpand from "./SideNavExpand";

import { useState } from "react";

export default function SideNav({title, items}){

  const [mainSelected, setMainSelected] = useState("")
  const [mainPrimary, setMainPrimary] = useState("")
  const [visibility, setVisibility] = useState("visible")

  return (
    <SideNavContainer>
      <SideNavExpand setVisibility={setVisibility} visibility={visibility}/>
      <SideNavContent visibility={visibility}>
        <SideNavTitle title={title} setVisibility={setVisibility} visibility={visibility}/>
        <SideNavItems>
          {items?.map(header => {
            return (<SideNavHeader title={header.title} subHeaders={header.subHeaders}
              key={`${header.title}-header`} upper={mainSelected} setUpper={setMainSelected}
              mainPrimary={mainPrimary} setMainPrimary={setMainPrimary}
              />)
          })}
        </SideNavItems>
      </SideNavContent>
    </SideNavContainer>
  )
}
